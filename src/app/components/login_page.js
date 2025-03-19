"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";

import  {setlogin , setnotlogin} from '@/app/redux/loginSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

export default function GitHub() {
  const { data: session } = useSession();

  const dispatch = useDispatch();
  const loginval=useSelector((state) => state.login.value);

  useEffect(()=>{
    if(session){
      dispatch(setlogin(session.user.name));
      console.log("user",session.user.name);
    }else{
      dispatch(setnotlogin())
    }
  },[session])

  const store=()=>{
    signIn("github");
  }

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user.name}</p>
          <img src={session.user.image} alt="User avatar" width={50} />
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (<>
        {/* <button style={{marginTop:"5%"}} onClick={() => signIn("github")}>Sign In with GitHub</button> */}
        <FaGithub style={{fontSize:"50"}} onClick={store}/>
        </>
      )}
    </div>
  );
}
