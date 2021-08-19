import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function CardView({image,location,distance}) {

    const router = useRouter();

    const navigateToClickRes = () =>{
        router.push({
            pathname: '/clickResult',
            query:{
                location: location
            }
        })
    }

    return (
        <div onClick={navigateToClickRes} className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
                        hover:bg-red-200 hover:scale-105 transition transform duration-200
                        ease-out">
            <div className="relative h-16 w-16">
                <Image
                    src={image}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            <div>
                <h2> {location} </h2>
                <h2 className="text-gray-500"> {distance} </h2>
            </div>
        </div>
    )
}
