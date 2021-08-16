export default function Footer() {
    return (
       <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 pr-20 
       bg-gray-100 text-gray-600">

       <div className="space-y-4 text-base text-gray-800">
           <h5 className="font-bold">ABOUT</h5>
           <p className="cursor-pointer hover:underline">How Airbnb works?</p>
           <p className="cursor-pointer hover:underline">Newsroom</p>
           <p className="cursor-pointer hover:underline">Investors</p>
           <p className="cursor-pointer hover:underline">Airbnb Plus</p>
           <p className="cursor-pointer hover:underline">Airbnb Luxe</p>
       </div>

       <div className="space-y-4 text-base text-gray-800">
            <h5 className="font-bold"> COMMUNITY </h5>
            <p className="cursor-pointer hover:underline">Accessibility</p>
            <p className="cursor-pointer hover:underline">Powered by React JS</p>
            <p className="cursor-pointer hover:underline">Powered by Next JS</p>
            <p className="cursor-pointer hover:underline">Powered by Tailwind CSS</p>
            <p className="cursor-pointer hover:underline">Airbnb Clone</p>
       </div>

       <div className="space-y-4 text-base text-gray-800">
           <h5 className="font-bold">HOST</h5>
            <p className="cursor-pointer hover:underline">Host your home</p>
            <p className="cursor-pointer hover:underline">Host an online experience</p>
            <p className="cursor-pointer hover:underline">Responsible Hosting</p>
            <p className="cursor-pointer hover:underline">Resource Center</p>
            <p className="cursor-pointer hover:underline">Community Center</p>
       </div>

       <div className="space-y-4 text-base text-gray-800">
       <h5 className="font-bold">SUPPORT</h5>
            <p className="cursor-pointer hover:underline">Our covid-19 repsonse</p>
            <p className="cursor-pointer hover:underline">Help center</p>
            <p className="cursor-pointer hover:underline">Cancellation Options</p>
            <p className="cursor-pointer hover:underline">Careers</p>
            <p className="cursor-pointer hover:underline">Trust & Safety</p>
       </div>
       </div>
    )
}

