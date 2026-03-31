import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import { CartProvider } from './components/context/CartContext.jsx';
import ScrollToHashElement from './components/ScrollToHashElement';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/react-clothes-project/">
        <ScrollToHashElement />
        <CartProvider>
            <App />
        </CartProvider>
    </BrowserRouter>
)
