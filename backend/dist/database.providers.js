"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const create_user_1 = require("./user/entity/create.user");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'NEST001DATASOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'dbmysql',
                port: 3306,
                username: 'root',
                password: 'admin',
                database: 'todolist',
                entities: [create_user_1.User],
                synchronize: true,
                logging: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map