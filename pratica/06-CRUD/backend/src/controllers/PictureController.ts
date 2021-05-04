import { getRepository } from "typeorm";
import { Picture } from "../models/Picture";

export class PictureController {
    async insert(pictures: Picture[]) {
        await getRepository(Picture).save(pictures);

        return pictures;
    }
}
