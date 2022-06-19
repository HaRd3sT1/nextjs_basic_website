import Link from 'next/link'

export default function Example() {

  return (
      <>
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
    <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6">Verknüpfungen</h5>
            <ul className="list-none footer-links">
            <li className="mb-2">
                <Link href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Startseite</Link>
            </li>
            <li className="mb-2">
                <Link href="/bilder" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Bilder</Link>
            </li>
            <li className="mb-2">
                <Link href="/karte" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Karte</Link>
            </li>
            <li className="mb-2">
                <Link href="/kontakt" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Kontakt</Link>
            </li>
            </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6">Karte</h5>
            <ul className="list-none footer-links">
            <li className="mb-2">
                <Link href="/karte?tab=1" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Shisha</Link>
            </li>
            <li className="mb-2">
                <Link href="/karte?tab=2" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Drinks</Link>
            </li>
            <li className="mb-2">
                <Link href="/karte?tab=3" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cocktails</Link>
            </li>
            <li className="mb-2">
                <Link href="/karte?tab=4" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Snacks</Link>
            </li>
            </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links">
            <li className="mb-2">
                <Link href="/datenschutzerklaerung" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Datenschutzerklärung</Link>
            </li>
            <li className="mb-2">
                <Link href="/impressum" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Impressum</Link>
            </li>
            </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            {/* <h5 className="text-xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links">
            <li className="mb-2">
                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
            </li>
            <li className="mb-2">
                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
            </li>
            <li className="mb-2">
                <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
            </li>
            </ul> */}
        </div>
        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/4 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">In Verbindung bleiben</h5>
            <div className="flex sm:justify-center xl:justify-start">
            <a href="https://facebook.com" target="_blank" className="p-1 flex justify-center items-center w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                <svg className='w-full h-full hover:fill-white' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 155.139 155.139" >
                    <g xmlns="http://www.w3.org/2000/svg">
                        <path id="f_1_"  d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184   c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452   v20.341H37.29v27.585h23.814v70.761H89.584z"></path>
                    </g>
                </svg>
            </a>
            <a href="https://twitter.com" target="_blank" className="p-1 flex justify-center items-center w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                <svg className='w-full h-full hover:fill-white' xmlns="http://www.w3.org/2000/svg" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 100 100" >
                    <g transform="matrix(1.24,0,0,1.24,-11.975999450683574,-12.012000732421825)">
                        <path xmlns="http://www.w3.org/2000/svg" id="_x30_4.Twitter" d="m89.9 25.2c-3 1.3-6.1 2.2-9.4 2.6 3.4-2 6-5.2 7.2-9.1-3.2 1.9-6.7 3.2-10.4 4-3-3.2-7.3-5.2-12-5.2-9.1 0-16.4 7.4-16.4 16.4 0 1.3.1 2.5.4 3.7-13.6-.6-25.6-7.2-33.7-17.1-5.8 10.4.7 19 5 21.9-2.6 0-5.2-.8-7.4-2 0 8.1 5.7 14.8 13.1 16.3-1.6.5-5.2.8-7.4.3 2.1 6.5 8.2 11.3 15.3 11.4-5.6 4.4-13.8 7.9-24.3 6.8 7.3 4.7 15.9 7.4 25.2 7.4 30.2 0 46.6-25 46.6-46.6 0-.7 0-1.4-.1-2.1 3.4-2.5 6.2-5.4 8.3-8.7z"></path>
                        </g>
                </svg>
            </a>
            {/* <a href="" className="flex justify-center items-center w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                <i className="fab fa-google-plus-g"></i>
            </a> */}
            </div>
        </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
        <div className="sm:w-full px-4 md:w-1/4">
            <strong>Duman Shisha Lounge</strong>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Address</h6>
            <address className="not-italic mb-4 text-sm">
            123 6th St.<br />
            Melbourne, FL 32904
            </address>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
            <h6 className="font-bold mb-2">Telefon</h6>
            <p className="mb-4 text-sm">0555 <strong>255 22 23</strong><br />
            {/* <em>All are MIT License</em> */}
            </p>
        </div>
        {/* <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
            <button className="px-4 py-2 bg-purple-800 hover:bg-purple-900 rounded text-white">Get Started</button>
        </div> */}
        </div>
    </div>
    </footer>
    </>
  )
}