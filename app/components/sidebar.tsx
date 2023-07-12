"use client"
import { siteConfig } from "../config/site";
import { Link, Divider } from "@nextui-org/react";


export default function SideBar() {
    return (
        <div>
            <div className="flex flex-col">
                {siteConfig.sideBarCategories.map((category, index) => (
                    <Link
                        className="py-2"
                        key={"sidebar-" + index}
                        color="foreground"
                        href={siteConfig.sideBarCategories[index].href}
                        size="lg"

                    >
                        <h2>
                            {"#" + category.label}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}