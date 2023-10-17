import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalContentProvider } from './Contexts/GlobalContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalContentProvider>
    <App />
  </GlobalContentProvider>,
)
