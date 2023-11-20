import React from 'react'
import styles from "./CartPage.module.css"
import useCartStore from '../../app/cartStore/cartStore'

function CartPage() {

  const { cartItems, total } = useCartStore();

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.cart_title}>장바구니</div>
          {cartItems.length === 0 ? (
            <div className={styles.body_inner}>
              <div className="material-icons" style={{fontSize: 300 + 'px'}}>local_mall</div>
              <div className={styles.cart_state}>장바구니가 비어있습니다.</div>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.quantity}
                </li>
              ))}
              <div>Total : ${total}</div>
            </>
          )} 

      </div>
    </div>
  )
}

export default CartPage