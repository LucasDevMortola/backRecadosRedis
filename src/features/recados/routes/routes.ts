import { Router } from 'express';

import RecadosController from '../presentation/controler/getAllRecados';
import CreateRecadosController from '../presentation/controler/createRecadosControler';
import GetAllRecados from '../presentation/controler/getAllRecados';
import DeleteRecadosController from '../presentation/controler/deleteRecadosController';
import UpdateRecadosController from '../presentation/controler/updateRecados.Controller';
import GetRecadosByUid from '../presentation/controler/getRecadosByUid';

export default class Routes{

    public init(): Router {
        const routes = Router();

        const controller = new RecadosController();

        routes.post('/recados', new CreateRecadosController().handle)
        routes.get('/recados', new GetAllRecados().handle)
        routes.delete('/recados/:uid',new DeleteRecadosController().handle)
        routes.put('/recados/:uid', new UpdateRecadosController().handle)
        routes.get('/recados/:uid', new GetRecadosByUid().handle)

        return routes;
    }

}