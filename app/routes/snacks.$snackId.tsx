import { Link, useLoaderData } from "@remix-run/react";
import { getSnack } from "~/data";
import Snack from "~/types/snack-record";
import { Button } from "~/components/ui/button"
import SnackItem from "~/components/snack-item";

export const loader = async ({ params }: { params: { snackId: string } }) => {
  return await getSnack(parseInt(params.snackId));
};

export default function SnackDetail() {
  const  snack:Snack  = useLoaderData<typeof loader>();

  return (
    <>
      <SnackItem snack={snack} editable={true} />
      <Link to="/">
        <Button>Snack List</Button>
      </Link>
    </>
  );
}