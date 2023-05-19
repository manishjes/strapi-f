import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
const Products = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const token = '7699b8a63bb5556d458dfebc11f2acdcdca4e5413e7a820682d9c599a11c387dd194b14afc1dcb80a11c6abd7f27251d0b19c70cfb5d8f4384c2214f3840c21beeb32bf0c7d8a05804d84b80767641f3e4ad7bac1fbd16059c97ff9239a5ff88cff8ae9efac469fa27de56f0f4730a8ebd2ec5d64d8304c2b01a166f40a011a9';
      const axiosInstance = axios.create({
        headers: { Authorization: `Bearer ${token}` },
      });
      const response = await axiosInstance.get('http://localhost:1337/api/products?populate=*');
      setData(response.data.data);
      console.log(data);
    };
    fetchData();
  }, []);
  // return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;

  return (
    <div className='container mx-auto px-4'>

      <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">product list-myshop</h1>
          <div className="h-1 w-50 bg-indigo-500 rounded"></div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-4">
        {data && data.map((item)=>(
          <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.attributes.image.data && item.attributes.image.data.attributes.url} alt="content"/>
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.title}</h3>
            
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.description}</h2>
           
            <button className={"border-2 border-gray-300 ml-1  rounded-full w-6 h-6 focus:outline-none " + 'bg-${item.attributes.color}-800'}></button>
            <p className="leading-relaxed text-base">{item.attributes.slug}</p>
            <Link href={`/product/${item.attributes.slug}`}><button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy now</button></Link>
          </div>
        </div>
          
        ))}
        {/* <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content"/>
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          </div>
        </div> */}
        
      </div>
    </div>
  </section>
  </div>
  )
  }


 export default Products
//src={item.attributes.image.data && item.attributes.image.data.attributes.name}