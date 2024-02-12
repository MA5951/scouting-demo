"use client"

import { useEffect } from "react";
import Router, { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, []);

    return null;
};

export default page;