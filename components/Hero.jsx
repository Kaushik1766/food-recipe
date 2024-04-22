import React from 'react'
import backgroundImage from '../app/assets/Hero/2151205182.jpg'


export default function Hero() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${backgroundImage.src})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Namaste!</h1>
      <p className="mb-5 ">Get all the traditional recipies from all around the India.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}
