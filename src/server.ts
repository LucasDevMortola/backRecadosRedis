import Express,{Request,Response,NextFunction} from "express";
import cors from "cors";
import 'dotenv/config'
import Database from "./core/data/connection/Database";
import Routes from './features/recados/routes/routes'
const PORT = process.env.PORT

const app = Express()


//const userRoutes = new UserRoutes().init();



app.use(Express.json())
app.use(cors())

app.get('/',(req:Request,res:Response)=>{
    res.send("ok")
})
const recadosRoutes = new Routes().init();

app.use(recadosRoutes);


new Database()
	.openConnection()
	.then(() => app.listen(8080, () => console.log("Servidor Iniciado")));