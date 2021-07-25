export default function validate({ name, email }) {
    let errors = {};

    if (!name) {
        errors.name = "name required"
    }

    if (!email) {
        errors.email = "email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = "invalid email address";
    } else if (/[A-Z]/.test(email)) {
        errors.email = "email can't contain capital characters"
    }

    return errors;
}