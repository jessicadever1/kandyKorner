import React, { useContext, useEffect } from "react"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            {
                products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>
    )
}
