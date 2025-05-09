import Link from 'next/link'
import React from 'react'

const Products = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <ul>
                <Link href={"/1"}>product1</Link>
                <Link href={"/2"}>product2</Link>
                <Link href={"/3"}>product3</Link>
            </ul>
        </div >
    )
}

export default Products