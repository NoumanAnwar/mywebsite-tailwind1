
import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{backgroundImage:"url(4.jpg)"}}>
        <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
            <h2 className='text-4xl font-bold mb-4 animate-pulse'>About Us</h2>
            <p>AL-FALAH RICE INTERNATIONAL is one of the leading and quality rice exporters of Basmati and non Basmati rice of Punjab, with over 25 Years of experience in the rice industry and a global portfolio of more than 100 corporate customers. We are quality rice brand maker for regular or new customers according to their markets especially in middleast, Europe and Africa.</p>
        </div>
    </section>
  );
};

export default About
