import { Image } from './StrawImage';

export interface Item{
    id?: number;
    name: string;
    description: string;
    images: Array<Image>;
}

export class StrawItem implements Item{
    id?: number;
    name: string;
    description: string;
    fullDescription?: string;
    images: Array<Image>;
    constructor(name: string, description: string, fullDescription?: string){
        this.name = name;
        this.description = description;
        this.fullDescription = fullDescription;
        this.images = [];
    };
};