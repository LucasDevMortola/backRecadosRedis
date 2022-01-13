//Configuração do banco de dados
require("dotenv").config();

const rootDir = process.env.NODE_ENV?.toLowerCase() === "production" ? "dist" : "src";
console.log(rootDir);

module.exports  = {
    type: 'postgres',
    // url: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    synchronize: false,
    logging: false,
    entities: [
       rootDir +'/core/data/database/entities/**/*'
    ],
    migrations : [
        rootDir+'/core/data/database/migrations/**/*'
    ],
    cli: {
        entitiesDir: 'src/core/data/database/entities',
        migrationsDir: 'src/core/data/database/migrations'
    },
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }  
}