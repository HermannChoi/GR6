import React, { useEffect } from "react";
import styles from "./DetailPage.module.css";
import useDetailStore from "../../app/detailStore/detailStore";

function DetailPage() {
  const { detailProduct, setSelectedProduct } = useDetailStore();

  // useEffect(() => {
  //   setSelectedProduct(detailProduct.id);
  // });

  return (
    <div className={styles.body}>
      <div className={styles.subheading}>상품 페이지</div>
      <div className={styles.product_space}>
        <div key={detailProduct.id} className={styles.product_space}>
          <div className={styles.section_left}>
            <div className={styles.image_frame}>
              <img
                className={styles.image}
                src={detailProduct.image}
                alt="img"
              />
            </div>
          </div>
          <div className={styles.section_right}>
            <div className={styles.category}>{detailProduct.category}</div>
            <div className={styles.title}>{detailProduct.title}</div>
            <div className={styles.description}>
              {detailProduct.description}
            </div>
            <div className={styles.price}>${detailProduct.price}</div>
            <div className={styles.buttons_space}>
              <button>장바구니에 담기</button>
              <button>장바구니로 이동</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
