export function getAllProducts (setProducts,count) {
  fetch(`https://fakestoreapi.com/products?limit=${count}`)
    .then(res=>res.json())
    .then(json=>setProducts(json))
}

export function addNewProduct(product, setBooleanState)  {
  fetch('https://fakestoreapi.com/products',{
    method:"POST",
    body:JSON.stringify(
      {
        title: product.title,
        price: product.price,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      }
    )
  })
    .then(res=>res.json())
    .then(json=>setBooleanState(prev=>!prev))
};