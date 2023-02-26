const apiDomain = "https://localhost:7098";

export async function getRuns(username) {
    const response = await fetch(apiDomain + '/api/Runs/GetRuns/' + username);
    return await response.json();
}