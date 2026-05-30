import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../Services/usersApi";

function Users() {
    const { data, isLoading, error, } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })

    return (
        <div>
            <h1>Users Page</h1>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error loading users</h1>}
            {data && (
                <div>
                    <h1>Users list</h1>
                    <ul>
                        {data.map((user: any) => (
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