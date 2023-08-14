import axiosHelper from '@data/axiosHelper';
import ENV from '@environment';

const AUTHENTICATION_ENDPOINT = '/api/v1/authentications';

export function validateToken() {
    return axiosHelper(
        `${ENV.BASE_URL + AUTHENTICATION_ENDPOINT}/validate-token`,
        'GET',
        null,
        null,
    );
}
export function signIn(payload) {
    return axiosHelper(
        `${ENV.BASE_URL + AUTHENTICATION_ENDPOINT}/login`,
        'POST',
        null,
        payload,
    );
}
export function register(payload) {
    return axiosHelper(
        `${ENV.BASE_URL + AUTHENTICATION_ENDPOINT}/register`,
        'POST',
        null,
        payload,
    );
}
export function logout(body = {}) {
    return axiosHelper(
        `${ENV.BASE_URL + AUTHENTICATION_ENDPOINT}/logout`,
        'POST',
        null,
        body,
    );
}
export default { validateToken, signIn, logout, register };
