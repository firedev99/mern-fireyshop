export const signupParam = ({ values }) => {
    let errors = {};

    if (!values.name) {
        errors.name = "name required"
    }

    if (!values.email) {
        errors.email = "email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "invalid email address";
    } else if (/[A-Z]/.test(values.email)) {
        errors.email = "email can't contain capital characters"
    }

    if (!values.password) {
        errors.password = "password required";
    } else if (values.password.length < 8) {
        errors.password = "password must be at least 8 characters";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "confirm password is required"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "passwords doesn't match"
    }

    return errors;
}

export const signinParam = ({ values }) => {
    let errors = {};

    if (!values.email) {
        errors.email = "email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "invalid email address";
    } else if (/[A-Z]/.test(values.email)) {
        errors.email = "email can't contain capital characters"
    }

    if (!values.password) {
        errors.password = "password required";
    } else if (values.password.length < 8) {
        errors.password = "password must be at least 8 characters";
    }

    return errors;
};


export const createProductValidation = ({ values }) => {
    let errors = {};

    if (!values.name) {
        errors.name = "name required";
    }
    if (!values.price) {
        errors.price = "price required";
    }
    if (!values.imageSrc) {
        errors.imageSrc = "main image src required";
    }
    if (values.sideImagesSrc === 0) {
        errors.sideImagesSrc = "sideImagesSrc required";
    }
    if (!values.colors === 0) {
        errors.colors = "name required";
    }
    if (!values.sizes === 0) {
        errors.sizes = "sizes required";
    }
    if (!values.vendorName) {
        errors.vendorName = "vendorName required";
    }
    if (!values.description) {
        errors.description = "description required";
    }
    if (!values.features === 0) {
        errors.features = "features required";
    }
    if (!values.category) {
        errors.category = "category required";
    }
    if (!values.gender) {
        errors.gender = "gender required";
    }
    if (!values.rating) {
        errors.rating = "rating required";
    }
    if (!values.countInStock) {
        errors.countInStock = "stock number required";
    }
    return errors;
}

export const updateProductValidation = ({ values }) => {
    let errors = {};

    return errors;
}