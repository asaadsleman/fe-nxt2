"use client";

import GridView from "../components/viewgrid";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "../config/site";
import { UserData } from "../types";

export default function DashboardPage() {

    const [token, setToken] = useState<string | null>(null);
    const [data, setData] = useState<UserData | null>(null);
    const router = useRouter();
    useEffect(() => {
        const getUserData = async (token: string | null) => {
            // invalid token provided 
            if (!token) {
                router.push('/');
                return null;
            }
            // valid token
            const response = await fetch(`${siteConfig.links.USER_DATA_BE_API_ENDPOINT}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                }
            });
            if (!response.ok) {
                return undefined;
            }
            const data = await response.json();
            setData(data);
        }

        if (typeof window !== undefined) {
            let localToken = localStorage.getItem("token");
            setToken(localToken);
            getUserData(localToken);

        }
    }, [token, data]);
    return (
        <div className="justify-self-center mx-32 overflow-hidden flex justify-center">
            {token &&
                data &&
                <GridView
                    name={data.name}
                    description={data.description}
                    persona={data.persona}
                    playlists={data.playlists}
                />}
        </div>
    )
}