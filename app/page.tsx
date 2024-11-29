import Image from "next/image";
import { socialLinks } from "./config";
import { PiHandWaving } from "react-icons/pi";
import Link from "next/link";

export default function Page() {
  return (
    <section>
  
        <Image
          src="/avatar.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
    
      
      <div className="p-2 max-w-md w-full">
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">
          Hi, I am
        </h1>
        <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          San Sebastian <PiHandWaving className="inline-block w-12 h-12 text-yellow-400 animate-bounce" />
        </div>
        <p className="text-xl dark:text-white text-gray-600">
          I love building digital products, brands, and experiences. bringing ideas to life through code! 🚀✨
        </p>
      </div>

    </section>
  );
}
