interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Error fetching users");
  }

  return response.json();
}