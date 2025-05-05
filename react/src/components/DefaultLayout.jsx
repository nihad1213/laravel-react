import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div id="defaultLayout" className="flex h-screen bg-gray-50">
            <aside className="w-64 bg-slate-800 text-white p-4">
                <Link to="/dashboard" className="block py-2 px-4 hover:bg-slate-700 rounded mb-1">Dashboard</Link>
                <Link to="/users" className="block py-2 px-4 hover:bg-slate-700 rounded mb-1">Users</Link>
                <Link to="/dashboard" className="block py-2 px-4 hover:bg-slate-700 rounded"></Link>
            </aside>
            <div className="content flex-1 flex flex-col">
                <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
                    <div>
                        Header
                    </div>
                    <div>
                        User info
                    </div>
                </header>
                <main className="flex-1 p-6 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
