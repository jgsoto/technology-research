interface UserCardProps {
    name: string;
    email: string;
    company: string;
}

function UserCard({ name, email, company, }: UserCardProps) {
    return (
        <div className="border rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-600">{email}</p>
            <p className="text-sm text-blue-600">{company}</p>
        </div>
    );
}

export default UserCard;