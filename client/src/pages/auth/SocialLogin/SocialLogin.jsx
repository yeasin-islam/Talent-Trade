import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function SocialLogin() {
  const { signInWithGoogle, signInWithGithub } = UseAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      toast.success("Successfully signed in with Google!");
      navigate("/", { replace: true });
      console.log("Google login successful:", result.user);
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("Google sign-in failed: " + (error?.message || "Try again"));
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithGithub();
      toast.success("GitHub Sign-in successful!");
      navigate("/", { replace: true });
      console.log("GitHub user:", result.user);
    } catch (error) {
      console.error("GitHub sign-in failed:", error);
      toast.error("GitHub sign-in failed: " + (error?.message || ""));
    }
  };

  return (
    <div className="  grid grid-cols-2 mx-auto p-3 gap-4 ">
      {/* Google Login Button */}
      <button
        onClick={handleGoogleLogin}
        className="w-full cursor-pointer flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-200 group"
      >
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span className="text-gray-700 font-medium">Google</span>
      </button>

      {/* GitHub Login Button */}
      <button
        onClick={handleGithubLogin}
        className="w-full cursor-pointer flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-sm transition-colors duration-200 group"
      >
        {/* GitHub Icon */}
        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 .297c-6.63 0-12 5.373-12 
      12 0 5.303 3.438 9.8 8.205 
      11.387.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 
      1.205.084 1.84 1.236 1.84 1.236 
      1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
      0 0 1.005-.322 3.3 1.23a11.5 
      11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 
      2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 
      3.176.765.84 1.23 1.91 1.23 3.22 
      0 4.61-2.805 5.625-5.475 5.92.435.372.825 1.102.825 
      2.222 0 1.606-.015 2.896-.015 3.286 
      0 .315.21.69.825.57C20.565 22.092 24 
      17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
        <span className="font-medium">GitHub</span>
      </button>
    </div>
  );
}
