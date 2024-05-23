import './App.css'
import ProductList from './components/ProductList/ProductList';

import productData from './data/products.json';

function App() {

  return (
    <>
      <h1>Exo 02</h1>
      <ProductList products={productData} />
    </>
  )
}

export default App
