import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header_left">
          <a href="http://" className="shop">
            Shop
          </a>
        </div>
        <div className="header_right">
          <div className="material-icons cart">shopping_cart</div>
          <div className="material-icons user-profile">person</div>
          <div className="material-icons logout">logout</div>
        </div>
      </header>
      <section className="section">
        <div className="page_title">Products</div>
        <div className="buttons_section">
          <button className="all_button buttons">모두</button>
          <button className="shoes buttons">신발</button>
          <button className="jewelry buttons">쥬얼리</button>
          <button className="mens_clothing buttons">남성의류</button>
          <button className="womens_clothing buttons">여성의류</button>
        </div>
        <div className="products_section"></div>
      </section>
    </div>
  );
}

export default App;

//작가 vector_corp.com 출처 Freepik
//작가 rawpixel.com 출처 Freepik
//작가 rawpixel.com출처 Freepik
