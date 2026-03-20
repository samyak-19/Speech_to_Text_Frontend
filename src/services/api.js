import axios from "axios"

const API = axios.create({
  baseURL: "https://speech-to-text-backend-r92y.onrender.com/api"
})

API.interceptors.request.use((req) => {

  // 🔹 get token from localStorage
  const token = localStorage.getItem("token")

  // 🔹 if token exists → attach to headers
  if (token && token !== "null" && token !== "undefined") {
    req.headers.Authorization = token
  }

  return req
})  

export const uploadAudio = (formData) => {
  return API.post("/upload-audio", formData)
}

// Fetch transcription history
export const getTranscriptions = () => {
  return API.get("/transcriptions")
}

export const verifyUser = () => {
  return API.get("/auth/me")
}

export default API