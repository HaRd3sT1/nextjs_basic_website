// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

import Head from "next/head";
import Examples from '../components/examples'
import Banners from '../components/banners'
import Banner from '../components/banner'
import Products from '../components/products'
import Footer from '../components/footer'
// import Instagram from '../components/instagram'
const Index = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   // dispatch(startClock())
  // }, [dispatch])

  return (
    <>
    <Head>
      <title>Duman Shisha Lounge</title>
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
    <Banner />
    <Products />
    {/* <ProductView /> */}
    {/* <Instagram /> */}
      {/* <Link href="/show-redux-state">
        <a>Click to see current Redux State2</a>
      </Link> */}
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
