"use client"

import "./globals.css"
import { useState } from "react"

interface WrapperProps {
    children: React.ReactNode
}

const ErrorSimulator = ({
    message = "An error occurred",
}: { message?: string }) => {
    const [error, setError] = useState(false)
    if (error) throw new Error(message)
    return (
        <button title="simulate an error" onClick={() => setError(true)}>
            Simulate Error
        </button>
    )
}

export const ErrorWrapper = ({ children }: WrapperProps) => {
    return (
        <div>
            <div>
                <ErrorSimulator message="simulated error" />
            </div>
            {children}
        </div>

    );
};