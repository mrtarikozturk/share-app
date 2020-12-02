export const errorHandler = (error => {

    if (error.code === "auth/user-not-found") {
        return "There is no user with this email"
    }
    if (error.code === "auth/email-already-in-use") {
        return "The email address is already in use.Please try with another email"
    }
    if (error.code === "auth/wrong-password") {
        return "Wrong Password!! Please try again"
    }
}); 