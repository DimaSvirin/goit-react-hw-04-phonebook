import styled from 'styled-components';

export const SearchWrap = styled.div`
    margin: 0 auto;
    max-width: 400px;
    display: flex;
    gap: 10px;
`

export const Input = styled.input`
    background-color: transparent;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
    :focus {outline:none;
        border-color: #4f4dca;
        }
`

export const SearchLabel = styled.label`
    font-size: 20px;
    font-weight: 500;
`
