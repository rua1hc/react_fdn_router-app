import React, { Component } from "react";

import { Route, Routes, Switch } from "react-router-dom";

import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <div className="content">
                    {/* <Routes> */}
                    <Switch>
                        <Route
                            path="/products/:id"
                            component={ProductDetails}
                        />

                        {/* <Route path="/products" component={Products} /> */}
                        <Route
                            path="/products"
                            render={(props) => (
                                <Products sortBy="newest" {...props} />
                            )}
                        />

                        <Route path="/posts/:year?/:month?" component={Posts} />
                        <Route path="/admin" component={Dashboard} />

                        <Route path="/" component={Home} />
                        {/* <Route path="/" exact component={Home} /> */}
                    </Switch>
                    {/* </Routes> */}
                </div>
            </div>
        );
    }
}

export default App;
