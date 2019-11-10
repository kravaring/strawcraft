export interface Image{
    path: string;
    name?: string;
    previewPath?: string;
};

export class StrawImage implements Image{
    path: string;
    name?: string;
    previewPath?: string;
    constructor(path: string, name?: string, previewPath?: string){
        this.path = path;
        this.name = name;
        this.previewPath = previewPath;
    };
};