/* Navbar.scss */

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
  }
  
  .navbar-logo {
    font-size: 24px;
  }
  
  .navbar-links {
    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
  
      li {
        margin-right: 20px;
  
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
  
  .navbar-burger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  
    .bar {
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin: 3px 0;
    }
  }
  
  .active {
    display: flex;
  }
  
  @media (max-width: 768px) {
    .navbar-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background-color: #333;
  
      ul {
        padding: 20px;
  
        li {
          margin: 10px 0;
  
          a {
            font-size: 18px;
          }
        }
      }
    }
  
    .navbar-links.active {
      display: flex;
    }
  
    .navbar-burger {
      display: flex;
    }
  }
  