import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HumanModule } from './human/human.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'starter',
            entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        CatModule,
        HumanModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
