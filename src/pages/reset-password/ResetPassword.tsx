import useInput from "../../hooks/useInput.tsx";
import AuthService from "../../services/AuthService.ts";

export default function ResetPassword() {
    const email = useInput('');

    async function resetPasswordHandler() {
        try {
            const response = await AuthService.resetPassword(email.value);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>ResetPassword</h1>
            <input {...email} placeholder='Email' />
            <button onClick={resetPasswordHandler}>Submit</button>
        </div>
    )
}