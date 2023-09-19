import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Suspense } from 'react'
//import { useNProgress } from '@tanem/react-nprogress'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h2>Loading...</h2>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
