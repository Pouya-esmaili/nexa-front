"use client";

import { useState } from "react";
import Rating from "../common/Rating";
import Image from "next/image";

const comments = [
  { id: 1, image: "/images/landing/user profile.svg", name: "Chloe Patterson", date: "May 5, 2023", rating: 4, text: "Great quality and attention to detail. Their designs elevated my brand. I just wish they had a more flexible payment plan for small businesses flexible payment plan...." },
  { id: 2, image: "/images/landing/user profile (1).svg", name: "Pouya Esmaieli", date: "March 22, 2023", rating: 5, text: "Great quality and attention to detail. Their designs elevated my brand. I just wish they had a more flexible payment plan for small businesses flexible payment plan...." },
  { id: 3, image: "/images/landing/user profile (2).svg", name: "Ali Soleimani", date: "January 15, 2023", rating: 4, text: "Great quality and attention to detail. Their designs elevated my brand. I just wish they had a more flexible payment plan for small businesses flexible payment plan...." },
  { id: 4, image: "/images/landing/user profile (3).svg", name: "Mahsa", date: "February 8, 2023", rating: 4, text: "Great quality and attention to detail. Their designs elevated my brand. I just wish they had a more flexible payment plan for small businesses flexible payment plan...." },
  { id: 5, image: "/images/landing/user profile.svg", name: "Narges", date: "May 12, 2023", rating: 5, text: "Great quality and attention to detail. Their designs elevated my brand. I just wish they had a more flexible payment plan for small businesses flexible payment plan...." },
  { id: 6, image: "/images/landing/user profile (1).svg", name: "Amir", date: "April 3, 2023", rating: 4, text: "Great quality and attention to detail. Their designs elevated my brand. I just wish they had a more flexible payment plan for small businesses flexible payment plan...." },
  { id: 7, image: "/images/landing/user profile (2).svg", name: "Ava Mitchell", date: "June 10, 2023", rating: 4, text: "Great quality and attention to detail. Their designs elevated my brand. I just wish they had a more flexible payment plan for small businesses flexible payment plan...." },
  { id: 8, image: "/images/landing/user profile (3).svg", name: "Isabella Turner", date: "July 2, 2023", rating: 5, text: "Great quality and attention to detail. Their designs elevated my brand. I just wish they had a more flexible payment plan for small businesses flexible payment plan...." },
];

export default function CommentsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % comments.length);
  const prev = () => setIndex((prev) => (prev - 1 + comments.length) % comments.length);

  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Community’s Experience
      </h2>

      <div className="relative w-full overflow-hidden px-4 md:px-20">
        <div
          className="hidden md:flex gap-6 transition-all duration-300"
          style={{ transform: `translateX(-${index * 360}px)` }}
        >
          {comments.map((item) => (
            <div
              key={item.id}
              className="w-[340px] min-w-[340px] bg-white rounded-xl border border-[#8F27FF] shadow-lg p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Image src={item.image} width={40} height={40} alt="profile" className="rounded-full" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                </div>
                <Image src="/images/landing/flat-color-icons_google.svg" width={25} height={25} alt="google" />
              </div>

              <Rating rate={item.rating} />
              <p className="text-black text-sm mb-3">{item.text}</p>
              <button className="text-sm text-gray-500">Read more</button>
            </div>
          ))}
        </div>

        <div className="flex md:hidden transition-all duration-300">
          {comments.slice(index, index + 1).map((item) => (
            <div
              key={item.id}
              className="w-full bg-white rounded-xl border border-[#8F27FF] shadow-lg p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Image src={item.image} width={40} height={40} alt="profile" className="rounded-full" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                </div>
                <Image src="/images/landing/flat-color-icons_google.svg" width={25} height={25} alt="google" />
              </div>

              <Rating rate={item.rating} />
              <p className="text-black text-sm mb-3">{item.text}</p>
              <button className="text-sm text-gray-500">Read more</button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button onClick={prev} className="border border-[#8F27FF] rounded-lg !shadow-lg px-3 py-1">←</button>
        <button onClick={next} className="border border-[#8F27FF] rounded-lg !shadow-lg px-3 py-1">→</button>
      </div>
    </div>
  );
}
