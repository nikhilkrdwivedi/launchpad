/* eslint-disable no-undef */
function getBackendUrl(env = "") {
  //   const env = import.meta.env.VITE_ENV_NAME;
  console.log({ env });
  if (env.toLowerCase().trim() === "local") {
    return "http://localhost:2020";
  }
  if (env.toLowerCase().trim() === "dev") {
    return "http://localhost:2020";
  }
  if (env.toLowerCase().trim() === "qa") {
    return "http://localhost:2020";
  }
  if (env.toLowerCase().trim() === "prod") {
    return "http://localhost:2020";
  }
  return "http://localhost:2020";
}

const BASE_URL = getBackendUrl(import.meta.env.VITE_ENV_NAME);

export default { BASE_URL };
