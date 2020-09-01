import {
  registerBulk
} from '@bitbeat/core';
import {
  WebServer,
  WebServerConfig,
  Documentation
} from '@bitbeat/web';
export default async () => {
  const webConfig = new WebServerConfig();

  // enable the full logs for each request
  webConfig.default.options.disableRequestLogging = false;

  // this should be always turned on to enable any versioning of your actions
  webConfig.default.useVersioning = true;

  // by default this is 'api' but you can change it was you need it
  webConfig.default.pathForActions = 'actions';

  // this will overwrite the useVersioning property
  // by default this is false to enable access in browser by using e.g. http://127.0.0.1:8080/api/v1/myAction
  // now you can access it via http://127.0.0.1:8080/api/myAction and add the version in the header
  webConfig.default.useHeaderVersioning = true;

  await registerBulk(
    new Set([{
        instance: webConfig,
      },
      {
        instance: WebServer,
        createInstance: true,
      },
      {
        instance: Documentation,
        createInstance: true,
      }
    ])
  );
};