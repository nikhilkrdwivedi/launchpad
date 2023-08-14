/* eslint-disable no-undef */
function getBackendUrl(env = "") {
  if (env.toLowerCase().trim() === "local") {
    return "http://localhost:3020";
  }
  if (env.toLowerCase().trim() === "dev") {
    return "http://localhost:3020";
  }
  if (env.toLowerCase().trim() === "qa") {
    return "http://localhost:3020";
  }
  if (env.toLowerCase().trim() === "prod") {
    return "https://launchpad-api.whoisnikhil.com";
  }
  return "http://localhost:3020";
}

const BASE_URL = getBackendUrl(import.meta.env.VITE_ENV_NAME);

export default { BASE_URL };
