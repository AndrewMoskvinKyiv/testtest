import axios from "axios";
const session = axios.create();



export const WebsiteAPI = {
    getAllProjects() {
        return session.get('https://apextest12.b-cdn.net/apex_data/apexProjects15.08.2023.json').then(response => {
            return response.data
        })
    },
    getAllTeam() {
        return session.get('https://apextest12.b-cdn.net/apex_data/apexTeam15.08.2023.json').then(response => {
            return response.data
        })
    },
}
