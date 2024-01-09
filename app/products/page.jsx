'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'

export default function Product() {
    const [products, setProducts] = useState([])
    const { cart } = useCartContext()

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then((res) => setProducts(res.data))
    }, [])

    return (
        <div>
            <h1>Productos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <Product product={product} />
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/cart">Ver carrito ({cart.length})</Link>
        </div>
    )
}
