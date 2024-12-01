'use client'

import Image from "next/image";
import Link from "next/link";
import { menuLists } from "@/Constants/contants";
import { usePathname } from "next/navigation";

export default function Sidebar() {

  const pathname = usePathname();
  
  return (
    <div className="h-full w-full bg-white shadow-lg">
      {/* Inner Container - Sidebar Section */}
      <div>
        {/* Logo - Section */}
        <div className="border-b p-1">
          <div className="w-fit mx-auto scale-75">
            {/* Logo - Group Section */}
            <Link href="/" className="flex flex-col w-fit -space-y-3">
              {/* NextJS Image - component is helpful in optimizing images */}
              <Image
                src="/logo.svg"
                alt="logo image"
                width={60}
                height={60}
                className="mx-auto"
              />
              {/* <h1 className="text-xl font-bold"><span className="text-3xl font-extrabold">A</span>lphaGenerator</h1> */}
              <h1 className="text-xl font-bold font-rubik text-[#257bd6]">
                <span className="text-blue-800 text-3xl font-extrabold">C</span>
                ourseGen
              </h1>
            </Link>
          </div>
        </div>

        {/* Menu Lists - Section */}
        <ul className="px-2 lg:pr-4 xl:pr-5 space-y-1 my-6">
          {menuLists.map((item, index) => (
            // pathname.includes(item.href)
            <Link key={index} href={item.href} className={`flex flex-col p-2 rounded-md ${pathname === item.href ? "bg-blue-100/80 text-black" : "hover:bg-gray-100"}`}>
              <div className="flex items-center space-x-2">
                {item.icon}
                <span className="text-lg">{item.label}</span>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
