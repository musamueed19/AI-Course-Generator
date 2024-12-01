import { Button } from "@/components/ui/button";
// import { UserButton } from "@clerk/clerk-react";
// import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
        {/* <SignedIn>
          <UserButton />
        </SignedIn> */}

        {/* <SignedOut> */}
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        {/* </SignedOut> */}
      </div>
    </header>
  );
};

export default Header;
