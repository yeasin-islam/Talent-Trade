import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Eye, EyeOff } from 'lucide-react';
import UseAuth from '../../../hooks/UseAuth';
import toast from 'react-hot-toast';
const SignUp = () => {
    const {createUser} = UseAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
 const [showPassword, setShowPassword] = useState(false);
   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Talent Trade Signup Data:', formData);
        createUser(formData.email, formData.password)
        .then((result)=>{
            console.log("User Created:", result.user)
             toast.success("🎉 Account created successfully!");
               navigate("/");
        })
        .catch((error)=>{
            console.log("Error", error.message);
            toast.error(error.message);
        })
       
    };

    return (
        <div className="min-h-screen ">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold  mb-2">
                        Talent <span className="text-purple-600">Trade</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Join our community of skilled professionals</p>
                </div>

                <div className="container mx-auto bg-white rounded-2xl border border-base-content/10 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Left Side - Image */}
                        <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-8 flex items-center justify-center">
                            <div className="text-center text-white">
                                {/* Placeholder for talent/skills illustration */}
                                <div className="w-80 h-80 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🤝</div>
                                        <div className="text-2xl font-bold mb-2">Exchange Skills</div>
                                        <div className="text-lg opacity-90">Learn • Teach • Grow</div>
                                    </div>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Trade Your Talents</h2>
                                <p className="text-xl opacity-90 leading-relaxed">
                                    Connect with others, share your expertise, and learn new skills in our vibrant community
                                </p>
                                
                                {/* Floating skill icons */}
                                <div className="absolute top-10 left-10 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl animate-bounce">
                                    💻
                                </div>
                                <div className="absolute top-20 right-10 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl animate-bounce delay-75">
                                    🎨
                                </div>
                                <div className="absolute bottom-20 left-8 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl animate-bounce delay-150">
                                    📚
                                </div>
                                <div className="absolute bottom-32 right-16 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl animate-bounce delay-300">
                                    🎵
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="p-8 lg:p-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                                        placeholder="Enter your full name"
                                    />
                                </div>

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
                                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <div className="block text-sm font-semibold text-gray-700 mb-2">
                                        Password *
                                    </div>
                                      <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full text-black px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition duration-300 shadow-lg"
                                >
                                    Join Talent Trade Community
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

                               <SocialLogin></SocialLogin>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <Link to={'/signin'} className="text-blue-600 hover:text-blue-700 font-semibold">
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;