"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [font, setFont] = useState<any>(null);
  const [radius, setRadius] = useState<any>(null);
  const [colour, setColour] = useState<any>(null);

  return (
    <>
      <div className="flex flex-col items-center gap-y-4 p-4">
        <h1 className="text-3xl">font</h1>
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              setFont("mono");
            }}
          >
            mono
          </button>
          <button
            onClick={() => {
              setFont("sans");
            }}
          >
            sans
          </button>
          <button
            onClick={() => {
              setFont("serif");
            }}
          >
            serif
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4 p-4">
        <h1 className="text-3xl">radius</h1>
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              setRadius("none");
            }}
          >
            none
          </button>
          <button
            onClick={() => {
              setRadius("md");
            }}
          >
            medium
          </button>

          <button
            onClick={() => {
              setRadius("lg");
            }}
          >
            large
          </button>
          <button
            onClick={() => {
              setRadius("full");
            }}
          >
            full
          </button>
        </div>
      </div>
      {/* color */}
      <div className="flex flex-col items-center gap-y-4 p-4">
        <h1 className="text-3xl">color</h1>
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              setColour("red");
            }}
          >
            red
          </button>
          <button
            onClick={() => {
              setColour("green");
            }}
          >
            green
          </button>
          <button
            onClick={() => {
              setColour("blue");
            }}
          >
            blue
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center h-full w-full">
        <Button colour={colour} radius={radius} fontFamily={font}>
          hello
        </Button>
      </div>
    </>
  );
}
