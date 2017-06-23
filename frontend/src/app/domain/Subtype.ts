import Type from './Type';
import ImageAbstract from './ImageAbstract';

export default class Subtype extends ImageAbstract {
    constructor(public id: number, public name: string, public description: string, public images: Array<string>, public type: number) {
        super(images);
    }
}
