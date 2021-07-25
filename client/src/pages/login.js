import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// redux
import { setLogin } from '../redux/actions/authenticationActions'
import { popupMessage } from '../redux/actions/statusActions'
// hooks
import useForm from "../hooks/useForm"
import { signinParam } from "../helpers/validationParam"
// components
import { Form } from "../compononets"
import FixedScreen from '../screens/fixedScreen'
// icons
import scene from "../assests/log.jpg"
// styled-components
import { Wrapper, InputWrapper, LoginWrapper, LoginForm, Overlay, ErrorWrapper } from "./styles/loginStyles"

const initialValues = {
    email: '',
    password: '',
};

export default function Register() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { loading, error, userInfo } = useSelector(state => state.userLogin);

    const { values, setValues, touched, errors, handleBlur, handleChange, handleSubmit, isSubmitting } = useForm({ initialValues, onSubmit: (values) => handleAuth(values) }, signinParam)
    const { email, password } = values;

    // handle authentication
    const handleAuth = (values) => {
        dispatch(setLogin(values.email, values.password));
        setValues({ email: '', password: '' });
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/');
            dispatch(popupMessage(`Welcome home, ${userInfo.name}`));
        }
    }, [history, userInfo, dispatch]);

    if (loading) return <FixedScreen text="Loading" />
    return (
        <Wrapper>
            <LoginWrapper>
                <img src={scene} alt="pexel.com" />
                <Overlay />
                <LoginForm>
                    <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} buttonTag={"SUBMIT"}>
                        <h1>Sign in to explore love</h1>
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
                    </Form>
                    <h3>don't have an account yet?<Link to="/register">create one now</Link></h3>
                    {error && (
                        <ErrorWrapper>
                            {error}
                        </ErrorWrapper>
                    )}
                </LoginForm>
            </LoginWrapper>
        </Wrapper>
    )
}
