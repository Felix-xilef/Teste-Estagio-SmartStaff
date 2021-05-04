import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Contact } from "./Contact";
import { Picture } from "./Picture";

@Entity()
export class Registry {

    @PrimaryColumn()
    id: string;

    @Column()
    budget: number;

    @OneToMany(() => Picture, picture => picture.registry)
    pictures: Picture[];

    @Column()
    age: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @Column()
    company: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    about: string;

    @CreateDateColumn()
    registered: Date;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @OneToMany(() => Contact, contact => contact.registry)
    contacts: Contact[];

    @Column()
    channel: string;
}
