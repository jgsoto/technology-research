export const About = () => {
    return (
        <section className="stack">
            <div>
                <p className="muted">About this demo</p>
                <h1>About</h1>
            </div>

            <p>
                TanStack Router handles the routes, while <code>useSyncExternalStore</code> keeps the theme
                synchronized with <code>localStorage</code> and the current React UI.
            </p>
        </section>
    );
};