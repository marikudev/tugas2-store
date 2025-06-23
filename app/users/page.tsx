"use client";

import React, { useEffect, useState} from "react";
import { IUserStore } from "@/lib/types/data";
import User from "@/src/component/user";


export default function Users() {
    const url = "https://fakestoreapi.com/users";
    const [users, setUsers] = useState<IUserStore[]>([]);

    const getDataUsers = async () => {
        const response = await fetch(url);
        const dataUser = await response.json();
        setUsers(dataUser);
        console.log(users);
    }

    useEffect(
        () => {
            getDataUsers();
        }

    )

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Users</h1>
                <div className="grid grid-cols-3 gap-4">
                    {users.map((props) => {
                        return (
                          <div className="border p-4 rounded-lg" key={props.id}>
                            <User
                              id={props.id}
                              username={props.username}
                              name={props.name}
                            />
                          </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}