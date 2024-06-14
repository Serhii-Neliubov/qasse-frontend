import $api from "../utils/interceptors.ts";
import {AuthResponse} from "@models/IAuthResponse.ts";

export default class AuthService {
    static async login(email: string, password: string) {
        try {
            const body = {
                email: email,
                password: password,
            }

            const res = await $api.post<AuthResponse>(`${import.meta.env.VITE_API_URL}/api/auth/login`, body);

            if(!res.data.accessToken) {
                return console.error('No access tokens found')
            }

            localStorage.setItem('token', res.data.accessToken);
            return res;
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

            const res = await $api.post<AuthResponse>(`${import.meta.env.VITE_API_URL}/api/auth/register`, body);

            if(!res.data.accessToken) {
                return console.error('No access tokens found')
            }

            localStorage.setItem('token', res.data.accessToken);
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
