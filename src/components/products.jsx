import React, { Component } from "react";

import { Link } from "react-router-dom";

class Products extends Component {
    state = {
        products: [
            { id: 11, name: "Product 1" },
            { id: 22, name: "Product 2" },
            { id: 33, name: "Product 3" },
        ],
    };

    render() {
        return (
            <div>
                <h1>Products</h1>
                <ul>
                    {this.state.products.map((product) => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;
