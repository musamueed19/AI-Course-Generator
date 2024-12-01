'use client'

import { IoMdAdd } from "react-icons/io";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";


export default function AddCourse() {

  const { user } = useUser();

  return (
    <div className="flex items-center justify-between">

      {/* Greetings, and Help Tip - Section */}
      <div>
        <h2 className="text-lg font-medium">
          Hello, Assalam-o-Alaikum! <span className="text-xl font-bold">{user?.fullName}</span>
        </h2>

        <p>Create new course with AI, Share with friends and Earn from it</p>
      </div>

      {/* Call to Action - Create Course - Button Section */}
      <Button><IoMdAdd className="w-10 h-10" />Create AI Course</Button>
    </div>
  );
}
