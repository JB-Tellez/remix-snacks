import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getSnack } from "~/data";

export const loader = async ({ params }) => {
  return await getSnack(params.snackId);
    // const url = process.env.API_URL ?? '';
    // const res = await fetch(url);
    // // const snack = await getContact(params.snackId);
    // const snack = json(await res.json());
    // return json({ snack });
  };

export default function Snack() {
    const { snack } = useLoaderData<typeof loader>();

    return <h1>Snack coming soon</h1>
}