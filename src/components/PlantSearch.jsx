"use client";
import { Search } from "lucide-react";

import React, { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

const PlantSearch = () => {
    const [input, setInput] = useState("");

    return (
        <div className="flex  space-x-2 max-w-md mx-auto">
            <div className="relative flex-grow">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="search"
                    placeholder="Search plant..."
                    className="w-full rounded-lg bg-background pl-8"
                />
            </div>
            <Link
                href={`/search?q=${input}`}
                className={buttonVariants({ variant: "outline" })}>
                Search
            </Link>
        </div>
    );
};

export default PlantSearch;
