import Link from 'next/link'

export default function Hero() {
    return (
        <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
            <h1 className="font-extrabold text-gray-900">
                <p className="text-xl sm:text-3xl md:text-4xl">Schats Bakkery</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-500 to-yellow-500 text-4xl sm:text-6xl md:text-7xl">Your Local Bakery</p>
            </h1>
            <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 mg:text-xl md:max-x-3xl">
                Since 1903
            </h2>
            <div className="mt-5 max-w-md mx-auto flex justify-center intems-center md:mt-8">
                <Link href="#">
                <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800">
                    View our Online Shop
                </a>
                </Link>
                <Link href="#">
                <a className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
                    Our History
                </a>
                </Link>
            </div>
            
        </div>
    )
}
