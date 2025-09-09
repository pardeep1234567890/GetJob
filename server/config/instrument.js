// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://9b63cccf8b4e27b72bbca49ff9bee1c9@o4509977161891840.ingest.us.sentry.io/4509977169100800",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});