import styled from "styled-components";

export const Contact = styled.li`
    text-align: center;
    border: 1px solid black;
    padding: 14px;
    border-radius: 5px;
`

export const DeleteBtn = styled.button`
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
        :hover {background-color: red;}
`

export const Name = styled.p`
    font-size: 18px;
    font-weight: 500;
`