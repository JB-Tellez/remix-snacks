import { FC } from "react";
import { Link } from "@remix-run/react";
import SnackReceiver from "~/types/snack-receiver";

const ViewIcon: FC<SnackReceiver> = ({ snack, ...props }) => {
    return (
        <Link to={`snacks/${snack.id}`}>
            <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M6.5 9a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9 5a4 4 0 1 0 2.248 7.309l1.472 1.471a.75.75 0 1 0 1.06-1.06l-1.471-1.472A4 4 0 0 0 9 5Z" clipRule="evenodd" />
                </svg>
            </i>
        </Link>
    );
}

export default ViewIcon;
