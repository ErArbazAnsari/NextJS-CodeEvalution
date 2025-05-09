
"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";


export default function ErrorPage({ error, reset }: { error: Error; reset: () => void; }) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-700 mb-6">{error.message}</p>
            <button onClick={() => reload()} className="text-black border border-black p-2 hover:bg-blue-200">Try Again</button>
        </div>
    );
}