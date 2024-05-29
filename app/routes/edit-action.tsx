import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { updateSnack } from "~/data";
import SnackData from "~/types/snack-data";

export async function action({
        request,
    }: ActionFunctionArgs) {
        
        const formData:FormData = await request.formData();

        const name = formData.get('name')?.toString() ?? '';
        const description = formData.get('description')?.toString() ?? ''
        const snackId = formData.get('snackId')?.toString() ?? ''

        const snackData: SnackData = {
            name,
            description
        };

        await updateSnack(snackId, snackData);
     
        return redirect('/');
    }
