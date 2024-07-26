import {Router} from "express"
import productos from "./productos";

const routes= Router();

routes.use("/Productos", productos )
routes.use("/Categoria", productos )


export default routes;

