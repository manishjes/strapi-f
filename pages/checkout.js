// import React, {useEffect, useState} from 'react'
// import  Script  from 'next/script'
// import axios from "axios"

// const checkout = ({cart}) => {
//   const [subtotal, setSubtotal] = useState(0)
//   const [form, setForm] = useState({name: "", email:"", phone: "", Address
// :""})
//   useEffect(() => {
//     console.log(cart)
//     let myTotal = 0
//     for (let index = 0; index<cart.length; index++){
//       const element = cart[index];
//       myTotal = myTotal + cart[index][1]

//     }
//     setSubtotal(myTotal)

//   }, [])
//   const handleChange = (e)=>{
//     setForm({...form, [e.target.name]: e.target.value})
//     console.log({...form, [e.target.name]: e.target.value})
//   }
//    const submit = async ()=>{
//     let txntoken
//     let url = `http://localhost:1337/api/orders/pretransaction`
//     const fetchData = async () => {
//       const token = '44382e7f0390624d8e317ea76024fb352f3ce659f21205e1393d93f50616a75ecc19308a971f8dc66d5b68bd51b88ae53898454d5ef1dab895153fe37fc34f864656a7f8c56b2e32de5cf0d9429490cf46d06d66f7042ee7b58d7c2328ef125348f0bff674462906ab6881ee5799b7b8b1ce6df4ea535a83589c937922dc8f0e';
//     const axiosInstance = axios.create({
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const rawResponse = await axiosInstance.get( url,{
//       method: 'POST',
//       body: JSON.stringify({amount: subtotal, ...form, cart: cart})
//     })
//     const Content = await rawResponse.json()
//   };
//   fetchData();
   
    
    

    

  
// var config = {
// "root": "",
// "flow": "DEFAULT",
// "data": {

// "token": "", /* update token value */
// "tokenType": txntoken,
// "amount": subtotal,
// },
// "handler": {
// "notifyMerchant": function(eventName,data){
// console.log("notifyMerchant handler function called");
// console.log("eventName => ",eventName);
// console.log("data => ",data);
// }
// }
// };
// if(window.Paytm && window.Paytm.CheckoutJS){
// window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
// // initialze configuration using init method
// window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
// // after successfully updating configuration, invoke JS Checkout
// window.Paytm.CheckoutJS.invoke();
// }).catch(function onError(error){
// console.log("error => ",error);
// });
// });
// }
// }
 

   
  
  
// // //       {/* <Script type="application/javascript" src={`https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_MID}.js`} onload="onScriptLoad();" crossorigin="anonymous"></Script>


// return (
//   <div>

//         <section className="text-black body-font relative">
//   <div className="container px-5 py-24 mx-auto min-h-screen">
//     <div className="flex flex-col  w-full mb-12">
//       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Check-out</h1>
//       <h2 className='text-2xl font-medium'>Cart</h2>
//       <div className='cart'> {cart.length? `Your cart details are as follows:`: `Your cart is empty!`}</div>
//       <ul className='list-decimal px-8'>
//       {cart.map((item)=>{
//         return <li >
//          {item[0]} with a price of {item[1]}
//         </li>
//       })}
        
//       </ul>
//       <div className='font-bold'>
//       Subtotal: {subtotal}
//       </div>

      
      
//     </div>
//     <div className=" ">
//       <div className="flex flex-wrap -m-2">
//         <div className="p-2 w-1/2">
//           <div className="relative">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
//             <input onChange={handleChange} value={form.name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//           </div>
//         </div>
//         <div className="p-2 w-1/2 ">
//           <div className="relative">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
//             <input onChange={handleChange} value={form.email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//           </div>
//         </div>
//         <div className="p-2 w-1/2 ">
//           <div className="relative">
//             <label htmlFor="phone" className="leading-7 text-sm text-gray-600">phone</label>
//             <input onChange={handleChange} value={form.phone} type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//           </div>
//         </div>
//         <div className="p-2 w-full">
//           <div className="relative">
//             <label htmlFor="Address" className="leading-7 text-sm text-gray-600">Address</label>
//             <textarea onChange={handleChange} value={form.Address} id="Address" name="Address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//           </div>
//         </div>
//         <div className="p-2 w-full">
//           <button onClick={submit} className="flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay now</button>
//         </div>
       
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default checkout







import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const checkout = ({ cart }) => {
  const router = useRouter();
  const [subtotal, setSubTotal] = useState(0);
  const [form, setForm] = useState({ name: " ", email: " ", address: " " });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  let headers = {
    Authorization:
      "Bearer 44382e7f0390624d8e317ea76024fb352f3ce659f21205e1393d93f50616a75ecc19308a971f8dc66d5b68bd51b88ae53898454d5ef1dab895153fe37fc34f864656a7f8c56b2e32de5cf0d9429490cf46d06d66f7042ee7b58d7c2328ef125348f0bff674462906ab6881ee5799b7b8b1ce6df4ea535a83589c937922dc8f0e",
  };

  useEffect(() => {
    console.log(cart);
    let myTotal = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1];
    }
    setSubTotal(myTotal);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, name: name, email: email, address: address });
    console.log({ ...form, name: name, email: email, address: address });
  };
  const submit = async () => {
    let orderId = "ORDER" + Math.floor(10000 * Math.random());
    let url = "http://localhost:1337/api/order/pretransaction";
    // console.log("data --->", {
    //   orderId: orderId,
    
    //   ...name,
    //   ...email,
    //   ...address,
    //   cart: cart,
    //   name,
    //   email,
    //   address,
    //   amount:subtotal,
    // });
    await fetch(url, {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify({
        
        name,
        email,
        address,
        orderId,
       product:cart,
        amount:subtotal
      }),
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Checkout
            </h1>
            <h2>cart</h2>
            <div className="cart">
              {cart.length
                ? `your cart detalis are as follows:-`
                : `Your cart is empty`}
            </div>
            <ul>
              {cart.map((item) => {
                return (
                  <li key={Math.random()} className="px-8">
                    {item[0]} with a price of ₹{item[1]}
                  </li>
                );
              })}
            </ul>
            <div className="font-bold">subtotal: ₹{subtotal}</div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={submit}
                  
                  className="flex mx-auto text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg"
                >
                  <Link href="/success">
                  pay Now
                  </Link>
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default checkout;
