import { IsNotEmpty, IsNumber, IsPositive, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Categoria } from "./Categoria";
import { DetalleFactura } from "./DetalleFactura";
import { Proveedor } from "./Proveedor";

@Entity()
export class Productos {
    @PrimaryColumn()
    @IsNotEmpty({ message: 'Debe indicar el ID.' })
    id: number;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar el nombre del producto.' })
    nombre: string;

    @Column()
    @IsNotEmpty({ message: 'Debe indicar el precio.' })
    @IsNumber()
    precio: number;

    @Column()
    @IsPositive({ message: 'Debe indicar un valor positivo' })
    @IsNotEmpty({ message: 'Debe indicar el stock.' })
    stock: number;

    @IsNotEmpty({ message: 'Debe indicar la categoria.' })
    @ManyToOne(() => Categoria, categoria => categoria.Productos)
    categoria: Categoria;

    @IsNotEmpty({ message: 'Debe indicar el proveedor.' })
    @ManyToOne(() => Proveedor, proveedor => proveedor.productos)
    proveedor: Proveedor;

    @Column({ default: 1 })
    estado: boolean;

    @OneToMany(() => DetalleFactura, detalleFactura => detalleFactura.producto)
    detallesFactura: DetalleFactura[];
}








