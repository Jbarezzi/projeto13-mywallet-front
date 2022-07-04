import styled from "styled-components";
import { Link } from "react-router-dom";

export default function AutenticationPages(props) {
    return (
        <Container>
            <h1>My Wallet</h1>
            <Forms onSubmit={props.onSubmit} load={props.load}>
                {props.children}
            </Forms>
            <Link to={props.link}><p>{props.p}</p></Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 160px;
    h1 {
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #FFFFFF;
    }
    p {
        color: #FFFFFF;
        font-size: 15px;
        text-decoration: none;
        font-weight: 700;
    }
    `;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 36px;
    input {
        background-color: ${props => props.load ? "#F2F2F2" : "#FFFFFF"};
        width: 326px;
        height: 58px;
        border-radius: 5px;
        margin-bottom: 13px;
        padding-left: 15px;
        border: none;
        ::placeholder {
            color:  ${props => props.load ? "#AFAFAF" : "#000000"};
            font-size: 20px;
            opacity: 1;
        }
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 326px;
        height: 46px;
        border-radius: 5px;
        background-color: #A328D6;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        opacity: ${props => props.load ? "0.7" : "1"};
    }
    `;