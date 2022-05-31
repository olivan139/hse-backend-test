import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { CoursesModule } from './courses/courses.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ScheduleController } from './schedule/schedule.controller';
import { RolesModule } from './roles/roles.module';
import { User } from "./users/users.model";
import { AuthModule } from './auth/auth.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { Schedule } from "./schedule/schedule.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User, Role, UserRoles, Schedule],
        autoLoadModels: true
      }),
        UsersModule,
        AccountModule,
        AssignmentsModule,
        CoursesModule,
        ScheduleModule,
        RolesModule,
        AuthModule,
    ],
})
export class AppModule {}