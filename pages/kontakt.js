// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import Examples from '../components/examples'
import Banners from '../components/banners'
import Footer from '../components/footer'
import Head from "next/head";
// import Instagram from '../components/instagram'
const Index = () => {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     // dispatch(startClock())
//   }, [dispatch])

  return (
    <>
    <Head>
      <title>Duman Shisha Lounge | Kontakt</title>
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
                <span className="block xl:inline">Kontakt</span>
                {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
                </h1>

            </div>
            <br />
            <br />
            <br />
            <div className='flex w-full justify-between flex-wrap'>
            <div className='flex mb-12'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-amber-600 mr-4" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className='flex flex-col'>
                    <b className='text-xl mb-2'>Adresse</b>
                    <b>JUDYS – Bar & Hookah</b>
                    <p>Dithmarscher Platz 5 25524 Itzehoe</p>
                </div>
            </div>
            <div className='flex mb-12'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-amber-600 mr-4" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div className='flex flex-col'>
                    <b className='text-xl mb-2'>Öffnungszeiten</b>
                    <p><b>Mo.-Do.:</b> 17:00 – 1:00 Uhr</p>
                    <p><b>Fr.-Sa.:</b> 17:00 – 3:00 Uhr</p>
                    <p><b>Sonntag:</b> 17:00 – 1:00 Uhr</p>
                </div>
            </div>
            <div className='flex mb-12'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-amber-600 mr-4" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className='flex flex-col'>
                    <b className='text-xl mb-2'>So erreichst du uns</b>
                    <p><b>E-Mail:</b> mail@duman-lounge.de</p>
                    <p><b>Tel.:</b> +49 (0) 000 00 00 00</p>
                </div>
            </div>
            </div>
            <br />
            <br />
        </div>
      <iframe
  width="100%"
  height="450"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBZLSp1Trq2ifSp1xM1w3-hfKBAAAqYq0U
    &q=Space+Needle,Seattle+WA">
</iframe>
      <Footer />
    </>
  )
}

export default Index
