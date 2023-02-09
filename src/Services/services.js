export function getAllProducts (setProducts,count) {
  fetch(`https://fakestoreapi.com/products?limit=${count}`)
    .then(res=>res.json())
    .then(json=>setProducts(json))
}

