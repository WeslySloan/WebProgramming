// https://ko.reactjs.org/docs/thinking-in-react.html

// Eventhandler is added

import React, { useState } from 'react';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
]

const App2 = () => <FilterableProductTable />

const FilterableProductTable = () => {
  const [products, setProducts] = useState(PRODUCTS);
  return (
    <div>
      <SearchBar products={products} setProducts={setProducts} />
      <ProductTable products={products} />
    </div>
  );
}

const SearchBar = ({ products, setProducts }) => {
  const clickHandler = () => setProducts(products.filter(p => p.stocked));
  return (
    <form id="form">
      <input type="text" placeholder="Search..." />
      <p> <input type="checkbox" onClick={clickHandler} />  {' '}  Only show products in stock  </p>
    </form>
  );
}

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory)
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  });

  return (
    <table border="1px">
      <thead> <tr> <th>Name</th> <th>Price</th> </tr> </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

const ProductCategoryRow = ({ category }) => <tr><th colSpan="2">{category}</th></tr>;

const ProductRow = ({ product }) => {
  const name = product.stocked 
    ? product.name 
    : <span style={{ color: 'red' }}>{product.name} </span>
  return ( <tr> <td>{name}</td> <td>{product.price}</td> </tr> )
}

export default App2;
