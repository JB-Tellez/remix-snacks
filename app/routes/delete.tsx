import { ActionFunctionArgs, redirect } from "@remix-run/node";

export async function action({
    request,
  }: ActionFunctionArgs) {
    const formData = await request.formData();
    const id = formData.get('id');
    const url = `${process.env.API_URL}/${id}`;

    
    const response = await fetch(url, {
        method: 'DELETE'
    });
   
    return redirect('/');
  }