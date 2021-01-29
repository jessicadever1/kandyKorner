import React, { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch(`http://localhost:8080/products?`)
        .then(res => res.json())
        .then(setProducts)
    }

    const addProducts = (productObj) => {
        return fetch(`http://localhost:8080/products?`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProducts)
    }

    return (
        <ProductContext.Provider value={{
            products, getProducts, addProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}