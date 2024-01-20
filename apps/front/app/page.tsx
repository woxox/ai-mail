"use client";

import clsx from "clsx";
import { useState } from "react";

import { Box } from "@/components/atoms/Box";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import {
  baseToken,
  baseTokenClass,
  darkThemeClass,
  lightThemeClass,
} from "@/theme/theme.css";

import "./global-style.css";
import { Sidebar } from "@/components/molecules/Sidebar";
import { useThemeStore } from "@/store/themeStore";

export default function Home() {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <div>
      <Box>
        <Button onClick={toggleDarkMode}>Dark:{String(darkMode)}</Button>
      </Box>
      <Box width="64"></Box>
    </div>
  );
}
