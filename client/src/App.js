import React from "react"
import { Route, Switch } from "react-router-dom"
// pages 
import { Cart, Home, Login, Payment, Products, Register, Profile, Customers, NewProduct, Orders, DashboardProducts } from "./pages"
// components
import { Layout } from "./compononets"
import { ProductTemplate, OrderTemplate, ProductUpdateTemp } from "./templates"

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/products/:id" component={ProductTemplate} />
        <Route path="/cart" component={Cart} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/payment" component={Payment} />
        <Route path="/orders/:orderId" component={OrderTemplate} />
        <Route path="/dashboard/customers" component={Customers} />
        <Route path="/dashboard/products" component={DashboardProducts} exact />
        <Route path="/dashboard/products/:id" component={ProductUpdateTemp} />
        <Route path="/dashboard/new-product" component={NewProduct} />
        <Route path="/dashboard/orders" component={Orders} />
      </Switch>
    </Layout>
  );
}

