const apiDomain = "https://localhost:7098";

export async function createUser(data) {
    const response = await fetch(apiDomain + '/api/Users/AddUser', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async function getUser(username) {
    const response = await fetch(apiDomain + '/api/Users/GetUser/' + username);
    return await response.json();
}