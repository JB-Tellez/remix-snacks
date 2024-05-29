import { FC } from "react";
import DeleteIcon from "~/components/delete-icon"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import { Button } from "~/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "~/components/ui/dialog"
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "~/components/ui/card"
import SnackReceiver from "~/types/snack-receiver";
import { Form } from "@remix-run/react";

const SnackDetail: FC<SnackReceiver> = ({ snack }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{snack.name}</CardTitle>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    size="icon"
                    variant="ghost"
                  >
                    <EditTriggerIcon />
                    <span className="sr-only">Edit</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <Form action={`/edit-action`} method="post">
                    <Input type="hidden" value={snack.id} name="snackId" />
                    <DialogHeader>
                      <DialogTitle>Edit {snack.name}</DialogTitle>
                      <DialogDescription>Make changes to the snack details here.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                          Name
                        </Label>
                        <Input className="col-span-3" defaultValue={snack.name} id="name" name="name" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                          Description
                        </Label>
                        <Textarea
                          className="col-span-3"
                          defaultValue={snack.description}
                          id="description"
                          name="description"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save Changes</Button>
                      <div>
                        <Button variant="outline">Cancel</Button>
                      </div>
                    </DialogFooter>
                  </Form>
                </DialogContent>
              </Dialog>
              <Button
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <DeleteIcon snack={snack} />
                <span className="sr-only">Edit</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            {snack.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}

function EditTriggerIcon() {
  return (
    <i>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
      </svg>
    </i>
  );
}

export default SnackDetail
