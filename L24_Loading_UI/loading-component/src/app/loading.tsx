export default function loading() {
    return <div className="flex justify-center min-h-screen items-center"><div className="p-5">
        <h1 className="text-green-500 text-3xl font-bold">Arbaz Ansari</h1>
        <h4 className="font-bold">loading.js Next.js</h4>
        <p className="animate-pulse">Loading the user...</p>
        <div className="flex justify-center items-center mt-4">
            <div className="w-8 h-8 border-4 border-t-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
        </div>
    </div></div>
}