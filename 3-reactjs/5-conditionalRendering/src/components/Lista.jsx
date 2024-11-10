import { useState } from "react";


function Lista() {
    const products = [
        {id:0, nome: 'Notebook', inStock:true},
        {id:1, nome: 'PC', inStock:true},
        {id:2, nome: 'Macbook', inStock:false},
        {id:3, nome: 'Tablet', inStock:false},
        {id:4, nome: 'Smartphone', inStock:true}
    ]

    const [showInStock, setShowInStock] = useState(false);

    const productsNewArr = showInStock
    ? products.filter(product => product.inStock)
    : products;

    return (
        <>
            <ul>
                {productsNewArr.map(product => (
                    <li key={product.id}>{product.nome}</li>
                ))}
            </ul>

            <button onClick={()=> setShowInStock(false)}>All</button>
            <button onClick={()=> setShowInStock(true)}>InStock</button>
        </>
    )

}

export default Lista