import React,{useEffect} from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {Main} from "./components/Main";
import {Basket} from "./components/Basket";
import {getAllProducts, limitProduct} from "./Services/services";


export function App() {
  const [count, setCount] = React.useState('');
  const [basketState, setBasketState] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const addToBasket = (el)=>{
    setBasketState([...basketState, el]);
  }
  const delBasket = () =>{
    setBasketState([])
  }
  useEffect(()=> {

    getAllProducts(setProducts,count)
  },[count])


  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main
        addToBasket={addToBasket}
        products={products}
        setProducts={setProducts}
        setCount={setCount}
        count={count}
      />}></Route>
      <Route path="/basket" element={<Basket
        basketState={basketState}
        setBasketState = {setBasketState}
        delBasket={delBasket}
      />}></Route>
     </Routes>
   </BrowserRouter>
  );
}



export default App;
