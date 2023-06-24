import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2.5rem;
    border: 1px solid black;
    border-radius: 10px;
    max-width: 200px;
    gap: 10px;
    background-color: #fafafa;
`

export const Label = styled.label`
    font-size: .85rem;
    text-transform: uppercase;
    color: #272626;
`

export const Input = styled.input`
    background-color: transparent;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
    transition: all 250ms linear;
    :focus {outline:none;
        border-color: #4f4dca;
    }
`

export const Button = styled.button`
    cursor: pointer;
    padding: .5rem 2.5rem;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    background-color: grey;
    border-radius: 10px;
    border: none;
    border-radius: remy(35px);
    transition: background-color 250ms linear;
        :focus,
        :hover {background-color: #4f4dca;}

`