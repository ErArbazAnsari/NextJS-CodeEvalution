export default function ProductsDetailsLayout({ children, }: { children: React.ReactNode }) {
    return <>
        <header>
            <p className="bg-yellow-200 text-black text-center">Customer Header</p>
        </header>
        {children}
        <h2>Featured Products</h2>
        <ul>
            <li>Product1</li>
            <li>Product2</li>
            <li>Product3</li>
            <li>Product4</li>
            <li>Product5</li>
        </ul>
        <footer>
            <p className="bg-yellow-400 text-black text-center">Footer</p>
        </footer>
    </>
}