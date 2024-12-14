import React, { useState, useEffect } from 'react';
import Appbar from './Appbar';
import ProductCard from './ProductCard';

const Products = () => {
    const [data, setData] = useState([]); // Initialize with an empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const result = await response.json();
                setData(result.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Appbar />
            <div className="card-container">
            {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.thumbnail}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
