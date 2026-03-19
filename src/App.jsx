import { useEffect ,useState } from "react"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import MainApp from "./MainApp"
import { verifyUser } from "./services/api"

function App() {

  const [page, setPage] = useState("login")
   const [isLoggedIn, setIsLoggedIn] = useState(null)

    useEffect(() => {

    const checkAuth = async () => {

      const token = localStorage.getItem("token")

      // 🔥 CHANGE 1: no token → not logged in
      if (!token) {
        setIsLoggedIn(false)
        return
      }

      try {

        // 🔥 CHANGE 2: verify token with backend
        await verifyUser()

        setIsLoggedIn(true)

      } catch (error) {

        // 🔥 CHANGE 3: invalid token OR server down
        localStorage.removeItem("token")
        setIsLoggedIn(false)

      }

    }

    checkAuth()

  }, [])

  // 🔥 If logged in → show main app
  if (isLoggedIn==null) {
   return <div className="text-center mt-20">Loading...</div>
  }

  if (isLoggedIn) {
    return <MainApp />
  }


  return (
  <div className="min-h-screen w-full">

    {page === "login" && (
      <Login setPage={setPage} />
    )}

    {page === "signup" && (
      <Signup setPage={setPage} />
    )}

  </div>
)
}

export default App