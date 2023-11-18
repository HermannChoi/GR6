import React from "react";
import useProductCallStore from "../app/productCallStore/productCallStore";
import Header from "../Header/Header";
import styles from "./MainPage.module.css";


function MainPage() {
  const { productInfo, setProductInfo } = useProductCallStore();

  return (
    <div>
      <Header />
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
        <div className={styles.products_section}>
          {productInfo.map((product) => (
            <div className={styles.product_container} key={product.id}>
              <div className={styles.product_picture}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className={styles.product_title_container}>
                <div className={styles.product_title}>{product.title}</div>
              </div>
              <div className={styles.product_container_bottom}>
                <button className={styles.addToCartButton}>장바구니에 담기</button>
                <div className={styles.product_price}>${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainPage;
