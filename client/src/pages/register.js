import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// redux
import { setRegister } from '../redux/actions/authenticationActions'
// hooks
import useForm from "../hooks/useForm"
import { signupParam } from "../helpers/validationParam"
// components
import { Form } from "../compononets"
import FixedScreen from '../screens/fixedScreen'
// logos
import scene from "../assests/reg.jpg"
// styled components
import { ErrorWrapper } from './styles/loginStyles'
import { Wrapper, InputWrapper, LoginWrapper, RegistrationForm, Overlay } from "./styles/registerStyles"

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export default function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading, userInfo, error } = useSelector(state => state.userRegister)
    const { values, setValues, touched, errors, handleBlur, handleChange, handleSubmit, isSubmitting } = useForm({ initialValues, onSubmit: (values) => handleAuth(values) }, signupParam)
    const { name, email, password, confirmPassword } = values;

    const handleAuth = (values) => {
        dispatch(setRegister(values.name, values.email, values.password));
        setValues({ name: '', email: '', password: '' })
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/login');
        }
    }, [userInfo, history])

    if (loading) return <FixedScreen text="Loading" />
    return (
        <Wrapper>
            <LoginWrapper>
                <img src={scene} alt="behance.com" />
                <Overlay />
                <RegistrationForm>
                    <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} buttonTag={"SUBMIT"}>
                        <h1>Create an account</h1>
                        <InputWrapper>
                            <Form.Variable
                                type="text"
                                isRequired={true}
                                name="name"
                                value={name || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.name || errors.name ? <Form.Error errorStatus={errors.name} /> : <div />}
                        </InputWrapper>
                        <InputWrapper>
                            <Form.Variable
                                type="text"
                                isRequired={true}
                                name="email"
                                value={email || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email || errors.email ? <Form.Error errorStatus={errors.email} /> : <div />}
                        </InputWrapper>
                        <InputWrapper>
                            <Form.Variable
                                type="password"
                                isRequired={true}
                                name="password"
                                value={password || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.password || errors.password ? <Form.Error errorStatus={errors.password} /> : null}
                        </InputWrapper>
                        <InputWrapper>
                            <Form.Variable
                                type="password"
                                isRequired={true}
                                name="confirmPassword"
                                value={confirmPassword || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.confirmPassword || errors.confirmPassword ? <Form.Error errorStatus={errors.confirmPassword} /> : <div />}
                        </InputWrapper>
                    </Form>
                    <h3>already have an account?<Link to="/login">sign in</Link></h3>
                    {error && (
                        <ErrorWrapper>{error}</ErrorWrapper>
                    )}
                </RegistrationForm>
            </LoginWrapper>
        </Wrapper>
    )
}
