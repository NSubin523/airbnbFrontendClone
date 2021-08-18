import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useState } from 'react';

export default function Banner() {

    const router = useRouter();
    const location = useState("New York");
    const startDate = useState(new Date().toISOString());
    const guests = useState(1);

    const searchFunc = () =>{
        router.push({
            pathname: '/search',
            query: {
               location: location,
               startDate: startDate,
               endDate: null,
               guests
            }
        });
    }

    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center"> 
                <p className="tex-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button onClick={searchFunc} className="bg-white border-none p-3 rounded-full mt-2 hover:shadow-xl hover:bg-red-200
                active:scale-90 transition duration-150 hover:p-4">Click Here</button>
            </div>
        </div>
    )
}

 