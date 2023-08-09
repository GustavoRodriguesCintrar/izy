import React from "react";

export function Feed() {
    const chat = []

    return (
        <div>
            {chat.map((message) => (
                <p>{message}</p>
            ))}
        </div>
    )
}