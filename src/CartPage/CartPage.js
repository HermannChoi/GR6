import React from 'react'
import Header from "../Header/Header"
import styles from "./CartPage.module.css"
function CartPage() {
  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.cart_title}>장바구니</div>
        <div className={styles.body_inner}>
          <div className="material-icons" style={{fontSize: 300 + 'px'}}>local_mall</div>
          <div className={styles.cart_state}>장바구니가 비어있습니다.</div>
        </div>
      </div>
    </div>
  )
}

export default CartPage