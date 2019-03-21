import { Connection, createConnection } from 'typeorm';
import { Logger }                       from './Logger';

export class DB {

    public static connection: Connection;

    public static async connect() {

        try {

            console.log(__dirname);

            if (this.connection) {

                Logger.log('Already connected to the database!');

            } else {

                this.connection = await createConnection({

                    type: "mysql",
                    host: process.env.MYSQL_HOST,
                    port: Number(process.env.MYSQL_PORT),
                    username: process.env.MYSQL_USER,
                    password: process.env.MYSQL_PASSWORD,
                    database: process.env.MYSQL_DATABASE,
                    entities: [ 'node_modules/@autobot/command-*/dist/DB/*.js' ],
                    synchronize: true,
                    logging: true

                });

                Logger.log('Connected to database');

            }

        } catch (e) {

            console.log(e);

        }

    }

}


