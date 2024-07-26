import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { DetalleFactura } from "./DetalleFactura";

@Entity()
export class CabeceraFactura {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debe indicar el número de la factura.' })
    numero: number;

    @Column({ type: 'date', nullable: false })
    @IsNotEmpty({ message: 'Debe indicar la fecha de la factura.' })
    fecha: Date;

    @ManyToOne(() => Cliente, cliente => cliente.cabecerasFactura)
    cliente: Cliente;

    @ManyToOne(() => Vendedor, vendedor => vendedor.cabecerasFactura)
    vendedor: Vendedor;

    @OneToMany(() => DetalleFactura, detalleFactura => detalleFactura.cabeceraFactura)
    detallesFactura: DetalleFactura[];
}
