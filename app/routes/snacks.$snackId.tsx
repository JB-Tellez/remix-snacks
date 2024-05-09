import { Form, Link, useLoaderData } from "@remix-run/react";
import Header from "~/components/header";
import { getSnack } from "~/data";
import Snack from "~/types/snack-record";
import { Button } from "~/components/ui/button"
import SnackItem from "~/components/snack-item";

export const loader = async ({ params }: { params: { snackId: string } }) => {
  return await getSnack(parseInt(params.snackId));
};

export default function SnackView() {
  const  snack:Snack  = useLoaderData<typeof loader>();

  return (
    <main className="flex flex-col items-center my-8 gap-y-8 w-1/2 mx-auto">
      <Header/>
      <SnackItem snack={snack} editable={true} />
      <Link to="/">
        <Button>Snack List</Button>
      </Link>
    </main>
  );
}