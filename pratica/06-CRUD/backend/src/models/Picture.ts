import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Registry } from "./Registry";

@Entity()
export class Picture {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(() => Registry, registry => registry.pictures)
    registry: Registry;
}
