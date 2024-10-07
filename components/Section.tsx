"use client";

import Link from "next/link";
import React from "react";

export function ContentSection({
  title,
  headline,
  content,
  direction = "left",
  id = "",
  url = "#",
  children,
}: {
  title: string;
  headline: string;
  content: React.ReactNode;
  direction?: "left" | "right";
  id?: string;
  url?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={`w-full my-4 flex items-center justify-center flex-wrap sm:flex-nowrap gap-8 xl:gap-10 2xl:gap-12 ${direction === "right" && "flex-row-reverse"}`}
    >
      <div className="flex flex-col basis-full" id={id}>
        <p className="text-primary font-semibold">{title}</p>
        <Link href={url} className="pb-3 text-3xl font-medium">
          {headline}
        </Link>

        <div className="prose max-w-none text-pretty">{children}</div>
      </div>
      <div className="flex justify-center basis-full">{content}</div>
    </div>
  );
}

export function NoImgSection({
  title,
  headline,
  description,
  id = "",
  url = "#",
}: {
  title: string;
  headline: string;
  description: string | React.JSX.Element;
  id?: string;
  url?: string;
}) {
  return (
    <div
      className="mx-auto flex flex-col justify-center ~sm/2xl:~px-6/80"
      id={id}
    >
      <Link href={url} className="font-bold uppercase">
        {title}
      </Link>
      <h3 className="pb-3 pt-2 text-3.5xl font-bold">{headline}</h3>
      {typeof description === "string" ? (
        <p className="prose max-w-none">{description}</p>
      ) : (
        <div className="prose mx-auto max-w-none">{description}</div>
      )}
    </div>
  );
}
