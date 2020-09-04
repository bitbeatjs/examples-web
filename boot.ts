import {
  registerBulk
} from '@bitbeat/core';
import {
  WebServer,
  WebServerConfig,
  Documentation
} from '@bitbeat/web';
import fastifyStatic from 'fastify-static';
import { join } from 'path';

export default async () => {
  const webConfig = new WebServerConfig();
  const webServer = new WebServer();

  // enable the full logs for each request
  webConfig.default.options.disableRequestLogging = false;

  // this should be always turned on to enable any versioning of your actions
  webConfig.default.useVersioning = true;

  // by default this is 'api' but you can change it was you need it
  webConfig.default.pathForActions = 'actions';

  // this will overwrite the useVersioning property
  // by default this is false to enable access in browser by using e.g. http://127.0.0.1:8080/api/v1/myAction
  // now you can access it via http://127.0.0.1:8080/api/myAction and add the version in the header like 'Accept-Version': '1.x'
  // for more details see fastify versioning
  webConfig.default.useHeaderVersioning = true;

  // TODO: next release will fix this any error
  // add your config
  (webConfig.default as any).static = {
      root: join(__dirname, 'public'),
  };

  // TODO: next release will fix this any error
  // add some of your fastify packages after the default => also possible before
  (webServer as any).postRegister = (runtime: any, config: WebServerConfig | undefined): void => {
      runtime.register(fastifyStatic, config?.value.static);
      webServer.debug(`Registered fastify static.`);
  };

  await registerBulk(
    new Set([{
        instance: webConfig,
      },
      {
        instance: webServer,
      },
      {
        instance: Documentation,
        createInstance: true,
      }
    ])
  );
};