import React from 'react'
import guvohnomas from '../../src/assets/guvohnoma.png';
import chaq from '../../src/assets/chaq.png';
import ear from '../../src/assets/earth.png';
import komp from '../../src/assets/komp.png';
import bay from '../../src/assets/kelishuv.png';
import lupa from '../../src/assets/lupa.png';
import kash from '../../src/assets/kasholok.png';
import { Accordion, Table } from "flowbite-react";
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
      <section className='pt-[50px] flex flex-col items-center pb-[50px] border-b'>
           <div className='container'>
           <p className='text-[40px] md:text-[60px] font-bold text-center tracking-6 text-blue-700 mb-[50px]'>Brendni patentlash jarayoni quyidagicha</p>
           <Accordion>
      <Accordion.Panel>
        <Accordion.Title>1-Patentlash mumkinligini tekshiramiz?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Ma'lumotlar
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>2-To'lov va kerakli hujjatlarni olamiz</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Malumotlar
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>3-Patentlashga topshiramiz</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Malumotlar
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>4-Tayyor bo'lgach sizga topshiramiz</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Malumotlar
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
           </div>
      </section>
      <section className='pt-[50px] flex flex-col border-b  mb-[50px] items-center pb-[50px]'>
           <div className='container'>
           <p className='text-[40px] md:text-[60px] font-bold text-center tracking-6 text-blue-700 mb-[50px]'>Patentlash Narxlari</p>
           
           <Table>
        <Table.Head>
          <Table.HeadCell>Olish muddati</Table.HeadCell>
          <Table.HeadCell>Tezkor</Table.HeadCell>
          <Table.HeadCell>Oddiy</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-blue-400">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Davlat boji'}
            </Table.Cell>
            <Table.Cell className='text-[10px] md:text-[15px]'>5 746 000 so'm</Table.Cell>
            <Table.Cell className='text-[10px] md:text-[15px]'>
             1 666 000 so'm
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-blue-400">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             Ekspert tekshiruvi
            </Table.Cell>
            <Table.Cell className='text-[11px] md:text-[15px]'>750 000 so'm</Table.Cell>
            <Table.Cell className='text-[10px] md:text-[15px]'>
            750 000 so'm
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-blue-400">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Jami</Table.Cell>
            <Table.Cell className='text-[10px] md:text-[15px]'>9 496 000 so'm</Table.Cell>
            <Table.Cell className='text-[10px] md:text-[15px]'>
             4 396 000 so'm
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
            <p className='text-center mt-[20px] text-blue-500'>Himoya qilish muddati 10 yil</p>
           </div>
      </section>
      <section>
        <div className="container">
          <div className='w-full'>
                <p className='text-[40px] text-blue-600 font-semibold mb-[50px]'>Ishni qachon <br />boshlasak bo'ladi?</p>
                <div className='flex flex-col items-center md:flex-row md:items-start justify-between flex-wrap'>
                      <p className='text-[30px] text-center md:text-start'>Siz bilan hamkorlik <br />qilishdan mamnunmiz</p>
                      <img className='w-[400px]' src={bay} alt="" />                  
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col text-blue-600'>
                      <a href=""><i class='bx bxs-phone'></i> 91 009-66-30</a>
                      <a href=""><i class='bx bxl-telegram'></i> amaan.uz</a>
                    </div>
                    <div className=''>
                      <p className='text-[40px] p-0 font-bold text-blue-600'>Amaan</p>
                      <p className='text-blue-600'>patentlash agentligi</p>
                    </div>
                </div>
            </div>       
            
         </div>
      </section>
    </main>
  )
}

export default HomePage
