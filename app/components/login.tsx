"use client";

import { useState } from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

// Define the state type for your form fields
type FormState = {
    email: string;
    password: string;
};

export const Login = () => {
    const [hasError, setHasError] = useState(false);
    const [formState, setFormState] = useState<FormState>({
        email: '',
        password: '',
    });
    const router = useRouter();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // send request to server with the user's info and get a token back
        const JSONdata = JSON.stringify(formState);
        await fetch("https://api.aisearchify.com/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata
        }).then(async response => {
            if (!response.ok) {
                // unauthorized access
                if (response.status === 401) {
                    setHasError(true);
                }
            } else {
                let data = await response.json();
                localStorage.setItem('token', data['token']);
                router.push("/dashboard");
            }
        });
        // Reset the form
        setFormState({
            email: '',
            password: '',
        });

    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Update the corresponding field in the formState
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="flex gap-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-5">

                    <Input className="max-w-xs"
                        radius={"full"}
                        type="text"
                        label="Email"
                        onChange={handleChange}
                        value={formState.email}
                        placeholder="Enter your email into this text field as required" name="email" required />

                </div>
                <div className="mb-5">

                    <Input className="max-w-xs"
                        radius={"full"}
                        type="password"
                        label="Password"
                        variant="bordered"
                        value={formState.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        name="password" required />

                </div>
                <div className="flex gap-3 mb-2">
                    <button className={buttonStyles({ fullWidth: true, color: "primary", radius: "full", variant: "shadow" })} type="submit">Sign in</button>
                </div>
                {hasError && (
                    <div className="items-center">
                        <label className="self-center text-red-500" color="red">Login Failed!</label>
                    </div>
                )}
            </form>
        </div>
    );
};