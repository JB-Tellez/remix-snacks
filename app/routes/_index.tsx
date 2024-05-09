import { useLoaderData } from "@remix-run/react";
import SnackList from "~/components/snack-list";
import CreateForm from "~/components/create-form";
import { getSnacks } from "~/data";

export async function loader() {
  const snacksData = await getSnacks();
  return snacksData;
}


export default function SnacksRoute() {
  const snacks = useLoaderData<typeof loader>();
  return (
    <>
      <CreateForm />
      <SnackList snacks={snacks} />
    </>
  );
}
