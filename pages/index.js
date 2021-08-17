import Head from 'next/head'
import Header  from './components/Header';
import Banner from './components/Banner';
import CardView from './components/CardView';
import MediumCard from './components/MediumCard';
import LargeCardView from './components/LargeCardView';
import Footer from './components/Footer';

export default function Home({getData,cardsData}) {
  return (
    <div className="">
      <Head>
        <title>AirBnb-Clone-Subin-Neupane</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 pt-1">Explore Nearby</h2>
          <div className="bg-gray-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-lg">
          {getData?.map(({img,location,distance}) => (
            <CardView key={img} image={img} location={location} distance={distance}/>
          ))}
          </div>
          </section>
          <section>
            <h2 className="text-4xl font-semibold py-8 pt-3">Live Anywhere</h2>
             <div className="bg-gray-50 flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 shadow-lg">
              {cardsData.map(({img,title}) => (
                <MediumCard
                    key={img}
                    img={img}
                    title={title}
                />
            ))}
            </div>
          </section>
          <h2 className="text-4xl font-semibold pb-5 pt-3">Discover Things to do</h2>
          <LargeCardView
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlist curated by Airbnb."
            buttonText="Get Inspired"
          />
      </main>
      <Footer/>
   </div>
  )
}

export async function getStaticProps(){
  const getData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
  
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());
  return {
    props:{
      getData,
      cardsData
    }
  }
}