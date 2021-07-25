import React from 'react'
// components
import AdminLayout from '../compononets/layout/adminLayout'
import CreateProduct from "../compononets/admin/create"


export default function NewProduct() {
    return (
        <AdminLayout>
            <CreateProduct />
        </AdminLayout>
    )
}
