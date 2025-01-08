export default function Register() {
    return (
        <>
         <div className="flex items-center justify-center">
         <div className="w-full max-w-md p-8 space-y-6 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Register Page</h1>
            <form className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="username" className="mb-1 font-medium">Username:</label>
                    <input type="text" id="username" name="username" required className="border border-gray-300 p-2 rounded text-black" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 font-medium">Email:</label>
                    <input type="email" id="email" name="email" required className="border border-gray-300 p-2 rounded text-black" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="mb-1 font-medium">Password:</label>
                    <input type="password" id="password" name="password" required className="border border-gray-300 p-2 rounded text-black" />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>
            </form>
            </div>
            </div>
        </>
    );
}