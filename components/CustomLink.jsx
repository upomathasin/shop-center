"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CustomLink({ path, children }) {
  const pathName = usePathname();
  const active = path === pathName;
  return (
    <Link href={path} className={active ? "text-blue-400 font-bold" : ""}>
      {children}
    </Link>
  );
}
