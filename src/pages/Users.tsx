const users = ["Ada Lovelace", "Grace Hopper", "Linus Torvalds"];

export const Users = () => {
    return (
        <section className="stack">
            <div>
                <p className="muted">Typed route demo</p>
                <h1>Users</h1>
            </div>

            <div className="user-grid">
                {users.map((user) => (
                    <article key={user} className="user-card">
                        <strong>{user}</strong>
                        <p className="muted">Example user row for the route demo.</p>
                    </article>
                ))}
            </div>
        </section>
    );
};