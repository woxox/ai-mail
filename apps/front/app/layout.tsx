"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { useThemeStore } from "@/store/themeStore";
import clsx from "clsx";
import {
  baseTokenClass,
  darkThemeClass,
  lightThemeClass,
} from "@/theme/theme.css";
import { Box } from "@/components/atoms/Box";
import { Sidebar } from "@/components/molecules/Sidebar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Turborepo",
//   description: "Generated by create turbo",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { darkMode } = useThemeStore();

  return (
    <html lang="en" className={clsx(inter.className)}>
      <body
        className={clsx(
          baseTokenClass,
          darkMode ? darkThemeClass : lightThemeClass
        )}
      >
        <Box display="flex" width="full" height="full">
          <Box width="64" height="full" display="block">
            <Sidebar.Root activePath="/a/c/d">
              <Sidebar.Item path="/f">F</Sidebar.Item>
              <Sidebar.Group groupPath="/a" label="A">
                <Sidebar.Item path="/a/b">A/B</Sidebar.Item>
                <Sidebar.Group groupPath="/a/c" label="A/C">
                  <Sidebar.Item path="/a/c/d">A/C/D</Sidebar.Item>
                </Sidebar.Group>
              </Sidebar.Group>
            </Sidebar.Root>
          </Box>

          <Box flex="full">{children}</Box>
        </Box>
      </body>
    </html>
  );
}
