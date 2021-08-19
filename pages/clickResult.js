import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoCard from "./components/InfoCard";
import { useRouter } from "next/dist/client/router";

export default function ClickResult({searchResults}) {

    const router = useRouter();
    const {location} = router.query;

    return (
        <div>
            <Header/>
            <main className="flex">
                <section>
                    <p className="ml-2 text-xs mt-2">300+ rooms available </p>
                    <p className="ml-2 text-xs mt-2">Select a date range from search and get started ASAP!!!</p>
                    <h1 className="ml-2 font-semibold text-3xl mt-2 mb-6"> Stays in {location} </h1>
                <div className="ml-2 hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Type of Place</p>
                    <p className="button">Price</p>
                    <p className="button">Rooms</p>
                    <p className="button">More filters</p>
                </div>
                <div className="flex flex-col">
                {searchResults.map((item) => (
                    <InfoCard
                        key={item.img}
                        img={item.img}
                        location = {item.location}
                        title = {item.title}
                        description = {item.description}
                        star = {item.star}
                        price = {item.price}
                        total = {item.total}
                    />
                ))}
                </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
export async function getServerSideProps(){
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());
    return {
        props: {
            searchResults: searchResults,
        },
    };
}
