export default function EditForm() {
    return <h1>Coming Soon</h1>
}
// import { Button } from "~/components/ui/button"
// import { Form } from "@remix-run/react"; // TODO: consider useFetcher
// import type { LoaderFunctionArgs } from "@remix-run/node";
// import { json } from "@remix-run/node";
// import invariant from "tiny-invariant";

// import { getContact } from "../data";

// export const loader = async ({
//   params,
// }: LoaderFunctionArgs) => {
//   invariant(params.contactId, "Missing contactId param");
//   const contact = await getContact(params.contactId);
//   if (!contact) {
//     throw new Response("Not Found", { status: 404 });
//   }
//   return json({ contact });
// };
  
// export default function EditForm() {
//     return (
//         <Form className="flex items-center gap-x-2" action="/edit-action" method="POST">
//         <fieldset className="border border-black px-2 rounded">
//             <label htmlFor="name" className="sr-only">Name</label>
//             <input id="name" name="name" type="text" placeholder="snack name" required />
//         </fieldset>
//         <fieldset className="border border-black px-2 rounded">
//             <label htmlFor="description" className="sr-only">Name</label>
//             <input id="description" name="description" type="text" placeholder="snack description" required />
//         </fieldset>
//         <Button type="submit">Submit</Button>
//     </Form>
//     );
// }