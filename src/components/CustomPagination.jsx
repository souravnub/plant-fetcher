"use client";
import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination";
import { useSearchParams, useRouter } from "next/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const CustomPagination = ({ baseUrl, pageCount }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page = searchParams.get("page") ?? "1";

    function handlePrev(e) {
        e.preventDefault();
        if (Number(page) - 1 <= 0) {
            return;
        }
        router.push(`${baseUrl}/?page=${Number(page) - 1}`);
    }
    function handleNext(e) {
        e.preventDefault();
        if (Number(page) + 1 > pageCount) {
            return;
        }
        router.push(`${baseUrl}/?page=${Number(page) + 1}`);
    }
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <Button
                        className="gap-1"
                        variant="ghost"
                        onClick={handlePrev}
                        disabled={Number(page) - 1 <= 0}>
                        <ChevronLeft className="h-4 w-4" />
                        <span>Previous</span>
                    </Button>
                </PaginationItem>

                <PaginationItem className="text-sm px-3">
                    {page} / {pageCount}
                </PaginationItem>

                <PaginationItem>
                    <Button
                        className="gap-1 "
                        variant="ghost"
                        onClick={handleNext}
                        disabled={Number(page) + 1 > pageCount}>
                        <span>Next</span>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default CustomPagination;
