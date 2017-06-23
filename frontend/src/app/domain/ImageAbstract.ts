import { IMAGES_URL } from './../app.config'

export default class ImageAbstract {

    static getCImages = (images: Array<string>): Array<string> => images.map(image => IMAGES_URL + image);

    static getCImage = (imageUrl: string): string => IMAGES_URL + imageUrl;

    public getImages = (): Array<string> => this.images.map(image => IMAGES_URL + image);

    public getImage = (imageIndex: number): string => IMAGES_URL + this.images[imageIndex];

    constructor(public images: Array<string>) {}

}
