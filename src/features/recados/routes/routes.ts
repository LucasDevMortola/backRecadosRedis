import { Router } from 'express';

import RecadosController from '../controler/controlerRecados';

export default class Routes{

    public init(): Router {
        const routes = Router();

        const controller = new RecadosController();

        routes.get('/recados', controller.index);
        routes.get('/recados/:uid', controller.view);
        routes.post('/recados/inserir', controller.store);
        routes.put('/recados/alterar/:uid', controller.update);
        routes.delete('/recados/apagar/:uid', controller.destroy);
        
        return routes;
    }

}