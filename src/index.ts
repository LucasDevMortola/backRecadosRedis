import Express,{Request,Response,NextFunction} from "express";
import cors from "cors";
import 'dotenv/config'

const port = process.env.PORT

const app = Express()


app.use(Express.json())
app.use(cors())

let i:number = 0

class Recado{
    id:number
    descricao:string
    detalhe:string

    constructor (descricao:string,detalhe:string){
        this.id = i;
        i++
        this.descricao = descricao;
        this.detalhe = detalhe;
    }
}

let listaRecados:Array<Recado> = [
    new Recado("Limpar a casa","tirar po"),
    new Recado("Alimentar caes","cuidado"),
    new Recado("devDash","padrao tema"),
    new Recado("dev footer","padrao footer")]

app.get("/recados", (req:Request,res:Response)=>{
    res.json(listaRecados)
    console.log (port);
})

app.post("/recados/inserir",(req:Request,res:Response)=>{
    const detalhe = req.body.detalhe;
    const descricao = req.body.descricao;

    console.log(detalhe);
    console.log(descricao);

    if (typeof detalhe != 'string' || typeof descricao != 'string' ) {
        res.status(400).send("Tipo deve ser string")
    }
    else if(detalhe == "" || descricao == ""){
        res.status(400).send("Valor vazio")
    }
    else{
        listaRecados.push(new Recado(descricao,detalhe));
        res.status(200).send(res.send(listaRecados))
    }
})

app.put("/recados/alterar/:id",(req:Request, res:Response)=>{
    const {descricao, detalhe} = req.body
    const {id} = req.params
    listaRecados.forEach((elem)=>{
        if (elem.id  == Number(id)) {
            elem.descricao = descricao;
            elem.detalhe = detalhe;
        }
    })
    res.send(listaRecados);
})

app.delete("/recados/apagar/:id",(req:Request,resp:Response)=>{
    const {id} = req.params

    let indice = listaRecados.findIndex((elment)=>{
        if (elment.id == Number(id)) {
            return elment;
        }
    })
    listaRecados.splice(indice,1);
    resp.send(listaRecados);
})

app.listen(port,()=>{
    console.log("Servidor executando na porta",port)
})

