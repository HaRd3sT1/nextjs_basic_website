import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import Examples from '../components/examples'
import Banners from '../components/banners'
import Footer from '../components/footer'
import Head from "next/head";
// import Instagram from '../components/instagram'
const Index = () => {
//   const dispatch = useDispatch()
    const [modal, modalSet] = useState(false)
    let imageArr =[
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
    ]
  return (
    <>
    <Head>
      <title>Duman Shisha Lounge | Bilder</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="description" content="Duman Lounge - Hookah - Cocktails - Bar. Shisha-Bar in Flensburg." />
      <meta itemprop="name" content="Duman Shisha Lounge" />
      <meta itemprop="description" content="Duman Lounge - Hookah - Cocktails - Bar. Shisha-Bar in Flensburg." />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Banners />
      <Examples />
    <div style={{height:300}} className='relative overflow-hidden flex justify-center  items-center'>
        <img src="banner_1.jpg" alt="" />
    </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <br />
            <br />
            <div className="sm:text-center lg:text-center flex flex-col items-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-3xl">
                <span className="block xl:inline">Bilder</span>
                {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
                </h1>
                <div className="mt-2 text-base text-gray-400 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-base lg:mx-0">
                    <p>Die Preise beziehen sich ausschließlich auf die Leihgabe der Wasserpfeife!</p>
                    <b>Wir haben auch immer variierende Sorten vor Ort, die nicht auf der Karte stehen – sprecht uns gerne an!</b>
                    <p>Eismundstück: €2,50</p>
                </div>
            <br />
            <br />
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {imageArr.map((doc, index) =>{
                        return <div key={index} className="flex flex-wrap lg:w-1/3 md:w-1/2 sm:w-full">
                        <div className="w-full p-1 md:p-2">
                            <img  onClick={()=>modalSet(doc)} alt="gallery" className=" cursor-pointer block object-cover object-center w-full h-full rounded-lg" src={doc} />
                        </div>
                        </div>
                    })}
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
{modal ? <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 items-center justify-center left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div onClick={()=>modalSet(false)} className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50'></div>
    <div className="relative p-4 w-full max-w-4xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="absolute flex justify-between items-start p-5 rounded-t">
                <button  onClick={()=>modalSet(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
            </div>
            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={modal} />
        </div>
    </div>
</div> : ""}
      <Footer />
    </>
  )
}

export default Index
