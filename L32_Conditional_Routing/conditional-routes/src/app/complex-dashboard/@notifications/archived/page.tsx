"use client"
import { Card } from '@/app/components/card'
import Link from 'next/link'
import React from 'react'

const Archived = () => {
    return (
        <Card>

            <div className='flex flex-col items-center'>
                <div className='text-center'>
                    <h1>Archived Notifications</h1>
                    <Link className='bg-white px-3 py-1 rounded-full text-black hover:bg-slate-400 hover:text-white' href={"/complex-dashboard"}>Go Back</Link>
                </div>
            </div>

        </Card>
    )
}

export default Archived