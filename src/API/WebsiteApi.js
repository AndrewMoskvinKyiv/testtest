import axios from "axios";
const session = axios.create();

export const WebsiteAPI = {
    getAllProjects() {
        return session.get('https://apextest12.b-cdn.net/apex_projects(12).json').then(response => {
            return response.data
        })
    },
    getAllTeam() {
        return session.get('https://apextest12.b-cdn.net/apex_team.json').then(response => {
            return response.data
        })
    },
}
