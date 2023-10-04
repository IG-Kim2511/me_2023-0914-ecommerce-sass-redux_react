
// reducers/filterReducer.js
import { createSlice } from '@reduxjs/toolkit';
import products from '../../data';
import { Link } from 'react-router-dom';





// 👉local storage
const initialState = "";


const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    search: (state, action) => {

        const filtered_Products = products;

        const filteredItems= products.filter((product)=> product.title.toLowerCase().indexOf(state.toLowerCase())!== -1 );

        if (state) {
            filtered_Products = filteredItems;      
          }

        return filtered_Products.map((item)=>(
            <div>
                
                <Link className='link' to={`/product/${item.id}`} key={item.id}>

                    <div className="card">
                        {/* 🦄q: hover하면 이미지가 바뀜.
                            컨테이너안에 이미지가 2개있어야 함 */}
                        <section className='imageWrap'>
                            <img src={item.images[0]} className="mainImg" alt={item.title} />
                            <img src={item.images[2]} className="secondImg" alt={item.title} />
                        </section>
                        <section className='titleWrapper'>
                        <h4 className='title'>{item.title} <span>(id:{item.id})</span></h4>
                        <div className='prices'>
                            <h4>price : {item.price}</h4>
                            <h4 className="stock">(stock : {item.stock})</h4>
                        </div>
                        </section>
                    </div>
                </Link>

            
            </div>
        ))

    },
  },
});

export const { search } = filterSlice.actions;
export default filterSlice.reducer;
