import {v4 as uuidv4} from "uuid";

export const projects = [
    {id:uuidv4(),
    title:'Merrillville Office Tower',
    address: '8585 Broadway, Merrillville',
    locationCity:'Merrillville',
    locationState: 'Indiana',
    owner: 'The Napleton Group',
    architect: 'Robert Bowen',
    sf: '20,000',
    deliverySystem: 'General Contractor',
    description:'The Merrillville Office Tower renovation included a lobby' +
        ' and office renovations of approximately 20,000FT. This 8-story renovation' +
        ' includes office buildouts, bathroom facility upgrades, and lobby remodeling.' +
        ' Adaptive-Reuse construction was performed converting the existing space into a' +
        ' bank and university. Additional scope included a fire pump installation and' +
        ' boiler repairs.',
    tags:['Office', 'Retail', 'Adaptive-Reuse'],
    mainPhoto:"https://apextest12.b-cdn.net/N_Merrillville%20Office%20Tower/Merrillville-Ext-5.webp",
},]
