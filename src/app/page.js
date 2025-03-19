import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import SignUp from "./components/signUp";
import "@/app/components/books/book_style.css"
import Book_container from "./components/book_container/book_container";
import Head from "next/head";
import Login from "./components/mylogin/page";


export default function Home() {

  return (
   <>
   <Head>
    <title>E books Haven</title>
   </Head>
   <Nav/>
   {/* <div className="container"> */}
   
   <Book_container/>
    

   {/* </div> */}
   </>
  );
}
