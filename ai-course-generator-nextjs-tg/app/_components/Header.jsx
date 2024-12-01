'use client'

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname();
  const isOnDashboard = pathname.includes('dashboard');

  return (
    <header className="px-2 sm:px-5 py-1 w-full h-fit shadow-md bg-white sticky top-0">
      {/* Header Inner Container */}
      {/* Logo & Get Started - Left - Right Side */}
      <div className="flex items-center justify-between">
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

        {/* Get Started - Button Section */}

        {/* If user is not - SignedIn */}
        <SignedIn>
          <div className="flex items-center gap-2">
            <UserButton />
            {/* Dashboard - Button */}
            {!isOnDashboard && (
              // hidden sm:inline
              <Link href="/dashboard" className="">
                <Button>Dashboard</Button>
              </Link>
            )}
          </div>
        </SignedIn>

        <SignedOut>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
