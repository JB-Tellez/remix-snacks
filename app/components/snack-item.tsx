import { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import ViewIcon from "~/components/view-icon";
import DeleteIcon from "~/components/delete-icon";
import SnackReceiver from "~/types/snack-receiver";



const SnackItem: FC<SnackReceiver> = ({ snack }) => {
  return (
    <Card key={snack.id}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{snack.name}</CardTitle>
          <div className="flex items-center gap-2">
            <ViewIcon snack={snack} />
            <DeleteIcon snack={snack} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>
        {snack.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default SnackItem
