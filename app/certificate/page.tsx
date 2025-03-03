"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex justify-center">
      <Image
        src="/aeacc1363b3d4207aac7cd282fd6a859.jpeg" // Make sure this is inside the public/ folder
        alt="Certificate"
        priority // Ensures the image loads ASAP
        layout="intrinsic" // Keeps original size
        className="shadow-lg rounded-lg"
      />
    </div>
  );
}
