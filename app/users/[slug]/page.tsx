"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";    
import { IUserStore }  from "@/lib/types/data";
import User from "@/src/component/user";

export default function DetailUsers() {

    const { slug: userId } = useParams<{ slug: string }>();
    const url = `https://fakestoreapi.com/users/${userId}`;
    const [users, setUsers] = useState<IUserStore>(
    
        {
            id: 0,
            username: "",
            name: {
                firstname: "",
                lastname: "",
            },
            password: "",
            email: "",
        }
    )

    const getDataUsers = async () => {
        const response = await fetch(url);
        const dataUser = await response.json();
        setUsers(dataUser);
        //console.log(users);
    }

    useEffect(() => {
        getDataUsers();
    });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">User Details</h1>
            <User
                id={users.id}
                username={users.username}
                name={users.name}
                email={`Email: ${users.email}`}
                password={`Password: ${users.password}`}
                detailStatus={false} // Assuming you want to show details in this component
            />
            {/* Here you can fetch and display the user details based on the userId */}
            {/* For example, you could use a fetch call to get the user data from an API */}
        </div>
    );
}