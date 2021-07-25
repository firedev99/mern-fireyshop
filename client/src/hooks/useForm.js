import { useState, useEffect } from "react"

export default function useForm({ initialValues, onSubmit }, validate) {
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                onSubmit(values)
                setSubmitting(false);
            } else {
                setSubmitting(false);
            }
        }
    }, [errors, isSubmitting, onSubmit, values]);

    const handleChange = (event) => {
        const { type, name, value, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value
        setValues({
            ...values,
            [name]: newValue
        });
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        // set the targeted input field value to true on event onBlur()
        setTouched({ ...touched, [name]: true });
        const validationErrors = validate({ values });
        // merge errors object and new object with unique field
        let errorObjects = Object.assign(errors, { [name]: validationErrors[name] });
        setErrors(errorObjects);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate({ values });
        setErrors(validationErrors);
        setSubmitting(true);
    };


    return {
        values,
        setValues,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        handleBlur,
        touched
    }
};

