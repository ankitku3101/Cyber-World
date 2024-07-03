import { Appbar } from "./Appbar"


export function Overlay() {
    return (
        <>
        <div className="flex flex-col items-center justify-center absolute w-full h-full z-10 text-white">
            <div className="absolute top-0 left-0 right-0 px-3 bg-gradient-to-b from-black-500 to-transparent">
                <Appbar />
            </div>
            <div className="flex font-bold flex-col items-center my-auto p-4 rounded-3xl">
                <div className="text-9xl font-overpass-black">CYBER WORLD</div>
                <div className="text-3xl mb-6 font-overpass-black">
                    never compromise on <span className="text-red-600">security</span>
                 </div>
                <a href="#services" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Explore</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
            </div>
        </div>
        </>
    );
}
