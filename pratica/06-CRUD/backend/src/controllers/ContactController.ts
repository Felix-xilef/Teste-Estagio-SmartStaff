import { getRepository } from "typeorm";
import { Contact } from "../models/Contact";

export class ContactController {
    async insert(contacts: Contact[]) {
        await getRepository(Contact).save(contacts);

        return contacts;
    }
}
