import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {Main} from "./components/Main";
import {Basket} from "./components/Basket";


export function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/basket" element={<Basket/>}></Route>
     </Routes>
   </BrowserRouter>
  );
}



export default App;
