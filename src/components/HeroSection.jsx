import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="hero bg-cover bg-center text-white text-center flex items-center justify-center"
      style={{
        height: "100vh", // Full screen height
        backgroundImage: "url('https://www.baltana.com/files/wallpapers-5/White-Background-HD-Wallpapers-16572.jpg')" // Placeholder image
      }}
    >
      <div className="bg-opacity-50 p-8 rounded-lg text-black">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className='text-blue-500 font-extrabold'>Kode</span><span className='text-red-500 font-extrabold'>Blog</span></h1>
        <p className="text-xl mb-4">Tempat dimana seluruh kegiatan siswa kodein dihidangkan dalam bentuk Blog.</p>
        <a href='#blog' className=" text-amber-500 font-bold py-2 rounded-full outline-amber-500 outline-2 px-14 hover:text-white hover:bg-amber-500 transition-all hover:outline-0 text-xl">Explore</a>
      </div>
    </section>
  );
};

export default HeroSection;
