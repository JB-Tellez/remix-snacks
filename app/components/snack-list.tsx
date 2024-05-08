import Snack from "~/types/snack";
import SnackItem from "./snack-item";

export default function SnackList({ snacks }: { snacks: Snack[] }) {

    return (
        <ul className="space-y-4 w-full">
            {snacks.map((snack: Snack) => (
                <SnackItem snack={snack} />
            ))}
        </ul>
    );
}
