"use client"

export default function ErrorPage({ error }: { error: Error }) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-700 mb-6">{error.message}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Go to Home
            </button>
        </div>
    );
}