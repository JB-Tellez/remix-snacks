import { ActionFunctionArgs, redirect } from "@remix-run/node";

export async function action({
    request,
  }: ActionFunctionArgs) {
    const formData:FormData = await request.formData();
    const url:string = process.env.API_URL ?? '';
    const body:string = JSON.stringify({
        name: formData.get('name'),
        description: formData.get('description')

    });

    const response = await fetch(url, {
        method: 'POST',
        body,
        headers: {
            'content-type': 'application/json'
        },
    });

    console.log(response);
   
    return redirect('/');
  }