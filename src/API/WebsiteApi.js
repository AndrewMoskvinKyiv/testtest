import axios from "axios";
const session = axios.create();



export const WebsiteAPI = {
    getAllProjects() {
        return session.get('https://apextest12.b-cdn.net/apex_data/apexProjects03.09.2023.json').then(response => {
            return response.data
        })
    },
    getAllTeam() {
        return session.get('https://apextest12.b-cdn.net/apex_data/apexTeam03.09.2023.json').then(response => {
            return response.data
        })
    },
}
