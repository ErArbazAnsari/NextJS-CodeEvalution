"use client"
import { Card } from '@/app/components/card'
import React from 'react'

const RevenueMetrics = () => {
    const [counter, setCounter] = React.useState(0)


    React.useEffect(() => {
        setInterval(() => {
            setCounter(counter => counter + 1)
        }, 100)
    }, [])

    return (
        <Card>RevenueMetrics Data {counter}</Card>
    )
}

export default RevenueMetrics