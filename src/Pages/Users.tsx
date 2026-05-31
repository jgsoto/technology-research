import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../Services/usersApi";
import { useDeferredValue, useState, useMemo, useCallback, useTransition } from "react";

function Users() {
    const { data: users = [], isLoading, error, } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })

    const [search, setSearch] = useState("");

    const [isPending, startTransition] = useTransition();

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {

            const value = e.target.value;

            startTransition(() => {
                setSearch(value);
            });

        },
        []
    );

    const deferredSearch = useDeferredValue(search);

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(deferredSearch.toLowerCase())
        )
    }, [users, deferredSearch]);

    if (isLoading) return <h1>Loading...</h1>;

    if (error) return <h1>Error loading users</h1>;

    return (
        <div>
            <h1>Users Page</h1>
            <input
                type="text"
                placeholder="search users..."
                value={search}
                onChange={handleSearch}
            />
            {isPending && <h1>Searching...</h1>}
            
            <div>
                <h1>Users list</h1>
                <ul>
                    {filteredUsers.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Users;