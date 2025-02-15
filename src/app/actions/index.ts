'use server'
import  { signIn, signOut } from "@/auth"
export async function doLogout() {
    await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData) {
    try {
        const response = await signIn("credentials", {
            
            //username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });
        return response;
    } catch(err) {
        //throw new Error(err);
        throw err;
    }
}