import Link from 'next/link'
import Header from './components/Header';

export default function Home() {
  return (
      <div className=''>
        <Header />
        <main className="flex flex-col items-center justify-center lg:pt-40 pt-56">
          <div className='lg:text-left text-center text-xl md:text-3xl lg:text-7xl uppercase'>
            <h1>unlock your full potential with</h1>
            <h1>e-fitness</h1>
          </div>
          <h1 className="uppercase md:text-2xl text-lg lg:text-5xl mt-5">Experience a Healthier Lifestyle with e-fitness</h1>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border py-4 px-5 mt-10">
            <Link href="sign-up" className="lg:text-4xl text-xl text-gray-700">Start Tracking Now!</Link>
          </div>
          <div className="lg:pt-60 pt-[410px]">
            <p className='mt-[-6px]'>Your Data is Secure with Us.
              {/* <Link href='/' className='ml-2'>
                Terms of Service | Privacy Policy 
              </Link> */}
            </p>
          </div>
        </main>
      </div>
  );
}
