// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Examples from '../components/examples'
import Banners from '../components/banners'
import Head from "next/head";
import Footer from '../components/footer'
// import Instagram from '../components/instagram'
const Index = () => {
    const router = useRouter()
    const { tab } = router.query
    // console.log(tab);
//   const dispatch = useDispatch()
//   useEffect(() => {
//     // dispatch(startClock())
//   }, [dispatch])

  return (
    <>
    <Head>
      <title>Duman Shisha Lounge | Karte</title>
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
            <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500">
                <li className="mr-2 mb-2">
                    <Link href="/karte?tab=1" >
                        <span className={`border-2 border-amber-600 cursor-pointer inline-block py-3 px-6 rounded-full hover:text-gray-900  ${tab == 1 || !tab ? " bg-amber-600  text-white" : ""}`}>Shisha</span>
                    </Link>
                </li>
                <li className="mr-2 mb-2">
                    <Link href="/karte?tab=2" >
                        <span className={`border-2 border-amber-600 cursor-pointer inline-block py-3 px-6 rounded-full hover:text-gray-900 hover:bg-gray-100  ${tab == 2 ? "active bg-amber-600  text-white" : ""}`}>Drinks</span>
                    </Link>
                </li>
                <li className="mr-2 mb-2">
                    <Link href="/karte?tab=3">
                        <span className={`border-2 border-amber-600 cursor-pointer inline-block py-3 px-6 rounded-full hover:text-gray-900 hover:bg-gray-100  ${tab == 3 ? "active bg-amber-600  text-white" : ""}`}>Cocktails</span>
                    </Link>
                </li>
                <li className="mr-2 mb-2">
                    <Link href="/karte?tab=4">
                        <span className={`border-2 border-amber-600 cursor-pointer inline-block py-3 px-6 rounded-full hover:text-gray-900 hover:bg-gray-100  ${tab == 4 ? "active bg-amber-600  text-white" : ""}`}>Snacks</span>
                    </Link>
                </li>
            </ul>
            <br />
            <div className="sm:text-center lg:text-center flex flex-col items-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-3xl">
                <span className="block xl:inline">Shisha (Hookah)</span>
                {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
                </h1>
                <div className="mt-2 text-base text-gray-400 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-base lg:mx-0">
                    <p>Die Preise beziehen sich ausschließlich auf die Leihgabe der Wasserpfeife!</p>
                    <b>Wir haben auch immer variierende Sorten vor Ort, die nicht auf der Karte stehen – sprecht uns gerne an!</b>
                    <p>Eismundstück: €2,50</p>
                </div>
            </div>
            <br />
            <br />
            <div className='flex flex-wrap w-full'>
                <div className={`relative overflow-hidden duration-100 ${tab == 1 || !tab ? "lg:w-1/2 sm:w-1/2 " : "w-0"}`}>
                    <div className='relative  overflow-hidden px-8 mb-8'>
                        <div className='relative flex overflow-hidden'>
                            <div className="justify-between flex w-full  after:absolute after:left-5 after:content-['........................................................................................................................................................']">
                                
                                <b className="text-amber-600 bg-white z-10 relative pr-4">Las Vegas</b>
                                <b className=" bg-white z-10 relative pl-4">€14,00</b>
                            </div>
                        </div>
                        <p className='mt-4 max-h-22 overflow-hidden'>Die wilde Nacht in Las Vegas auf dem Gaumen zergehen lassen. Ein Korb voller Beeren und süße Trauben.</p>    
                    </div>
                </div>
                <div className={`relative overflow-hidden duration-100 ${tab == 2 ? "lg:w-1/2 sm:w-1/2 " : "w-0"}`}>
                    <div className='relative  overflow-hidden px-8 mb-8'>
                        <div className='relative flex overflow-hidden'>
                            <div className="justify-between flex w-full  after:absolute after:left-5 after:content-['........................................................................................................................................................']">
                                
                                <b className="text-amber-600 bg-white z-10 relative pr-4">Las Vegas</b>
                                <b className=" bg-white z-10 relative pl-4">€14,00</b>
                            </div>
                        </div>
                        <p className='mt-4 max-h-7 overflow-hidden'>Die wilde Nacht in Las Vegas auf dem Gaumen zergehen lassen. Ein Korb voller Beeren und süße Trauben.</p>    
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
      <Footer />
    </>
  )
}

export default Index
