'use client'

import Image from "next/image";
import Link from "next/link";
import { menuLists } from "@/Constants/contants";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export default function Sidebar() {

  const pathname = usePathname();
  
  return (
    <div className="h-full w-full bg-white shadow-lg relative">
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
        <ul className="px-2 space-y-1 my-6">
          {menuLists.map((item, index) => (
            // pathname.includes(item.href)
            <Link
              key={index}
              href={item.href}
              className={`flex flex-col p-2 rounded-md ${
                pathname === item.href
                  ? "bg-blue-100/80 text-black"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span className="text-lg font-medium">{item.label}</span>
              </div>
            </Link>
          ))}
        </ul>

        <div className="absolute bottom-10 w-full">
          {/* Progress Bar - Section */}
          <div className="w-[90%] sm:w-[85%] mx-auto">
            <Progress value={60} />
            <h2 className="text-sm my-2">3 Out of 5 Course created</h2>
            <h2 className="text-xs text-gray-500">
              Upgrade your plan for unlimited course generation
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
