const apiDomain = "https://localhost:7098";

export async function getRuns(username) {
    const response = await fetch(apiDomain + '/api/Runs/GetRuns/' + username);
    return await response.json();
}

export async function addRun(data, username) {
    const response = await fetch(apiDomain + '/api/Runs/AddRun/' + username, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    });
    return await response.json();
}