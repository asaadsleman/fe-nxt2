"use client"
import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import CategoriesList from "../components/categorylist";

const ORGID = 2;

function CategoriesPage() {
    const [categories, setCategories] = useState();
    const router = useRouter();
    useEffect(() => {
        const getUserCategories = async (token: string | null) => {
            if (!token) {
                router.push("/");
                return;
            } else {
                // valid token
                const response = await fetch(`${siteConfig.links.BE_CATEGOORIES_API}?orgid=${ORGID}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "token " + token,
                    }
                });
                if (!response.ok) {
                    return undefined;
                }
                const data = await response.json();
                console.log("topicsData", data);
                setCategories(data);
            }
        }
        let accessToken = localStorage.getItem("token");
        getUserCategories(accessToken || "");
    }, []);
    return (
        <div>
            {categories && <div>
                <CategoriesList data={categories} />
            </div>}
            <br />
            <div className="flex flex pl-10 pr-15 row w-[70rem]">
                <label className="text-gray-500 text-xl">
                    Fine-tune learning with hey elements:
                </label>
            </div>
            <Divider />
            <div>

            </div>
        </div>
    )
}
export default CategoriesPage;