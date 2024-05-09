import { Button } from "~/components/ui/button"
import { useNavigation } from "@remix-run/react";
import { Form } from "@remix-run/react";

  
export default function CreateForm() {

    const navigation = useNavigation();

    return (
        <Form className="flex items-center gap-x-2" action="/create-action" method="POST" >
        <fieldset className="border border-black px-2 rounded" disabled={navigation.state === "submitting"}>
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" type="text" placeholder="snack name" required />
        </fieldset>
        <fieldset className="border border-black px-2 rounded">
            <label htmlFor="description" className="sr-only">Name</label>
            <input id="description" name="description" type="text" placeholder="snack description" required />
        </fieldset>
        <Button type="submit">{navigation.state === "submitting" ? ".........." : "CREATE"}</Button>
    </Form>
    );
}