import { memo } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
};


interface UserCardProps {
    user: User;
};


export const UserCard = memo(function UserCard({ user }: UserCardProps) {
    console.log("UserCard renser")
    return (
        <div style = {{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '4px'}}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
});