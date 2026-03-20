import { useState } from "react"
import axios from "axios"
import API from "../services/api"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"


function Login({setPage}) {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleLogin = async () => {

    const { email, password } = form

    if (!email || !password) {
      setError("Please fill all fields")
      return
    }

    if (!email.includes("@")) {
      setError("Invalid email format")
      return
    }

    try {
      setLoading(true)
      setError("")

      const res = await axios.post(
        "api/auth/login",
        form
      )

      if (!res.data.token) {
        setError("Login failed")
        return
      }

      localStorage.setItem("token", res.data.token)
      window.location.reload()

    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
  <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-300">

    <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-800">
        Welcome back
      </h1>

      <p className="text-gray-500 mt-2 mb-6">
        Sign in to your account 
      </p>

      {error && (
        <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
          {error}
        </div>
      )}
      

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-gray-200" />
      </div>



      {/* Email */}
      <label className="block text-xs font-semibold text-gray-500 mb-1">
        EMAIL ADDRESS
      </label>

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@company.com"
        className="w-full p-3 mb-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Password */}
      <div className="flex justify-between items-center mb-1">
        <label className="text-xs font-semibold text-gray-500">
          PASSWORD
        </label>
      </div>

      <div className="relative mb-4">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full p-3 pr-10 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-500"
        >
          👁
        </button>
      </div>

      {/* Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
      >
        Login →
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => setPage("signup")}
            className="text-blue-500 cursor-pointer">
            Create an account
          </span>
      </p>

    </div>

  </div>

)
}

export default Login