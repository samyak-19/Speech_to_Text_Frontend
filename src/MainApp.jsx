import { useState, useEffect } from "react"
import { uploadAudio, getTranscriptions } from "./services/api"
import Recorder from "../components/Recorder"

function MainApp() {

  const [file, setFile] = useState(null)
  const [transcription, setTranscription] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("") 
  const [history, setHistory] = useState([])

  // NEW FUNCTION (Day 7)
const fetchHistory = async () => {

  try {

    const res = await getTranscriptions()

    // save data into history state
    setHistory(res.data)

  } catch (error) {
    console.error(error)
  }

}


useEffect(() => {

  fetchHistory() // load history when page loads

}, [])

  const handleRecordingComplete = (blob) => {
    console.log("Recorded Audio Blob:", blob)
    setFile(blob)
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {

    if (!file) {
      setError("Please upload or record audio") 
      return
    }

    if (file.type && !file.type.startsWith("audio")) {
    setError("Only audio files are allowed")
    return
  }

   if (file.size > 10 * 1024 * 1024) {
    setError("File size must be less than 5MB")
    return
  }

    const formData = new FormData()
    formData.append("audio", file)

    try {

      setLoading(true)
      setError("")

      setTranscription("")

       const res = await uploadAudio(formData)
          if (res.data.success) {
                setTranscription(res.data.transcription)
                await fetchHistory()
              } else {
               setError(res.data.message)
              }
    } catch (error) {
if (!err.response) {
      setError("Network error. Check your internet.")
    } else {
      setError(error.response.data.message)
    }

  }

    setLoading(false)
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200  py-10min-h-screen bg-gray-100 flex flex-col items-center justify-center">

      <div className="text-5xl font-extrabold mb-10 text-gray-800 tracking-wide">
        Speech to Text App
      </div>

     <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-[420px] border border-gray-200">

        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="mb-4 w-full border border-gray-300 p-4 rounded-lg"
        />

        <button
          onClick={handleUpload}
          className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-lg w-full mt-3"
        >
          Upload Audio
        </button>


        <div className=" transition text-white px-4 py-2 rounded-lg w-full mt-3">
            <Recorder onRecordingComplete={handleRecordingComplete} />
        </div>

        {loading && (
            <div className="flex flex-col items-center mt-4">

            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>

            <p className="text-gray-600 mt-2 text-sm">
                Processing your audio...
            </p>

          </div>
        )}

         <button
             onClick={() => {
                localStorage.removeItem("token")
                window.location.reload()
             }}
             className="absolute right-4 bg-red-500 text-white px-3 py-1 my-2 rounded hover:bg-red-600"
            >
             Logout
      </button>

          {error && (
          <p className="mt-4 text-red-500 bg-red-100 p-2 rounded">
            {error}
          </p>
        )}

        {transcription && (
          <div className="mt-12 bg-gray-50 p-4 rounded-lg border">

            <h2 className="font-semibold mb-2 text-gray-700">
              Your Chat
            </h2>

            <p className="text-gray-800 leading-relaxed">
              {transcription}
            </p>

          </div>


        )}

        <div className="mt-10 w-full max-w-xl">
        
          <h2 className="text-xl font-bold mb-4 text-gray-800"> 
                🕒 Previous Chats
          </h2>
        
          <div className="space-y-4">

                  {history.length === 0 ? (

                       <p className="text-gray-500 text-center">
                         No transcriptions yet
                       </p>
                  ) : (

            history.map((item) => (
            
            <div
              key={item._id}
              className="bg-white shadow-md hover:shadow-lg transition p-4 rounded-xl border">

              <p className="text-gray-800">
                    {item.transcription}
              </p>

                    <p className="text-xs text-gray-400 mt-2">
                {new Date(item.createdAt).toLocaleString()}
                   </p>
            
               </div>

             ) )
                )}

            </div>

          </div>

           </div>
               
          </div>

          

  )
}

export default MainApp