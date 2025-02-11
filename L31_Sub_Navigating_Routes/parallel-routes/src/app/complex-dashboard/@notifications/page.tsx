"use client"

import { Card } from '@/app/components/card'
import React from 'react'
import Link from "next/link"

const Notifications = () => {
    const [counter, setCounter] = React.useState(0)


    React.useEffect(() => {
        setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)
    }, [])

    return (
        <Card >
            <div className='flex flex-col items-center'>
                <div>
                    <h1>Notifications {counter}</h1>
                </div>
                <div style={{ backgroundColor: "lightgray", padding: "5px 10px", color: "black", borderRadius: "20px" }}
                >
                    <Link href={"/complex-dashboard/archived"}>Archived</Link>
                </div>
            </div>
        </Card>
    )
}

export default Notifications