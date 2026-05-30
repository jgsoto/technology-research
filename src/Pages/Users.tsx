import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../Services/usersApi";
import { useDeferredValue, useState, useMemo } from "react";

function Users() {
    const { data: users = [], isLoading, error, } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })

    const [search, setSearch] = useState("");

    const deferredSearch = useDeferredValue(search);

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(deferredSearch.toLowerCase())
        )
    }, [users, deferredSearch]);

    return (
        <div>
            <h1>Users Page</h1>
            <input
                type="text"
                placeholder="search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error loading users</h1>}
            {users && (
                <div>
                    <h1>Users list</h1>
                    <ul>
                        {filteredUsers.map(user => (
                            <li key={user.id}>
                                {user.name}
                            </li>
                        ))}
                    </ul>
                </div>)}
        </div>
    )
}

export default Users;