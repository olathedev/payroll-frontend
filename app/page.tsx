'use client'

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/signin");
  return (
    <div className="">

    </div>
  );
}
