import React from 'react'
import ReactDOM from 'react-dom/client'
import 'devicon/devicon.min.css'; 
import App from './App'
import './index.css'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)