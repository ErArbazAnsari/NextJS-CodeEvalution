"use client"
import { Card } from '@/app/components/card'
import React from 'react'

const UserAnalytics = () => {
    const [counter, setCounter] = React.useState(0)


    React.useEffect(() => {
        setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1)
    }, [])

    return (
        <Card>UserAnalytics Data <br></br>{counter}</Card>
    )
}

export default UserAnalytics