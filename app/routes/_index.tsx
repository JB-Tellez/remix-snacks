/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DcSVO2QCF6S
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Button } from "~/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "~/components/ui/card"

import { useLoaderData } from "@remix-run/react";
import SnackList from "~/components/snack-list";
import CreateForm from "~/components/create-form";
import { getSnacks } from "~/data";
import SnackRecord from "~/types/snack-record";

export async function loader() {
  return await getSnacks();
}

export default function Component() {
    const snacks:SnackRecord[] = useLoaderData<typeof loader>();
  return (
    
      <div className="mx-auto max-w-3xl space-y-6">
        
        <form className="grid gap-4" action="/create-action" method="post">
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
        </form>
        <div className="grid gap-4">
            {snacks.map(snack => (
                <Card key={snack.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                  <CardTitle>{snack.name}</CardTitle>
                  <div className="flex items-center gap-2">
                  <EyeIcon className="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
                  <TrashIcon className="h-5 w-5 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500" />
                </div>
                </div>
                </CardHeader>
                <CardContent>
                  <p>{snack.description}</p>
                </CardContent>
              </Card>
            ))}
          
        
        </div>
      </div>

  )
}


function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}