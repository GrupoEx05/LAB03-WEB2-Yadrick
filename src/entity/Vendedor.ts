import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CabeceraFactura } from "./CabeceraFactura";

@Entity()
export class Vendedor {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debe indicar el código del vendedor.' })
    codigo_vendedor: number;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar los nombres del vendedor.' })
    nombres_vendedor: string;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar los apellidos del vendedor.' })
    apellidos_vendedor: string;

    @Column({ length: 100, nullable: false })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar la dirección del vendedor.' })
    direccion_vendedor: string;

    @Column({ length: 15, nullable: false })
    @MaxLength(15, { message: 'Debe contener un máximo de 15 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar el teléfono del vendedor.' })
    telefono_vendedor: string;

    @Column({ length: 15, nullable: false })
    @MaxLength(15, { message: 'Debe contener un máximo de 15 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar el celular del vendedor.' })
    celular_vendedor: string;

    @OneToMany(() => CabeceraFactura, cabeceraFactura => cabeceraFactura.vendedor)
    cabecerasFactura: CabeceraFactura[];
}
