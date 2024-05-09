import SnackRecord from "./snack-record";

export default interface SnackReceiver {
    snack: SnackRecord,
    editable?: boolean,
}