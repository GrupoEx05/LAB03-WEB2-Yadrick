import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { CabeceraFactura } from "./CabeceraFactura";
import { Productos } from "./Productos";

@Entity()
export class DetalleFactura {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debe indicar el número de detalle de la factura.' })
    numero: number;

    @Column({ type: 'int', nullable: false })
    @IsNotEmpty({ message: 'Debe indicar la cantidad del producto.' })
    cantidad: number;

    @ManyToOne(() => CabeceraFactura, cabeceraFactura => cabeceraFactura.detallesFactura)
    cabeceraFactura: CabeceraFactura;

    @ManyToOne(() => Productos, producto => producto.detallesFactura)
    producto: Productos;
}
