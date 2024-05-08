import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import Snack from "~/types/snack";
import EditIcon from "~/components/edit-icon";
import DeleteIcon from "./delete-icon";

export default function SnackItem({ snack }: { snack: Snack }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{snack.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <CardDescription>{snack.description}</CardDescription>
        <div className="flex">
          <EditIcon />
          <DeleteIcon id={snack.id} />
        </div>
      </CardContent>
    </Card>
  );
}
