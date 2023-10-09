import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';


// function function0(){
//  const ayaan=(<ol><li>ayaan</li>
//   <li>abhi</li>
//   <li>tabhi</li>
//   <li>jabhi</li>
//   <li>zeenat</li> </ol>)
//   return ayaan;
// }

// function F1(props){
//   return (
//     <h1>hello world {props.name}{function0()}</h1>
//   )
// }
// function F2(){
 
//   return (
//    <>
//     <F1 name="brothers"></F1> <F1></F1> <F1></F1>
//    </>
  

//   )
// }

// const ww=(resume)=>{
//   return(
//      resume

//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <App/>
  //  <F2/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

