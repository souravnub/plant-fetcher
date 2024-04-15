"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
const BackButton = () => {
    const router = useRouter();
    return (
        <Button
            className="h-7 w-7"
            size="icon"
            variant="outline"
            onClick={() => {
                router.back();
            }}>
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
        </Button>
    );
};

export default BackButton;
