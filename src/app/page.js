import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import SignUp from "./components/signUp";


export default function Home() {
  return (
   <>
   <Nav/>
   <div className="container">
   Main page
   {/* <SignUp/> */}
   {/* <SignUp/> */}
   </div>
   </>
  );
}
