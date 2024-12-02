"use client";

import styles from './LoginSection.module.scss';
import LoginForm from './LoginForm';

export default function LoginSection() {

  return (
    <section className={styles.section}>
      <LoginForm />

      {/* {isPending && <Loader/>}  */}

      {/* <UseAlert title='wrong login' text='check data'/> */}

    </section>
  )
}