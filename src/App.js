import React,{useState,useEffect} from 'react';
import {css} from "@emotion/react";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [loading,setLoading] = useState(false);
  const override = css `
    display:block;
    margin:15rem auto;
  `;

  useEffect(()=>{
         setLoading(true);
         setTimeout(() => {
           setLoading(false);
         }, 5000);
  },[])
  return (
    <>
      {loading ? <PuffLoader size={100} css={override} Loading ={loading} color={"#36D7B7"}/> : <>
      <Header/>
     <Main/>
     <Footer/>
      
      </>}
    </>
  )
}

export default App;
