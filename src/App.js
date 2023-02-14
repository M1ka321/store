import React,{useEffect} from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {Main} from "./components/Main";
import {Basket} from "./components/Basket";
import {addNewProduct, getAllProducts, } from "./Services/services";




export function App() {
  const [count, setCount] = React.useState('');
  const [booleanState, setBooleanState] = React.useState('false')
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
  },[count,booleanState])

  const delCard = () =>{
    setBasketState([])
  }

  const [product, setProduct] = React.useState({title:'', price:'', id: Date.now()})
  const addProduct = () => {
    addNewProduct(product,setBooleanState)
    setProduct({title:'', price:'', id: Date.now()})

  }



  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main
        addProduct={addProduct}
        product={product}
        setProduct={setProduct}
        addToBasket={addToBasket}
        products={products}
        setProducts={setProducts}
        setCount={setCount}
        count={count}
        delCard={delCard}
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
