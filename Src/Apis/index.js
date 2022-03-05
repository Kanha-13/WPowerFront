import { BASE_URL, api } from "./config";

const requestor = async (url, method, data) => {
    const res = await fetch(BASE_URL + url, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: method !== "GET" && JSON.stringify(data)

    });
    return await res.json();

}

const help = async (data = {}) => {
    return await requestor(api.help, "GET", data);
}
const nearBYHelp = () => {

}
const police = () => {

}
const ambulance = () => {

}

export { help }