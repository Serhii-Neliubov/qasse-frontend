import $api from "../utils/interceptors.ts";

export default class AuthService {
    static async login(email: string, password: string) {
        try {
            const body = {
                username: email,
                password: password,
                grant_type: "password",
                client_id: import.meta.env.VITE_CLIENT_ID,
                client_secret: import.meta.env.VITE_CLIENT_SECRET,
            }

            const res = await $api.post(`${import.meta.env.VITE_API_URL}/auth/token/`, body);

            if(!res.data.access_token || !res.data.refresh_token) {
                return console.error('No access tokens found')
            }

            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('refreshToken', res.data.refresh_token);
        } catch (error) {
            console.error(error)
        }
    }

    static async register(email: string, password: string) {
        try {
            const body = {
                email: email,
                password: password,
            }

            const res = await $api.post(`${import.meta.env.VITE_API_URL}/auth/register/`, body);

            if(!res.data.access_token || !res.data.refresh_token) {
                return console.error('No access tokens found')
            }

            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('refreshToken', res.data.refresh_token);
        } catch (error) {
            console.error(error)
        }
    }

    static async resetPassword(email: string) {
        try {
            const body = {
                email: email,
                redirect_url: '/'
            };

            const { data } = await $api.post(`${import.meta.env.VITE_API_URL}/auth/reset-password/`, body);

            return data.response;
        } catch (error) {
            console.error(error)
        }
    }
}
