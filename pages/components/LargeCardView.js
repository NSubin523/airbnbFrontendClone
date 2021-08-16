import Image from "next/image";

export default function LargeCardView({img,title,description,buttonText}) {
    return <section className="relative py-4 cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
        <div className="relative h-96 min-w-[300px]">
            <Image
                src={img}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
            />
        </div>

        <div className="absolute top-32 left-12">
            <h3 className="text-4xl mb-3 w-64 font-bold">{title}</h3>
            <p>{description}</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rouneded-lg mt-5 cursor-pointer
                               hover:bg-red-400 hover:text-black rounded-lg">{buttonText}</button>
        </div>
    </section>
}

