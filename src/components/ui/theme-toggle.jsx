"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import useTheme from "../hooks/useTheme";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? (
                <Moon className=" h-[1.2rem] w-[1.2rem] rotate-0 " />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 " />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
