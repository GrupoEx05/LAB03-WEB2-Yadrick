import { IsNotEmpty, IsNumber, MaxLength } from "class-validator";
import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { CabeceraFactura } from "./CabeceraFactura";

@Entity()
export class Cliente {
    @PrimaryColumn()
    @IsNotEmpty({ message: 'Debe indicar el RUC del cliente.' })
    ruc_cliente: string;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar los nombres del cliente.' })
    nombres_cliente: string;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar los apellidos del cliente.' })
    apellidos_cliente: string;

    @Column({ length: 100, nullable: false })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar la dirección del cliente.' })
    direccion_cliente: string;

    @Column({ length: 15, nullable: false })
    @MaxLength(15, { message: 'Debe contener un máximo de 15 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar el teléfono del cliente.' })
    telefono_cliente: string;

    @OneToMany(() => CabeceraFactura, cabeceraFactura => cabeceraFactura.cliente)
    cabecerasFactura: CabeceraFactura[];
}
