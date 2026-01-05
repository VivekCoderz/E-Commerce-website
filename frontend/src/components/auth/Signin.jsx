import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, LogIn, Loader2 } from "lucide-react";
import axios from "axios";
import {Link} from "react-router-dom"
import { ToastContainer , toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
    const userdata = {
        email,
        password
    }
    try {
      await axios.post("http://localhost:3000/user/auth/signin", userdata);
      toast.success("Successfully Sign In!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      navigate("/home")
    } catch (error) {
        console.log("rejre" ,error.response.data)
      toast.error(error.response.data, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
    setIsLoading(false);
  };

  return (
    // Same Midnight Slate background for eye comfort
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl p-8">
        <ToastContainer/>
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-bold text-slate-100">Welcome Back</h2>
          <p className="text-slate-400 text-sm mt-1">
            Please enter your details to sign in.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={18}
              />
              <input
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-100 placeholder:text-slate-600"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>
              <button
                type="button"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                Forgot?
              </button>
            </div>
            <div className="relative group">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className="w-full pl-10 pr-12 py-3 bg-[#0f172a] border border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-100"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me Toggle */}
          <div className="flex items-center gap-2 px-1">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-slate-700 bg-[#0f172a] text-blue-600 focus:ring-blue-500 focus:ring-offset-[#1e293b]"
            />
            <label
              htmlFor="remember"
              className="text-sm text-slate-400 cursor-pointer select-none"
            >
              Keep me signed in
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 active:scale-[0.98]"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Sign In</span>
                <LogIn size={18} />
              </>
            )}
          </button>
        </form>

        {/* Signup Redirect */}
        <div className="mt-8 text-center border-t border-slate-700 pt-6">
          <p className="text-slate-400 text-sm">
            Don't have an account?
            <button className="ml-2 font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase text-xs tracking-wider">
             <Link to="/signin">Create One</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
