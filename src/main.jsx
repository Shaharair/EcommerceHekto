import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import { ContextApi } from './Components/ContextApi.jsx';
import store from './store.js';
import { Provider } from 'react-redux'
import firebaseConfig from './firbase.config.js';

createRoot(document.getElementById('root')).render(
  <ContextApi>
    <Provider store={store}>
      <App />
    </Provider>
  </ContextApi>
)
