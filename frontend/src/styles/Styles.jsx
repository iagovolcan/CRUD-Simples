import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% - 75px);    
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0px;
    margin-top: 25px;

    &:has(div:hover) div:not(:hover) {
        opacity: 0.7;
        scale: 0.98;
        transition: 1s;
    }

    h3 {
        margin: 20px;
        color: #535233;
        text-align: center;
    }

    .sucesso {
        background-color: lightgreen;
        color: green;
        padding: 10px;
        width: 280px;
        border-radius: 5px;
        margin: 20px;
        text-align: center;
    }

    .falha {
        background-color: salmon;
        color: red;
        padding: 10px;
        width: 280px;
        border-radius: 5px;
        margin: 20px;
        text-align: center;
    }
`

export const HeaderBar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    padding: 20px;
    background-color: #535233;
    filter: drop-shadow(10px 10px 10px #a5a36c);

    h1 {
        color: #fff;
        font-size: 2rem;
    }

    a {
        text-decoration: none;
        color: #fff;
        padding: 20px;
    }

    @media (max-width: 700px) {
        nav {
            display: none;
        }     
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px;
    width: 200px;
    height: 200px;
    border: 1px solid #a5a36c;
    background-color: #a5a36c;
    border-radius: 5px;
    filter: drop-shadow(5px 5px 5px #a5a36c);
    transition: 1.5s;

    &:hover {
        background-color: #535233;
    }

    img {
        width: 100px;
        height: auto;
    }

    h3 {
        color: #fff;
    }
`

export const Burger = styled.div`
    width: 40px;
    height: 40px;
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    span {
        width: 30px;
        height: 5px;
        border-radius: 5px;
        background-color: #fff;
        transition: 0.5s;
    }

    span:nth-child(1) {
        position: ${(props)=> props.active === true ? 'absolute' : ''};
        transform: ${(props) => props.active === true ? 'rotate(45deg)' : 'rotate(0deg)'};
    }

    span:nth-child(2) {
        width: ${(props) => props.active === true ? '0px' : '30px'};
    }

    span:nth-child(3) {
        position: ${(props)=> props.active === true ? 'absolute' : ''};
        transform: ${(props) => props.active === true ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }

    @media (max-width: 700px) {
        display: flex;
    }
`

export const FundoMenu = styled.div`
    display: ${(props)=> props.active === true ? '' : 'none'};
    position: absolute;
    top: 75px;
    left: 0px;
    width: 100%;
    height: calc(100% - 75px);
    background-color: #000;
    opacity: 0.9;
    z-index: 2;
`

export const NavBurger = styled.div`
    width: ${(props)=> props.active === true ? '250px' : '0px'};
    height: calc(100vh - 75px);
    position: absolute;
    right: 0px;
    top: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #535233;
    overflow: hidden;
    transition: 0.5s;
    z-index: 3;

    a {
        text-decoration: none;
        padding: 25px;
        color: #fff;
    }
`

export const Fieldset = styled.fieldset`
    border: 1px solid #535233;
    border-radius: 5px;
    padding: 15px;

    input, select {
        border: 1px solid #535233;
        border-radius: 5px;
        padding: 15px;
        width: 250px;
    }
`

export const Button = styled.button`
    border: 1px solid #535233;
    border-radius: 5px;
    padding: 15px;
    margin: 3px;
    margin-top: 15px;
    cursor: pointer;
`

export const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button:first-child {
        background-color: #90ee90;
    }

    button:last-child {
        background-color: #fa8072;
    }
`

export const DivScroll = styled.div`
    overflow: scroll;
    max-width: 100%;

    @media (min-width: 700px) {
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Table = styled.table`
    width: 95%;

    th {
        padding: 10px;
        background-color: #535233;
        color: #fff;
    }

    tr:nth-child(odd){
        background-color: #a5a36c;
    }

    tr:nth-child(even){
        background-color: #e0dfb1;
    }

    tr:hover {
        background-color: #535233;
        color: #fff;
    }

    td {
        padding: 5px;
    }

    td:nth-child(7) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        min-width: 200px;
    }

    button:nth-child(1){
        background-color: #90ee90;
    }

    button:nth-child(2){
        background-color: #fa8072;
    }
`

export const FundoModalEditar = styled.section`
    display: ${(props)=> props.activeModal === true ? 'block' : 'none'};
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.9;
`

export const FundoModal = styled.section`
    display: ${(props)=> props.activeModal === true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 25px;
`

export const ModalEditar = styled.section`
    display: ${(props)=> props.activeModal === true ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    top: 25px;

    h3 {
        text-align: center;
        color: #535233;
    }
    
    .sucesso {
        background-color: lightgreen;
        color: green;
        padding: 10px;
        width: 280px;
        border-radius: 5px;
        margin: 20px;
        text-align: center;
    }

    .falha {
        background-color: salmon;
        color: red;
        padding: 10px;
        width: 280px;
        border-radius: 5px;
        margin: 20px;
        text-align: center;
    }
`