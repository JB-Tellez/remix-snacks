import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import Header from "./components/header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <main className="flex flex-col items-center my-8 gap-y-8 w-1/2 mx-auto">
        <Header/>
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Snacks" },
    { name: "description", content: "Remix powered Snacks app" },
  ];
};

export default function App() {
  return <Outlet />;
}
