export interface Personagem {
    created: string;
    episode: string[];
    gender: string;
    image: string;
    location: {
        name: string;
        url: string;
    }
    name: string;
    origin: {
        name: string;
        url: string;
    }
    species: string;
    status: string;
    type: string;
    url: string;
}