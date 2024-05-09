import { json } from "@remix-run/node";
import Snack from "./types/snack";

export async function getSnacks() {
    const url = process.env.API_URL ?? '';
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

export async function getSnack(id:number) {
    const url = process.env.API_URL ?? '';
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    console.log({data});
    return data.data[0];
}

export async function createSnack(snack: Snack) {
    const url:string = process.env.API_URL ?? '';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(snack),
        headers: {
            'content-type': 'application/json'
        },
    });
    const data = json(await response.json());
    return data;
}

export async function deleteSnack(id:number) {
    const url = `${process.env.API_URL}/${id}`;
    const response = await fetch(url, {
        method: 'DELETE'
    });
    const data = json(await response.json());
    return data;
}

export async function updateSnack(snack: Snack) {
    return null; // TODO
}
