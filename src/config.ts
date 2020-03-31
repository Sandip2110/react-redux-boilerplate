enum Env {
    LOCAL = "LOCAL",
    UAT = "UAT",
    PROD = "PROD",
}
enum WebUrl {
    LOCAL = "http://localhost:3000",
    UAT = " https://uat.xyz.com",
    PROD = " https://xyz.com",
}
enum ApiUrl {
    LOCAL = "http://localhost:9000",
    PROD = "https://api.xyz:9000",
    UAT = "https://uat.api.xyz:9000",
}
const processEnv = (process.env.REACT_APP_API_ENV === "PROD" || process.env.REACT_APP_API_ENV === "LOCAL") ? process.env.REACT_APP_API_ENV : "UAT";
const env: Env = Env[processEnv];
export const baseUrl = ApiUrl[env];
export const webUrl = WebUrl[env];