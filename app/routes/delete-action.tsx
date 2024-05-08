import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { deleteSnack } from "~/data";

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const id: number | null = Number(formData.get('id'));
  if (id === null || isNaN(id)) {
    // TODO: handle the case when id is null or NaN
    // return an appropriate response or throw an error
  }
  await deleteSnack(id);
  return redirect('/');
}