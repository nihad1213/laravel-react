import { Link } from "react-router-dom";

export default function Login() {

    const onSubmit = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <div className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600">
                        Not registered? <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
