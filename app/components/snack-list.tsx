import Snack from "~/types/snack-record";
import SnackItem from "./snack-item";

export default function SnackList({ snacks }: { snacks: Snack[] }) {

    return (
        <div className="grid gap-4">
        {snacks.map(snack => (
            <SnackItem snack={snack} />
        ))}
    </div>
    );
}
