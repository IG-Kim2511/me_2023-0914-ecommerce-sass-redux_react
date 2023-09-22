import React, { useState } from "react";
import products from "../data";
import FilteredProducts from "./FilteredProducts";

const FilterMe = () => {
  // 🚀404 there are 6 type of category object in data.js.  make input tag by 6type of category
  /* 
    중복된 값을 제거하기 위해 Set 객체로 변환합니다. Set 객체는 중복을 허용하지 않는 고유한 값만 포함할 수 있는 자료 구조입니다.
    마지막으로, Array.from 함수를 사용하여 Set 객체를 다시 배열로 변환합니다.
    결과적으로, 위의 코드는 products 배열에서 중복되지 않는 모든 category 값을 추출하여 배열로 만들고, 이 배열을 반환합니다. 이렇게 하면 products 배열에서 고유한 카테고리 값을 얻을 수 있게 됩니다.
    */
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

// 🍀input checkbox
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    console.log(value);
    console.log(isChecked);

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  // 🍀input range
  const [maxPrice, setMaxPrice] = useState(1000);
  console.log(maxPrice)

// 🍀input radio
  const [sort, setSort] = useState(null);
  console.log(sort)


  return (
    <div id="filter">
      <main className="left">
        {/* input checkbox */}
        <section className="filterItem">
          <h2>Product categories 6 type</h2>

          {/* 👉404 */}
          {uniqueCategories.map((item) => (
            <div className="inputItem" key={item}>
              <input
                type="checkbox"
                id={item}
                // 🦄onChange, value
                value={item}
                onChange={handleChange}
              />
              {/* 🦄htmlFor */}
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </section>

        {/* 🦄input type='range' */}
        <section className="filterItem">
          <h2>filter by price</h2>
          <div className="inputItem">
            <span>0 $</span>
            <input
            type="range"
            min={0}
            max={1000}

            // 🦄 onChange={(e) => setMaxPrice(e.target.value)}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
            <span>{maxPrice} $</span>
          </div>
        </section>

        {/* input radio */}
        <section className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                //  🦄 onChange={(e) => setSort("asc")}
                onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                //  🦄 onChange={(e) => setSort("desc")}
                onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </section>
      </main>
      <main className="right">
        <FilteredProducts  category={selectedSubCats} maxPrice={maxPrice}  sort={sort}  />
      </main>
    </div>
  );
};

export default FilterMe;

// <div className="inputItem">
// <input type="checkbox" id='groceries'/>
//  {/* 🦄htmlFor */}
// <label htmlFor='groceries'>groceries</label>
// </div>
