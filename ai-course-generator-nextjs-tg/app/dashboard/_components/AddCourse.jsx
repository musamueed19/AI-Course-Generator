'use client'

import { IoMdAdd } from "react-icons/io";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";


export default function AddCourse() {

  const { user } = useUser();

  return (
    <div className="md:flex items-center justify-between inline-block">
      {/* Greetings, and Help Tip - Section */}
      <div className="mb-4 md:mb-0">
        <h2 className="text-lg font-medium">
          Hello, Assalam-o-Alaikum!{" "}
          <span className="text-xl font-bold">{user?.fullName}</span>
        </h2>

        <p>Create new course with AI, Share with friends and Earn from it</p>
      </div>

      {/* Call to Action - Create Course - Button Section */}
      <Link href="/create-course">
        <Button>
          <IoMdAdd className="w-10 h-10" />
          Create AI Course
        </Button>
      </Link>
    </div>
  );
}
