import React, { useEffect, useState } from "react";
import useProductCallStore from "../../app/productCallStore/productCallStore";
import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";
import useCartStore from "../../app/cartStore/cartStore";
import useDetailStore from "../../app/detailStore/detailStore";

function MainPage() {
  const { productInfo, setProductInfo } = useProductCallStore();
  const { setCarts } = useCartStore();
  const { setSelectedProduct } = useDetailStore();

  const cartItemsId = useCartStore((state) => state.cartItems);

  useEffect(() => {
    setProductInfo("");
  }, []);

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.page_title}>Products</div>
        <div className={styles.buttons_section}>
          <button
            className={`${styles.all_button} ${styles.buttons}`}
            onClick={() => setProductInfo("")}
          >
            모두
          </button>
          <button
            className={`${styles.electronics} ${styles.buttons}`}
            onClick={() => setProductInfo("electronics")}
          >
            전자기기
          </button>
          <button
            className={`${styles.jewelery} ${styles.buttons}`}
            onClick={() => setProductInfo("jewelery")}
          >
            쥬얼리
          </button>
          <button
            className={`${styles.mens_clothing} ${styles.buttons}`}
            onClick={() => setProductInfo("men's clothing")}
          >
            남성의류
          </button>
          <button
            className={`${styles.womens_clothing} ${styles.buttons}`}
            onClick={() => setProductInfo("women's clothing")}
          >
            여성의류
          </button>
        </div>
        <div
          className={styles.product_length}
        >{`Showing : ${productInfo.length} items`}</div>
        <div className={styles.products_section}>
          {productInfo.map((product) => (
            <Link
              to="/detail"
              className={styles.product_container}
              key={product.id}
              onClick={(e) => {
                setSelectedProduct(product.id);
              }}
            >
              <div className={styles.product_picture}>
                <img
                  className={styles.img}
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className={styles.product_title_container}>
                <div className={styles.product_title}>{product.title}</div>
              </div>
              <div className={styles.product_container_bottom}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setCarts(product);
                  }}
                  className={styles.addToCartButton}
                >
                  {cartItemsId
                    .map((cartItem) => cartItem.id)
                    .includes(product.id) ? (
                    <div style={{ color: "orange" }}>담긴 상품</div>
                  ) : (
                    "장바구니에 담기"
                  )}
                </button>
                <div className={styles.product_price}>${product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainPage;
