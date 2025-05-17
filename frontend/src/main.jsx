import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from 'react-redux'
import store from './redux/store.js'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </GoogleOAuthProvider>
      </Provider>
  </BrowserRouter>
);
