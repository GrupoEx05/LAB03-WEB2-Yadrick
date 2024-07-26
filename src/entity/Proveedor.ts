import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Productos } from "./Productos";

@Entity()
export class Proveedor {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debe indicar el código del proveedor.' })
    codigo_proveedor: number;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar los nombres del proveedor.' })
    nombres_proveedor: string;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar los apellidos del proveedor.' })
    apellidos_proveedor: string;

    @Column({ length: 100, nullable: false })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar la dirección del proveedor.' })
    direccion_proveedor: string;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar la provincia del proveedor.' })
    provincia_proveedor: string;

    @Column({ length: 15, nullable: false })
    @MaxLength(15, { message: 'Debe contener un máximo de 15 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar el teléfono del proveedor.' })
    telefono_proveedor: string;

    @OneToMany(() => Productos, producto => producto.proveedor)
    productos: Productos[];
}
