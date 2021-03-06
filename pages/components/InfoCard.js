import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function InfoCard({img,location,title,description,star,price,total}) {
    return (
        <div className="flex m-2 px-2 pr-4 py-7 hover:shadow-lg cursor-pointer bg-gray-50 rounded-lg border-b
                        hover:bg-opacity-80 transition duration-200 ease-out
                        first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between">
                    <p className="items-center flex">
                        <StarIcon
                            className="h-5 text-red-300"
                        /> 
                        {star}
                    </p>
                    <div>
                        <p className="text-lg font-semibold pb-2 pr-1 lg:text-2xl">{price}</p>
                        <p className="text-right pr-1 font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
