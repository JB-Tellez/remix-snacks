import { FC } from "react";
import { Link } from "@remix-run/react";
import SnackReceiver from "~/types/snack-receiver";

const ViewIcon: FC<SnackReceiver> = ({ snack }) => {
    return (
        <Link className="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to={`snacks/${snack.id}`}>
            <i>
                <svg
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
            </i>
        </Link>
    );
}

export default ViewIcon;
