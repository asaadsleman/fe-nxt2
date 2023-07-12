"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import CategoriesList from "../components/categorylist";
import DropDownCatKey from "../components/categoriesdropdown";

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
            <div className="flex flex-row justify-between pl-10 pr-15 py-1 row w-[70rem]">
                <div>
                    <label className="text-gray-500 text-xl pr-3">
                        Fine-tune learning with hey elements:
                    </label>
                    <DropDownCatKey />
                </div>
                <div>
                    <Button color="secondary">
                        Generate
                    </Button>
                </div>
            </div>
            <Divider />
            <div>

            </div>
        </div>
    )
}
export default CategoriesPage;