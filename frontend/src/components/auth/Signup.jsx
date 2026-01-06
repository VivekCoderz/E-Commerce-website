import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DarkProfessionalForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userdata = {
      fullName: name,
      email,
      password,
    };
    setIsLoading(true);
    try {
      await axios.post("http://localhost:3000/user/auth/signup", userdata);
      toast.success("Successfully Signed Up!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      navigate("/signin")
    } catch (error) {
      toast.error("Signup Failed!",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      })
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="mb-8 text-left">
          <h2 className="text-2xl font-bold text-slate-100">Create Account</h2>
          <p className="text-slate-400 text-sm mt-1">
            Start your shopping journey with us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">
              Full Name
            </label>
            <div className="relative group">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="John Doe"
                onChange={(e) => setname(e.target.value)}
                value={name}
                className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-100 placeholder:text-slate-600"
                required
              />
            </div>
          </div>

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
            <label className="text-sm font-medium text-slate-300 ml-1">
              Password
            </label>
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
                className="w-full pl-10 pr-12 py-3 bg-[#0f172a] border border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-100 placeholder:text-slate-600"
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

          {/* Professional Blue Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-blue-900/20 active:scale-[0.98]"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-8 text-center border-t border-slate-700 pt-6">
          <p className="text-slate-400 text-sm">
            Already have an account?
            <button className="ml-2 font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase text-xs tracking-wider">
              <Link to="/signin">Log in</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DarkProfessionalForm;
