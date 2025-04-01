"use client"

import { Card } from '@/app/components/card'
import React from 'react'

const Notifications = () => {
    const [counter, setCounter] = React.useState(0)


    React.useEffect(() => {
        setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
    }, [])

    return (
        <Card>Notifications Data {counter}</Card>
    )
}

export default Notifications