import React, { useEffect, useState } from 'react'
import './product.css'
import { useNavigate } from "react-router-dom"

import { GetlocalStorage, SetlocalStorage } from "../storageData"
const ProductView = () => {
    const navigate = useNavigate();

    const storedProducts = GetlocalStorage("products")
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const storedProducts = GetlocalStorage("products")
        setProducts(storedProducts)
    }, [])

    const deleteProduct = (index) => {
        const deleteData = products.filter((value, i) => i !== index)
        setProducts(deleteData)
        SetlocalStorage("products", deleteData)
    }
    const editProduct = (index) => {
        const selectedProduct = products[index];

        navigate("/", {
            state: {
                product: selectedProduct,
                editIndex: index
            }
        });
    };
    var filtered = []
    const searchData = () => {
        filtered = storedProducts.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase()) ||
            item.price.toString().includes(search)
        );

        setProducts(filtered);
    };

    const Ascending = () => {

        const Ascending = [...storedProducts].sort((a, b) => {
            return (
                a.title.localeCompare(b.title) ||
                a.category.localeCompare(b.category)
            )
        })
        setProducts(Ascending);

    }

    const Descending = () => {
        const Descending = [...storedProducts].sort((a, b) => {
            return (
                b.title.localeCompare(a.title) ||
                b.category.localeCompare(a.category)
            )
        })
        setProducts(Descending);
    }
    const AscendingPrice = () => {
        const AscendingPrice = [...storedProducts].sort((a, b) => {
            return Number(a.price) - Number(b.price)
        })
        setProducts(AscendingPrice);

    }
    const DescendingPrice = () => {
        const DescendingPrice = [...storedProducts].sort((a, b) => {
            return Number(b.price) - Number(a.price)
        })
        setProducts(DescendingPrice);

    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto bg-white shadow-xl -2xl p-8">

                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Products
                </h1>

                <div className="flex items-center gap-4 mb-6">
                    <label className="font-medium text-gray-600">Search</label>
                    <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 border  focus:ring-2 focus:ring-black focus:outline-none"
                        placeholder="Search product..."
                    />
                    <button
                        onClick={searchData}
                        className="bg-black text-white px-5 py-2  hover:bg-gray-800 transition duration-300"
                    >
                        Search
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">

                        <thead>
                            <tr className="bg-gray-900 text-white text-left">
                                <th className="p-3">#</th>

                                <th className="p-3">
                                    Title
                                    <div className="inline-flex ml-2 gap-2">
                                        <button onClick={Ascending} className="bg-red-500 px-2 py-1  text-xs">↑</button>
                                        <button onClick={Descending} className="bg-yellow-400 px-2 py-1  text-xs text-black">↓</button>
                                    </div>
                                </th>

                                <th className="p-3">
                                    Price
                                    <div className="inline-flex ml-2 gap-2">
                                        <button onClick={AscendingPrice} className="bg-red-500 px-2 py-1  text-xs">↑</button>
                                        <button onClick={DescendingPrice} className="bg-yellow-400 px-2 py-1  text-xs text-black">↓</button>
                                    </div>
                                </th>

                                <th className="p-3">Image</th>

                                <th className="p-3">
                                    Category
                                    <div className="inline-flex ml-2 gap-2">
                                        <button onClick={Ascending} className="bg-red-500 px-2 py-1  text-xs">↑</button>
                                        <button onClick={Descending} className="bg-yellow-400 px-2 py-1  text-xs text-black">↓</button>
                                    </div>
                                </th>

                                <th className="p-3">Description</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50 transition duration-200"
                                >
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3 font-medium text-gray-800">{item.title}</td>
                                    <td className="p-3 text-green-600 font-semibold">
                                        ₹ {item.price}
                                    </td>
                                    <td className="p-3">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-14 h-14 object-cover -lg border"
                                        />
                                    </td>
                                    <td className="p-3 text-gray-700">{item.category}</td>
                                    <td className="p-3 text-gray-600 text-sm">{item.disc}</td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => deleteProduct(index)}
                                            className="bg-red-600 text-white px-3 py-1 -lg mr-2 hover:bg-red-700 transition"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => editProduct(index)}
                                            className="bg-yellow-400 text-black px-3 py-1 -lg hover:bg-yellow-500 transition"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    )
}

export default ProductView