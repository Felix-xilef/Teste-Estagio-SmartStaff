import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Registry } from "../models/Registry";
import { Picture } from "../models/Picture";
import { Contact } from "../models/Contact";
import { ContactController } from "./ContactController";
import { PictureController } from "./PictureController";

interface RegistryJson {
	_id: string,
	budget: string,
	pictures: [
		{
			url: string
		},
	],
	age: number,
	name: {
		first: string,
		last: string
	},
	company: string,
	email: string,
	phone: string,
	address: string,
	about: string,
	registered: Date,
	latitude: string,
	longitude: string,
	contactTimeline: [
		{
			id: number,
			broker: string,
			date: Date
		},
	],
	channel: string
}

var getRegistryFromJson = (registryJson: RegistryJson): Registry => {
    // Creating the registry
    const registry =  getRepository(Registry).create({
        id: registryJson._id,
        budget: Number(registryJson.budget.replace('$', '').replace(',', '')),
        pictures: [],
        age: registryJson.age,
        firstName: registryJson.name.first,
        lastName: registryJson.name.last,
        company: registryJson.company,
        email: registryJson.email,
        phone: registryJson.phone,
        address: registryJson.address,
        about: registryJson.about,
        registered: registryJson.registered,
        latitude: registryJson.latitude,
        longitude: registryJson.longitude,
        contacts: [],
        channel: registryJson.channel
    });

    // Creating the pictures from the urls registryJson
    registryJson.pictures.forEach((pictureData) => {
        registry.pictures.push(getRepository(Picture).create({
            url: pictureData.url,
            registry: registry
        }));
    })

    // Creating the contacts from the contactTimeline registryJson
    registryJson.contactTimeline.forEach((contactData) => {
        registry.contacts.push(getRepository(Contact).create({
            id: contactData.id,
            broker: contactData.broker,
            date: contactData.date,
            registry: registry
        }));
    })

    return registry;
}

var getJsonFromRegistry = (registry: Registry): RegistryJson => {
    // Creating the registry
    const registryJson: RegistryJson =  {
        _id: registry.id,
        budget: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(registry.budget),
        age: registry.age,
        pictures: [{url: undefined}],
        name: {
            first: registry.firstName,
            last: registry.lastName
        },
        company: registry.company,
        email: registry.email,
        phone: registry.phone,
        address: registry.address,
        about: registry.about,
        registered: registry.registered,
        latitude: registry.latitude,
        longitude: registry.longitude,
        contactTimeline: [{id:undefined, broker:undefined, date:undefined}],
        channel: registry.channel
    };

    // Creating the pictures from the urls registryJson
    registryJson.pictures.pop();
    registry.pictures.forEach((picture) => {
        registryJson.pictures.push({
            url: picture.url
        });
    })

    // Creating the contacts from the contactTimeline registryJson
    registryJson.contactTimeline.pop();
    registry.contacts.forEach((contact) => {
        registryJson.contactTimeline.push({
            id: contact.id,
            broker: contact.broker,
            date: contact.date
        });
    })

    return registryJson;
}

export class RegistryController {

    async insertUpdate(request: Request, response: Response) {
        const registry = getRegistryFromJson(request.body);

        // Saving Repository, Pictures and Contacts
        await getRepository(Registry).save(registry);

        const pictureController = new PictureController();
        pictureController.insert(registry.pictures);

        const contactController = new ContactController();
        contactController.insert(registry.contacts);

        // Response
        return response.status(201).json(getJsonFromRegistry(registry));
    }

    async delete(request: Request, response: Response) {
        const id = String(request.query.id);

        const registry = await getRepository(Registry).findOne(id, { relations: ['pictures', 'contacts'] });
        
        if (registry) {
            await getRepository(Registry).delete({ id: id });
        } else {
            return response.status(404).json({ "error": "registry not found" });
        }

        return response.status(200).json(getJsonFromRegistry(registry));
    }

    async select(request: Request, response: Response) {
        const id = String(request.query.id);
        const registry = await getRepository(Registry).findOne(id, { relations: ['pictures', 'contacts'] });
        
        if (!registry) return response.status(404).json({ "error": "registry not found" });
        else return response.status(200).json(getJsonFromRegistry(registry));
    }

    async selectAll(request: Request, response: Response) {
        const received = request.query;

        let registeredParam = received.registered;
        
        let orderBy: 'name' | 'budget' = String(received.orderBy);
        if (['name', 'budget'].indexOf(orderBy) == -1) orderBy = 'name';

        let direction: 'ASC' | 'DESC' = String(received.direction);
        if (['ASC', 'DESC'].indexOf(direction) == -1) direction = 'ASC';

        const queryOptions = {
            where: { registered: String(registeredParam) },
            relations: ['pictures', 'contacts'],
            order: (orderBy == 'name') ? {
                firstName: direction,
                lastName: direction
            } : {
                budget: direction
            }
        }

        const registries = await getRepository(Registry).find((registeredParam != undefined) ? queryOptions : {
            relations: queryOptions.relations,
            order: queryOptions.order
        });

        let registriesJson: RegistryJson[] = [];
        
        registries.forEach((registry) => {
            registriesJson.push(getJsonFromRegistry(registry));
        });
        
        return response.status(200).json(registriesJson);
    }
}
