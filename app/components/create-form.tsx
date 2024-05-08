import { Button } from "~/components/ui/button"
  
export default function CreateForm() {
    return (
        <form className="flex items-center gap-x-2" action="/create" method="POST">
        <fieldset className="border border-black px-2 rounded">
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" type="text" placeholder="snack name" required />
        </fieldset>
        <fieldset className="border border-black px-2 rounded">
            <label htmlFor="description" className="sr-only">Name</label>
            <input id="description" name="description" type="text" placeholder="snack description" required />
        </fieldset>
        <Button type="submit">Submit</Button>
    </form>
    );
}