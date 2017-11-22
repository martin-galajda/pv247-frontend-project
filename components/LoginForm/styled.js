import styled from 'styled-components'

export const Container = styled.div`
    margin-left: 20%;
    margin-right: 20%;

    display: flex;
    flex-direction: column;

    border: 1px solid #ddd;
    padding-bottom: 30px;
    padding-top: 30px;

`

export const Form = styled.form`
    margin: auto;
    width: 80%;
    height: 80%;
    text-align: center;
`

export const FormInput = styled.div`
    margin: 10px 20%;

    input {
        width: 100%;
        font-size: 28px;
    }

    label {
        text-align: left;
    }

    button {
        padding: 10px;
        font-size: 28px;
        width: 100%;
    }
`

export const LinkNavigation = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 80%;

    a {
        width: 50%;
        padding: 35px;
        text-decoration: none;
        border: 1px solid #ddd;
    }

    a.register {
        margin-right: 20%;
    }

    a.login {
        margin-left: 20%;
    }

`