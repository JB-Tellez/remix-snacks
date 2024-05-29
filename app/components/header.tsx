import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <header className="text-center">
          <Link to="/">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Full Stack Snacks</h1>
          </Link>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Share your go-to snacks and a brief description for each one.
          </p>
        </header>
    );
}
