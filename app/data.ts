import { json } from "@remix-run/node";
import Snack from "./types/snack-record";
import SnackData from "./types/snack-data";

const API_URL = process.env.API_URL ?? '';

export async function getSnacks() {
    const url = API_URL;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

export async function getSnack(id:number) {
    const url = `${API_URL}/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data[0];
}

export async function createSnack(snackData: SnackData) {
    const url = API_URL;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(snackData),
        headers: {
            'content-type': 'application/json'
        },
    });
    const data = json(await response.json());
    return data;
}

export async function deleteSnack(id:number) {
    const url = `${API_URL}/${id}`;
    const response = await fetch(url, {
        method: 'DELETE'
    });
    const data = json(await response.json());
    return data;
}

export async function updateSnack(snack: Snack) {
    return null; // TODO
}

