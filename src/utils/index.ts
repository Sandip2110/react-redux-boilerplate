// Ideally you shouldn't import anything in your util files.
// Functions which are serving a purpose that can be used for the entire projects can be added here
// An example has been provided below

export function isEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email)
}
