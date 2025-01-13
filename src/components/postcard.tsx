"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const PostCard = ({ post, currentPost }: any) => {
  const [selectedOption, setSelectedOption] = useState("" as string);
  const [visible, setVisible] = useState(false);

  console.log(post);

  const handleOptionChoose = () => {
    return (e: any) => {
      setSelectedOption(e.target.value);
      setVisible(true);
    };
  };

  useEffect(() => {
    setSelectedOption("");
    setVisible(false);
  }, [currentPost]);

  return (
    <div className="flex flex-col w-full mt-2 mb-2">
      <div className="relative items-center justify-center">
        <img
          src={post.image}
          className="w-full h-auto rounded-lg mb-2"
          alt="Image"
        />
        {visible && (
          <h1
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-9xl font-bold font-sans -rotate-12 ${
              post.answer === "Dating" ? "text-pink-500" : "text-green-500"
            }`}
          >
            {post.answer}
          </h1>
        )}
      </div>
      <h2
        className={cn(
          "text-xl font-normal mb-2",
          visible ? "visible" : "hidden"
        )}
      >
        {selectedOption === post.answer
          ? `Yep! They are ${post.answer}`
          : `Nope! They are ${post.answer}`}
      </h2>
      <div className={`flex-row gap-2 ${!visible ? "flex" : "hidden"}`}>
        <Button
          className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 p-2 text-white dark:text-white rounded-md flex-1"
          value={"Sibling"}
          onClick={handleOptionChoose()}
        >
          Siblings
        </Button>
        <Button
          className="bg-pink-500 dark:bg-pink-500 hover:bg-pink-600 dark:hover:bg-pink-600 text-white dark:text-white p-2 rounded-md flex-1"
          value={"Dating"}
          onClick={handleOptionChoose()}
        >
          Dating
        </Button>
      </div>
    </div>
  );
};
