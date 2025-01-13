"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { PostCard } from "./postcard";
import Link from "next/link";

export default function ProfileCard({ data }: { data: any }) {
  const [posts, setPosts] = useState(data);
  const [currentPost, setCurrentPost] = useState(0);

  const handleNextutton = () => {
    return () => {
      if (currentPost < posts.length - 1) {
        setCurrentPost(currentPost + 1);
      } else {
        // shuffle posts
        posts.sort(() => Math.random() - 0.5);
        setCurrentPost(0);
      }
    };
  };

  return (
    <div className="w-full gap-2">
      {posts.length > 0 && (
        <PostCard post={posts[currentPost]} currentPost={currentPost} />
      )}

      <Button
        className="p-2 rounded-md w-full mt-2"
        onClick={handleNextutton()}
      >
        Next
      </Button>

      <div className="flex items-center gap-1 mt-10 w-full justify-center">
        Designed by{" "}
        <Link
          href={"https://mohammadfaizan.in"}
          target="_blank"
          className="font-semibold font-sans"
        >
          Mohammad Faizan
        </Link>{" "}
      </div>
    </div>
  );
}
