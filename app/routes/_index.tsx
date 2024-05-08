import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/header";
import SnackList from "~/components/snack-list";
import CreateForm from "~/components/create-form";

export async function loader() {
  const res = await fetch("https://fastsnacks-utumofjy.b4a.run/snacks");
  const data = json(await res.json());
  return data;
}


export default function SnacksRoute() {
  const snacks = useLoaderData<typeof loader>();
  return (
    <main className="flex flex-col items-center my-8 gap-y-8 w-1/2 mx-auto">
      <Header />
      <CreateForm />
      <SnackList snacks={snacks.data} />
    </main>
  );
}



export const meta: MetaFunction = () => {
  return [
    { title: "Remix Snacks" },
    { name: "description", content: "Remix powered Snacks app" },
  ];
};

