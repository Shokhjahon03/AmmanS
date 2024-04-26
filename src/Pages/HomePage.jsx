import React from 'react'
import guvohnomas from '../../src/assets/guvohnoma.png';
import chaq from '../../src/assets/chaq.png';
import ear from '../../src/assets/earth.png';
import komp from '../../src/assets/komp.png';
import bay from '../../src/assets/bayoma.png';
const HomePage = () => {

  return (
    <main>
      <header className='w-full  mt-[100px] border-b'>
            <div className="container h-full">
                <div className='w-full pt-10 flex flex-col items-center'>
                    <div className='text-center'>
                      <h1 className='text-[80px] font-bold tracking-6 text-blue-700'>Amaan</h1>
                      <p className='text-blue-500'>patentlash agentligi</p>
                      <p className='text-blue-500 mt-[40px]'>Brandingizni qonuniy egasi bo'ling !</p>
                    </div>
                    <img src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-partnership-deal-agreement-png-image_9220405.png" alt="" />
                </div>
            </div>
      </header>
     
      <section className='w-full mt-[100px] border-b pb-[50px]'>
            <div className="container">
                <div className='w-full items-center flex flex-col'> 
                        <p className='mb-[50px] text-[40px] md:text-[60px] font-bold tracking-6 text-blue-700'>Afzalliklarimiz</p>
                        <div className='flex flex-wrap gap-10 justify-center'>
                            <div className='flex flex-col items-center gap-5 card rounded-lg'>
                              <img className='w-[200px]' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" alt="" />
                              <p>Rasmiy Patent Vakili</p>
                            </div>
                            <div className='flex flex-col items-center gap-5 card rounded-lg'>
                              <img className='w-[200px] h-[200px]' src={guvohnomas} alt="" />
                              <p>Vazirlik Guvohnomasi</p>
                            </div>
                            <div className='flex flex-col items-center gap-5 card rounded-lg'>
                              <img className='w-[200px] h-[200px]' src="https://www.shutterstock.com/image-vector/dart-arrow-hit-center-target-600nw-2137131979.jpg" alt="" />
                              <p>Ekspert</p>
                            </div>
                            <div className='flex flex-col items-center gap-5 card rounded-lg'>
                              <img className='w-[200px]' src={chaq} alt="" />
                              <p>Tezkor</p>
                            </div>
                            <div className='flex flex-col items-center gap-5 card rounded-lg'>
                              <img className='w-[200px]' src={ear} alt="" />
                              <p>Keang Qamrov</p>
                            </div>
                            <div className='flex flex-col items-center gap-5 card rounded-lg'>
                              <img className='w-[200px]' src={komp} alt="" />
                              <p>CRM tizim</p>
                            </div>
                        </div>
                </div>
            </div>
      </section>
      <section className='pt-[50px] flex flex-col items-center pb-[50px]'>
           <div className='container'>
           <p className='text-[40px] md:text-[60px] font-bold text-center tracking-6 text-blue-700'>Brendni patentlash jarayoni quyidagicha</p>
                <div>
                   
               </div>
           </div>
      </section>
    </main>
  )
}

export default HomePage
