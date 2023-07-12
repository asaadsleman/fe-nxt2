"use client"
import { Card, Spacer } from "@nextui-org/react";
import { CategoryData } from "../types";

export default function CategoriesList({ data }: { data: CategoryData }) {
    return (
        <div className="pl-10 pr-15 w-[70rem]">
            <label className="text-indigo-600 text-3xl mb-1.5"><b>Categories</b></label>
            <div className="flex flex-row mt-3 overflow-scroll">
                <ul className="flex flex-row shrink-0">
                    {data && data.topics.map((topic) =>
                        <li key={topic.topicId} className="h-20 w-21">
                            <Card isPressable className="flex mx-1 px-1 items-center justify-center h-20 min-w-full" shadow="none">
                                <h2><b>{topic.topicNameShort}</b></h2>
                            </Card>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}