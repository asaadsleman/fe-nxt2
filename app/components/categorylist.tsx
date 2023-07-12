"use client"
import { Card, Spacer } from "@nextui-org/react";
import { CategoryData } from "../types";

export default function CategoriesList({ data }: { data: CategoryData }) {
    return (
        <div className="pl-10 pr-15 w-[70rem]">
            <div className="flex items-end">
                <label className="text-indigo-600 text-3xl mb-1.5">Categories</label>
                <p className="text-gray-500 pl-3 mb-1 text-xl">
                    Generate learning experiences with Curated AI for your teams' needs!
                </p>

            </div>
            <div className="flex flex-row mt-3 overflow-scroll">
                <ul className="flex flex-row shrink-0">
                    {data && data.topics.map((topic) =>
                        <li key={topic.topicId} className="h-20 w-21">
                            <Card isPressable className="flex mx-1 px-1 items-center justify-center h-20" shadow="none">
                                <h2><b>{topic.topicNameShort}</b></h2>
                            </Card>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}