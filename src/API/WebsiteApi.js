import axios from "axios";
const session = axios.create();

function setAuthHeader() {
    return {
        headers: {
          // 'Cache-Control': `no-cache`
         cacheControl: `no-cache`
        },
    };
}

export const WebsiteAPI = {
    getAllProjects() {
        return session.get('https://apextest12.b-cdn.net/apex_projects(12).json', {headers: {

            }}).then(response => {
            return response.data
        })
    },
    getAllTeam() {
        return session.get('https://apextest12.b-cdn.net/apex_team.json', setAuthHeader()).then(response => {
            return response.data
        })
    },
}
