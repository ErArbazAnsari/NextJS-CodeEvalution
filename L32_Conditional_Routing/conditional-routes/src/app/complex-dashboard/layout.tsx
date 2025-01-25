import Footer from "../components/Footer"
import Header from "../components/Header"

export default function ComplexDashboardFunction({ children, users, revenue, notifications, login }: {
    children: React.ReactNode
    users: React.ReactNode
    revenue: React.ReactNode
    notifications: React.ReactNode
    login: React.ReactNode
}) {
    const isLoggedIn = true;
    return isLoggedIn ? (
        <>
            <Header />
            <div className="my-10">

                <div>{children}</div>
                <div className="flex justify-center">
                    <div>{users}</div>
                    <div>{revenue}</div>
                    <div>{notifications}</div>
                </div>
            </div>
            <Footer />
        </>
    ) : (
        <div>{login}</div>
    )
}