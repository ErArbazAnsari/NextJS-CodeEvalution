"use client"
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center mt-5">
            <h1 className="text-3xl">Current Value: {count}</h1>
            <div className="flex gap-3 w-full justify-center">
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-5 py-2 text-lg mt-2 cursor-pointer bg-blue-500 text-white rounded"
                >
                    Increment
                </button>
                <button onClick={() => setCount(0)} className="px-5 py-2 text-lg mt-2 cursor-pointer bg-blue-500 text-white rounded">Reset</button>
            </div>
        </div>
    )
}

export default Counter