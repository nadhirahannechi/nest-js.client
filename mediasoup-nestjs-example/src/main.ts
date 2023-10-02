import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import config from 'config';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import fs from 'fs';
//import https from 'https';
//import http from 'http';
import { AppModule } from './app.module';

const appSettings = config.get<IAppSettings>('APP_SETTINGS');

async function bootstrap() {
const server = express();
const httpsOptions = {
  key: fs.readFileSync(appSettings.sslKey),
  cert: fs.readFileSync(appSettings.sslCrt),
};

//console.log(httpsOptions.key);
//const serv =new ExpressAdapter(server)
//const app = await NestFactory.create(AppModule);
const app = await NestFactory.create(AppModule,new ExpressAdapter(server),{httpsOptions});
// console.log(app);
  app.use(helmet());
  app.use(cookieParser());
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

app.useWebSocketAdapter(new IoAdapter(app));

  const options = new DocumentBuilder()
    .setTitle('NestJS Mediasoup Example')
    .setSchemes(appSettings.swaggerScheme)
    .setDescription('The NestJS Mediasoup Example description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

await app.init();
//https.createServer(httpsOptions,server).listen(appSettings.wssPort);
//http.createServer(server).listen(3000);
//app.useWebSocketAdapter(new IoAdapter(app));
//await app.init();
await app.listen(appSettings.wssPort);
//test nadhira

}
bootstrap();
