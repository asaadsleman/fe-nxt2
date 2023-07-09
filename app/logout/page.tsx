"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LogoutPage: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        // Perform logout logic here
        // Example: Clear authentication token, reset user data, etc.

        // Redirect to the login page
        localStorage.removeItem("token");
        router.push('/');
    }, []);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default LogoutPage;
