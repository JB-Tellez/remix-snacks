import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { createSnack } from "~/data";
import SnackData from "~/types/snack-data";

export async function action({
    request,
}: ActionFunctionArgs) {
    const formData: FormData = await request.formData();
    const snackData: SnackData = {
        name: formData.get('name')?.toString() ?? '',
        description: formData.get('description')?.toString() ?? ''
    };

    await createSnack(snackData);

    return redirect('/');
}
