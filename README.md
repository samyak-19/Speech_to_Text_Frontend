<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->




# 🎤 Speech-to-Text Frontend

A modern, AI-powered web application that allows users to upload or record audio and convert it into text in real-time.

---

## 🌐 Live Demo

🚀 **Frontend:** https://speech-to-text-frontend-v9fx.vercel.app/
🔗 **Backend API:** https://speech-to-text-backend-r92y.onrender.com/

---

## 🚀 Overview

This is the frontend of the Speech-to-Text application built using React and Tailwind CSS. It provides a clean, responsive, and user-friendly interface for interacting with an AI-powered backend.

---

## ✨ Features

* 🎤 Record audio directly in browser
* 📁 Upload audio files (MP3, WAV, WEBM)
* ⚡ AI-powered transcription display
* 🔐 User authentication (Login/Signup)
* 🕒 View transcription history
* 🎨 Modern UI with Tailwind CSS
* 📱 Fully responsive design

---

## 🛠️ Tech Stack

* **React (Vite)**
* **Tailwind CSS**
* **Axios**
* **JavaScript (ES6+)**

---

## 🧠 System Architecture

```id="arch-final"
Frontend (React)
        ↓
Backend API (Node.js + Express)
        ↓
Speech-to-Text API (Deepgram)
        ↓
MongoDB (Atlas)
```

---

## 📁 Project Structure

```id="struct-final"
client/
│
├── src/
│   ├── components/
│   │   └── Recorder.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
└── vite.config.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```id="clone-final"
git clone https://github.com/samyak-19/Speech_to_Text_Frontend.git
cd speech-to-text-frontend
```

---

### 2️⃣ Install dependencies

```id="install-final"
npm install
```

---

### 3️⃣ Configure API URL

Update:

```id="config-final"
src/services/api.js
```

```javascript id="code-final"
baseURL: "https://your-backend-url.onrender.com/api"
```

---

### 4️⃣ Run the app

```id="run-final"
npm run dev
```

App runs on:

```id="url-final"
http://localhost:5173
```

---

## 📡 API Integration

| Feature      | Endpoint              |
| ------------ | --------------------- |
| Signup       | `/api/auth/signup`    |
| Login        | `/api/auth/login`     |
| Upload Audio | `/api/upload-audio`   |
| Get History  | `/api/transcriptions` |

---

## 🔄 Data Flow

```id="flow-final"
User Action (Upload/Record)
        ↓
React State Update
        ↓
API Call (Axios)
        ↓
Backend Processing
        ↓
Response Received
        ↓
UI Updated with Transcription
```

---

## 🧩 Key Components

| Component       | Description                      |
| --------------- | -------------------------------- |
| App.jsx         | Main app logic & UI              |
| Recorder.jsx    | Handles audio recording          |
| api.js          | API communication layer          |
| History Section | Displays previous transcriptions |

---

## ⚡ Performance & UX Highlights

* Fast rendering using Vite
* Smooth UI interactions with Tailwind
* Loading indicators during API calls
* Clean and minimal design
* Optimized API requests

---

## 🛡️ Error Handling

* Displays user-friendly error messages
* Handles network failures gracefully
* Validates file type and size
* Prevents invalid API requests

---

## 📱 Responsive Design

* Mobile-friendly layout
* Works across all screen sizes
* Flexible UI using Tailwind CSS

---

## ⚠️ Validation Rules

* Only audio files allowed
* Maximum file size: 10MB
* Proper error messages for invalid inputs

---

## ⚠️ Known Limitations

* Requires internet connection
* No audio playback feature
* No offline support

---

## 🚀 Future Improvements

* Drag & drop upload
* Audio preview before upload
* Dark mode support
* Multi-language UI
* PWA support

---

## 🧠 Learning Outcomes

* Built full-stack MERN application
* Integrated AI APIs into frontend
* Implemented authentication flow
* Managed API communication using Axios
* Deployed frontend using Vercel

---

## 📌 Challenges Faced

* Handling file uploads in frontend
* Managing CORS issues
* Integrating API with authentication
* Ensuring smooth UX during processing

### ✅ Solutions

* Implemented proper API structure
* Added loading states and error handling
* Optimized request flow

---

## 💡 Why This Project?

This project demonstrates:

* Real-world full-stack development
* AI integration in web apps
* Secure authentication systems
* Scalable frontend architecture

---

## 👨‍💻 Author

Developed as part of an internship project.

---

## ⭐ Final Notes

This project simulates a real-world SaaS application with modern UI, AI integration, and scalable architecture.

