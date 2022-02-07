import Express,{Request,Response,NextFunction} from "express";
import cors from "cors";
import 'dotenv/config'
import Database from "./core/infra/data/connection/Database";
import Routes from './features/recados/routes/routes'
import Redis from "./core/infra/data/connection/redis";
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

Promise.all([new Database().openConnection(), new Redis().openConnection()])
  .then(() => {
    app.listen(PORT ?? 8000, () => console.log("Servidor Iniciado"))
  })
  .catch((err) => {
    console.log(err);
  });