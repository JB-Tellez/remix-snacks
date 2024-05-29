import { useLoaderData } from "@remix-run/react";
import SnackList from "~/components/snack-list";
import CreateForm from "~/components/create-form";
import { getSnacks } from "~/data";
import SnackRecord from "~/types/snack-record";

export async function loader() {
  return await getSnacks();
}

export default function Component() {
  const snacks: SnackRecord[] = useLoaderData<typeof loader>();
  return (

    <div className="mx-auto max-w-3xl space-y-6">

      <CreateForm />
      <SnackList snacks={snacks} />
    </div>

  )
}
