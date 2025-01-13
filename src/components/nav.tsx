import React from "react";
import { ModeToggle } from "./theme-toggle";
import { Link2Icon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex w-full fixed top-0 justify-center z-10 px-2">
      <div className="max-w-[38rem] flex items-center justify-between border p-3 px-5 bg-white dark:bg-black w-full rounded-b-xl shadow-md">
        <div className="flex items-center gap-1">
          <p>Sibling/Dating</p>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
