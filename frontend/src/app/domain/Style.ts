import Subtype from './Subtype';
import ImageAbstract from './ImageAbstract';

export default class Style extends ImageAbstract {

    constructor(public name: string, public description: string, public subtypes: Array<Number>, public images: Array<string>) {
        super(images);
    }

    toString() {
        return "Name: " + this.name + "; Description: " + this.description;
    }

}
