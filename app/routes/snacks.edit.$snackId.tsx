import { useLoaderData } from "@remix-run/react";
import { getSnack } from "~/data";
import Snack from "~/types/snack-record";

export const loader = async ({ params }: { params: { snackId: string } }) => {
  return await getSnack(parseInt(params.snackId));
};

export default function EditSnack() {
  const  snack:Snack  = useLoaderData<typeof loader>();

  return (
   <p>Edit Coming soon. Snack {snack.name}</p>
  );
}