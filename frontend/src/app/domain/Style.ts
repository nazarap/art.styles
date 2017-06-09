import Subtype from './Subtype';

export default class Style {

    constructor(public name: string, public description: string, public subtypes: Array<Number, public images: Array<String>) {}

    toString() {
        return "Name: " + this.name + "; Description: " + this.description;
    }

}
