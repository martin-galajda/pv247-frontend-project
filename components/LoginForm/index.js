import { Form, FormInput, Container, LinkNavigation } from './styled'
import Link from 'next/link'
import propTypes from 'prop-types'
import { Field } from 'redux-form'

const LoginForm = ({ title, handleSubmit, pristine, submitting }) => (<Container>
    <Form onSubmit={handleSubmit}>
        <div>{title}</div>
        <FormInput>
            <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
            />
        </FormInput>
        <FormInput>
            <Field
                name="password"
                component="input"
                type="text"
                placeholder="password"
            />
        </FormInput>

        <FormInput>
            <button type="submit" disabled={pristine || submitting}>
                Submit
            </button>
        </FormInput>
    </Form>

    <LinkNavigation>
        <Link href="/"><a className="login"> Login</a></Link>
        <Link href="/register"><a className="register">Register</a></Link>
    </LinkNavigation>

</Container>)

LoginForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
    pristine: propTypes.bool.isRequired,
    submitting: propTypes.bool.isRequired,
    title: propTypes.string.isRequired,
}

export default LoginForm
