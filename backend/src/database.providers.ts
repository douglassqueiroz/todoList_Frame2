
import { User } from './user/entities/user.entity';
import { DataSource } from 'src/user/node_modules/typeorm';

export const databaseProviders = [
  {
    provide: 'NEST001DATASOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'dbmysql',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'todolist',
        entities: [User],

        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];