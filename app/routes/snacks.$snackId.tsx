import { useLoaderData } from "@remix-run/react";
import { getSnack } from "~/data";
import Snack from "~/types/snack-record";
import SnackDetail from "~/components/snack-detail";

export const loader = async ({ params }: { params: { snackId: string } }) => {
  return await getSnack(parseInt(params.snackId));
};

export default function SnackDetailPage() {
  const  snack:Snack  = useLoaderData<typeof loader>();
  return <SnackDetail snack={snack} />
}
