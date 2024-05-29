import { Button } from "~/components/ui/button"
import { useNavigation } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

  
export default function CreateForm() {

    const navigation = useNavigation();

    return (
        <Form className="grid gap-4" action="/create-action" method="post">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="snack-name">Snack Name</Label>
              <Input id="snack-name" name="name" placeholder="Enter snack name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="snack-description">Description</Label>
              <Textarea id="snack-description" name="description" placeholder="Describe your favorite snack" rows={3} />
            </div>
          </div>
          <Button className="w-full sm:w-auto" type="submit">
            Add Snack
          </Button>
        </Form>
    );
}