import Link from 'next/link';
import style from "../contact/contact.module.css";
import { Stats } from "fs";




const ContactPage = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>contact page</h1>


      <ul>
         <li><Link href="/">Go to Home Page</Link></li>
         <li><Link href="/about">Go to About Page</Link></li>
         <li><Link href="/service">Go to Service Page</Link></li>  


      </ul>





    </div>
  )
}

export default ContactPage
