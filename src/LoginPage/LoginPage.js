import React from 'react'
import Header from "../Header/Header"
import styles from "./LoginPage.module.css"

function LoginPage() {
  return (
    <div>
      <Header />
      <div className={styles.login_space}>
        <form className={styles.login_space_inner}>
          <div className={styles.login_id_container}>
            <div className={styles.login_id_name}>ID</div>
            <input className={styles.login_id_input} type="text"></input>
          </div>
          <div className={styles.login_pw_container}>
            <div className={styles.login_pw_name}>Password</div>
            <input className={styles.login_pw_input} type="password"></input>
          </div>
          <div className={styles.login_btn_space}>
          <button className={styles.login_submit_btn}>Login</button>
          </div>
        </form>
      </div>
      <div className={styles.signup_container}>
        <div className={styles.signup_container_name}>계정이 없으신가요?</div>
        <button className={styles.signup_btn}>SignUp</button>
      </div>
    </div>
  )
}

export default LoginPage