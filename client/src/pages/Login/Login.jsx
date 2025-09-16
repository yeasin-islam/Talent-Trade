import React, { useState } from 'react';

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Talent Trade Signin Data:', formData);
        alert('Sign in successful! Check console for data.');
    };

    return (
        <div className="min-h-screen ">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold  mb-2">
                        Talent <span className="text-purple-600">Trade</span>
                    </h1>
                    <p className="text-gray-600 text-lg">Welcome back to our community</p>
                </div>

                <div className="container mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Left Side - Image */}
                        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center">
                            <div className="text-center text-white">
                                {/* Welcome back illustration */}
                                <div className="w-80 h-80 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">👋</div>
                                        <div className="text-2xl font-bold mb-2">Welcome Back</div>
                                        <div className="text-lg opacity-90">Ready to Trade • Learn • Connect</div>
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Continue Your Journey</h2>
                                <p className="text-xl opacity-90 leading-relaxed">
                                    Sign in to access your talent network and discover new learning opportunities
                                </p>
                                
                                {/* Floating welcome icons */}
                                <div className="absolute top-10 left-10 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl animate-pulse">
                                    🚀
                                </div>
                                <div className="absolute top-20 right-10 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl animate-pulse delay-75">
                                    ⭐
                                </div>
                                <div className="absolute bottom-20 left-8 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl animate-pulse delay-150">
                                    🎯
                                </div>
                                <div className="absolute bottom-32 right-16 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl animate-pulse delay-300">
                                    💡
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Sign In to Your Account</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email *
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-sm font-semibold text-gray-700">
                                            Password *
                                        </div>
                                        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                        Remember me
                                    </label>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition duration-300 shadow-lg"
                                >
                                    Sign In to Talent Trade
                                </button>
                            </div>

                            {/* Social Login Options */}
                            <div className="mt-8">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="text-lg mr-2">🔍</span>
                                        Google
                                    </button>
                                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="text-lg mr-2">📘</span>
                                        Facebook
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;