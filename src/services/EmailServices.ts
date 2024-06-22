export class EmailServices {
    public static contactUs(name: string, email: string, phoneNumber: string, message: string): void {
        try {
            if(!name || !email || !phoneNumber || !message){
              return console.log('Please fill all the fields');
            }

            const body = {
                name,
                email,
                phone_number: phoneNumber,
                message
            }

            console.log('Email sent successfully', body);
        } catch (e) {
            console.error(e);
        }
    }
}