import { styled } from "styled-components";

export const ListButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 53px;
    width: 186px;
    border: 1px solid #808080;
    padding: 10px 15px;
    background-color: transparent;
    color: #fff;
    font-size: 1.2em;
    font-family: 500;
    transition: .2s;

    &:hover {
        background-color: #fff;
        border: none;
        color: black;
    }
`