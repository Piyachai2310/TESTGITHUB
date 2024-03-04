import { SERVER_URL }  from "./app.config";

export async function API_GET(url) {
    console.log("44444444444444444444444444444");
    console.log("check path API_GET: " + SERVER_URL + "api/" + url);
    const response = await fetch(
        SERVER_URL + "api/" + url,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                'Content-Type' : 'application/json',
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        }
    );

    let json = await response.json();

    return json;
}

export async function API_POST(url, data) {
    console.log("api data: " , data);
    console.log("check path post: " + SERVER_URL + "api/" + url);

    const response = await fetch(
        SERVER_URL + "api/" + url,
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("access_token")
            },
            body: JSON.stringify(data)
        }
    );
    let json = await response.json();
    console.log("api json: " , json);
    return json;
}

export async function API_DELETE(url, data) {
    console.log("check path API_DELETE: " + SERVER_URL + "api/" + url);
    const response = await fetch(
        SERVER_URL + "api/" + url,
        {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                Authorization: "Bearer " + localStorage.getItem("access_token")
            },
            body: JSON.stringify(data)
        }
    );

    let json = await response.json();
    return json;
}
