import { useState } from "react"
// import axios from "axios"
import API from "../services/api"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"

function Signup({setPage}) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSignup = async () => {

    const { name, email, password } = form

    if (!name || !email || !password) {
      setError("All fields are required")
      return
    }

    if (!email.includes("@")) {
      setError("Invalid email format")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    try {
      setLoading(true)
      setError("")

      await API.post(
        "api/auth/signup",
        form
      )

      alert("Signup successful! Please login.")

    } catch (err) {   // ✅ IMPORTANT: err NOT error
      setError(err.response?.data?.message || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-300">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-semibold text-gray-800">
          Create account
        </h1>

        <p className="text-gray-500 mt-2 mb-6">
          Sign up to get started
        </p>

        {/* ✅ SAFE ERROR DISPLAY */}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 mb-4 rounded-xl border bg-gray-50"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-xl border bg-gray-50"
        />

        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-xl border bg-gray-50"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-3 rounded-xl"
        >
          Signup
        </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => setPage("login")}
              className="text-blue-500 cursor-pointer">
              Login
           </span>
          </p>

      </div>
    </div>
  )
}

export default Signup