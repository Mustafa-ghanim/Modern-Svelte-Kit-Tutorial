import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://c17b79e124f8995b5ccac8deb3746a72@o102404.ingest.us.sentry.io/4510314534273024',

  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});