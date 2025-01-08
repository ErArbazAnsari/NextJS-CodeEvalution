"use client"
import { useRouter } from 'next/navigation'

function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        alert("processing")
        router.push("/")
    }
    return (
        <>
            <h1>Product Page</h1>
            <button onClick={handleClick}>Order Product</button>
        </>
    )
}

export default OrderProduct