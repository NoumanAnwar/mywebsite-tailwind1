import React from "react";

const Homecontent = () => {
 
  

  return (
    <section 
      className="hero h-screen flex items-center bg-cover bg-center" 
      style={{ backgroundImage: "url(/1.jpg)" }} // Updated to use the correct path
    >
      <div className="pl-0 md:pl-16 text-white text-center">
        <h1 className="text-6xl font-bold drop-shadow-md animate-pulse" >
          Welcome to Al Falah Rice International
        </h1>
        <p className="text-2xl mt-4">
        We are one of the world’s quality rice exporters providing premium quality products
        </p>
        <button 
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold"
          aria-label="Shop Now" // Optional: Add aria-label for accessibility
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Homecontent;
