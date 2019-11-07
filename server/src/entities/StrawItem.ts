import { Image } from './Image';

export class StrawItem{
    id?: number;
    name: string;
    description: string;
    images: Array<Image>;
    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
        this.images = [];
    };
};