import $api from "@utils/interceptors.ts";

export class EmailServices {
    public static contactUs(name: string, email: string, phoneNumber: string, message: string): void {
        try {
            const body = {
                name: name,
                email: email,
                phone_number: phoneNumber,
                message: message
            }

            $api.post('/api/emails/contact-us', body);
        } catch (e) {
            console.error(e);
        }
    }
}