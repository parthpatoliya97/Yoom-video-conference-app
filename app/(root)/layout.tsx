import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JupiterMeet",
  description:
    "Video Conferencing App Built By Clerk,Stream,Next.js,Typescript,Tailwind CSS",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
