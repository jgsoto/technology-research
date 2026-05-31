import UserCard from "../Components/UserCard";
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
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Users Page</h1>

            <input
                type="text"
                placeholder="search users..."
                value={search}
                onChange={handleSearch}
                className="mb-6 w-full max-w-md rounded-lg border px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {isPending && <h1 className="mb-4 text-sm text-gray-500">Searching...</h1>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers.map(user => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        company={user.company.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Users;