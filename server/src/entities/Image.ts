export class Image{
    path: string;
    previewPath: string | null;
    constructor(path: string, previewPath: string | null = null){
        this.path = path;
        this.previewPath = previewPath;
    }
}