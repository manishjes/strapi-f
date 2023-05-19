import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"
import { useState } from 'react';
import { useEffect } from 'react';






export default function App({ Component, pageProps }: AppProps) {
  <head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
  </head>
  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  const [cart, setCart] = useState([])
  const [reloadkey, setReloadkey] = useState(1)
  const addToCart = (item, qty, price)=>{
    console.log("add to cart" );
    
    let newCart = cart
    for (let index = 0; index< qty; index++){
      newCart.push([item, price])
    }
    console.log("add to cart", newCart);
    
    setCart(newCart)
    setReloadkey(Math.random())
    
  }
  const removeFromCart = (item, qty)=>{
    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }
  const clearCart = (item)=>{
    setCart([])

  }
  return <> <NavBar key={reloadkey} cart={cart} /><Component cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} /><Footer/></>
}
