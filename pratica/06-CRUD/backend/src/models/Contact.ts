import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Registry } from "./Registry";

@Entity()
export class Contact {

    @PrimaryColumn()
    id: number;

    @Column()
    broker: string;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(() => Registry, registry => registry.contacts)
    registry: Registry;
}
