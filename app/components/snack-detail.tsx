import { FC } from "react";
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import EditIcon from "~/components/edit-icon"
import DeleteIcon from "~/components/delete-icon"
import SnackReceiver from "~/types/snack-receiver";

const SnackDetail: FC<SnackReceiver> = ({snack}) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{snack.name}</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              size="icon"
              variant="ghost"
            >
              <EditIcon snack={snack} />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
              size="icon"
              variant="ghost"
            >
              <DeleteIcon snack={snack} />
              <span className="sr-only">Delete</span>
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
  )
}

export default SnackDetail
