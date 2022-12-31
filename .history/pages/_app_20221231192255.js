import { useState , useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

// React top loading bar
import LoadingBar from 'react-top-loading-bar'

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';




function MyApp({ Component, pageProps }) {


  const router = useRouter();

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({value: null})
  const [key, setKey] = useState(0)


  //  react top loading bar
  const [progress, setProgress] = useState(0)

  


  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </> 
}

export default MyApp
