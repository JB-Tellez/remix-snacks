import { Form, useLoaderData } from "@remix-run/react";
import { getSnack } from "~/data";
import Snack from "~/types/snack";

export const loader = async ({ params }: { params: { snackId: string } }) => {
  return await getSnack(parseInt(params.snackId));
};

export default function SnackItem() {
  const  snack:Snack  = useLoaderData<typeof loader>();

  return <h1>{ snack.name }</h1>;
}