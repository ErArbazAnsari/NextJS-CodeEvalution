import Link from 'next/link'
import React from 'react'

function F2() {
    return (
        <div>
            <h1>F2 Page</h1>
            <Link href="/f1">
                Go to F1
            </Link>
            <Link href="/f4">
                Go to F4
            </Link>
        </div>
    )
}

export default F2