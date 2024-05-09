import { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import EditIcon from "~/components/edit-icon";
import ViewIcon from "~/components/view-icon";
import DeleteIcon from "~/components/delete-icon";
import SnackReceiver from "~/types/snack-receiver";



const SnackItem: FC<SnackReceiver> = ({snack, editable, ...props}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{snack.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <CardDescription>{snack.description}</CardDescription>
        <div className="flex">
          {editable ? <EditIcon snack={snack} /> :  <ViewIcon snack={snack} />}
          <DeleteIcon snack={snack} />
        </div>
      </CardContent>
    </Card>
  );
}

export default  SnackItem
