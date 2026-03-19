import { useState, useRef } from "react"

function Recorder({ onRecordingComplete }) {

  const [recording, setRecording] = useState(false)
  const mediaRecorder = useRef(null)
  const audioChunks = useRef([])

  const startRecording = async () => {

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    })

    mediaRecorder.current = new MediaRecorder(stream)

    mediaRecorder.current.start()

    mediaRecorder.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data)
    }

    setRecording(true)
  }

  const stopRecording = () => {

    mediaRecorder.current.stop()

    mediaRecorder.current.onstop = () => {

      const blob = new Blob(audioChunks.current, {
        type: "audio/wav"
      })

      onRecordingComplete(blob)

      audioChunks.current = []
    }

    setRecording(false)
  }

  return (

    <div className="mt-4">

      {!recording ? (

        <button
          onClick={startRecording}
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Start Recording
        </button>

      ) : (

        <button
          onClick={stopRecording}
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Stop Recording
        </button>

      )}

    </div>

  )
}

export default Recorder