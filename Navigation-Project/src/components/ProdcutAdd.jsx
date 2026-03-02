import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { GetlocalStorage, SetlocalStorage } from "../storageData"

const ProductAdd = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const productObj = {
        title: "",
        price: "",
        img: "",
        category: "",
        disc: "",
    }

    const [product, setProductData] = useState(productObj)
    const [products, setProducts] = useState([])
    const [productsEdit, setProductsEdit] = useState(null)

    useEffect(() => {
        const storedProducts = GetlocalStorage("products") || []
        setProducts(storedProducts)
    }, [])

    useEffect(() => {
        if (location.state?.product) {
            setProductData(location.state.product)
            setProductsEdit(location.state.editIndex)
        }
    }, [location.state])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProductData({
            ...product,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let updatedProducts = [...products]
        if (productsEdit !== null) {
            updatedProducts[productsEdit] = product
        } else {
            updatedProducts.push(product)
        }
        SetlocalStorage("products", updatedProducts)
        setProducts(updatedProducts)
        navigate("/prodcutView")
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    {productsEdit !== null ? "Update Product" : "Add Product"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input type="text" name="title" value={product.title} onChange={handleChange} placeholder="Product Name" className="w-full px-4 py-2 border rounded-xl" required />
                    <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="w-full px-4 py-2 border rounded-xl" required />
                    <input type="text" name="img" value={product.img} onChange={handleChange} placeholder="Image URL" className="w-full px-4 py-2 border rounded-xl" required />
                    <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" className="w-full px-4 py-2 border rounded-xl" required />
                    <textarea name="disc" value={product.disc} onChange={handleChange} placeholder="Description" className="w-full px-4 py-2 border rounded-xl" required />
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2.5 rounded-xl hover:bg-gray-800"
                    >
                        {productsEdit !== null ? "Update Product" : "Add Product"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProductAdd