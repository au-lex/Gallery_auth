import React from 'react'

const Home = () => {
    return (
        <>
         <main>
            <section className='bg-slate-700 py-[2rem] px-[2rem] ' >
                  <section className='flex justify-around'>
                    <div className="logo">
                        <h1 className='text-[25px] text-slate-100 capitalize '>Logo</h1>
                    </div>

                    <section className="inputContainer">
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white lg:w-[40rem]
                     w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                     sm:text-sm" placeholder="Search for anything..." type="search" name="search"/>

                    </section>
                    <section className='flex  space-x-8'>
                        <a href="#" className="links block text-[20px] text-slate-100 capitalize ">home</a>
                        <a href="#" className="links block text-[20px] text-slate-100 capitalize ">account</a>
                        <a href="#" className="links block text-[20px] text-slate-100 capitalize ">log out</a>
                    </section>
                  </section>
            </section>
            </main> 
        </>
    )
}

export default Home
