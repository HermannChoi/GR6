import React, { useState } from "react";
import axios from "axios";
import useProductCallStore from "./app/productCallStore/productCallStore";

function MainPage() {
  const { productInfo, setProductInfo } = useProductCallStore();

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
          <button
            className="all_button buttons"
            onClick={() => setProductInfo("")}
          >
            모두
          </button>
          <button
            className="electronics buttons"
            onClick={() => setProductInfo("electronics")}
          >
            전자기기
          </button>
          <button
            className="jewelry buttons"
            onClick={() => setProductInfo("jewelery")}
          >
            쥬얼리
          </button>
          <button
            className="mens_clothing buttons"
            onClick={() => setProductInfo("men's clothing")}
          >
            남성의류
          </button>
          <button
            className="womens_clothing buttons"
            onClick={() => setProductInfo("women's clothing")}
          >
            여성의류
          </button>
        </div>
        <div className="products_section">
          {productInfo.map((product) => (
            <div className="product_container" key={product.id}>
              <div className="product_picture">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product_title_container">
                <div className="product_title">{product.title}</div>
              </div>
              <div className="product_container_bottom">
                <button className="addToCartButton">장바구니에 담기</button>
                <div className="product_price">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainPage;
