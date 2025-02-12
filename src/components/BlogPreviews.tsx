"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  preview: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  date: string;
  readTime: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Software Development",
    preview: "Exploring emerging trends in software development and how they're shaping the industry...",
    author: {
      name: "John Smith",
      avatar: "/avatars/john.jpg"
    },
    image: "/DashingScreenshot.png",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "future-of-software-development"
  },
  {
    id: 2,
    title: "Building Scalable Solutions",
    preview: "Learn how to architect solutions that can grow with your business needs...",
    author: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg"
    },
    image: "/DashingScreenshot.png",
    date: "March 10, 2024",
    readTime: "8 min read",
    slug: "building-scalable-solutions"
  }
];

export default function BlogPreviews() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group"
          >
            <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative h-10 w-10">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">
                  {post.preview}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}