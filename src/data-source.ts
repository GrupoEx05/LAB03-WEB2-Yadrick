import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Productos } from "./entity/Productos"
import { Categoria } from "./entity/Categoria"
import { DetalleFactura } from "./entity/DetalleFactura"
import { Proveedor } from "./entity/Proveedor"
import { Vendedor } from "./entity/Vendedor"
import { Cliente } from "./entity/Cliente"
import { CabeceraFactura } from "./entity/CabeceraFactura"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Yaguirret92",
    database: "ejemplodb",
    synchronize: true,
    logging: false,
    entities: [Productos, Categoria, DetalleFactura, Proveedor, Vendedor, Cliente, CabeceraFactura],
    migrations: [],
    subscribers: [],
});