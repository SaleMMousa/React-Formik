import styled from "styled-components";
import {Field,Form} from 'formik';
import { Link } from "react-router-dom";


export const Text = styled.h1`
    font-size: ${props => props.fontSize }px;
    font-weight: ${props => props.fontWeight };
    color: ${props => props.fontColor };
    margin: ${props => props.marginText };
    &.extraStely{
        text-shadow: 0 3px 8px gray;
        margin-bottom: 70px;
    }&.extraTowStely{
        width: 70%;
    }&.para{
        width: 60%;
        text-align: start;
    }
`
export const Styledpage = styled.div`
    display: flex;
    justify-content: space-between;
`
export const StyledRdiv= styled.div`
    width: 50%;
    background-size: 100% 100%;
    height: 800px;
    background-image: url(${(props => props.urlImag)});
`

export const StyledForm = styled(Form)`
    text-align: center;
    width: 50%;
    margin: ${props => props.marginForm };
`

export const StyledField = styled(Field)`
    width: 60%;
    outline: none;
    display: block;
    margin: 30px auto;
    padding: 20px 15px;
    border: #999999 1px solid;
    border-radius: 8px;
`

export const StyledButton = styled.button`
    width: 60%;
    background-color:${props => props.background };
    color: ${props => props.color};
    outline: none;
    display: block;
    margin: 30px auto 10px;
    padding: 20px 15px ;
    border: black 1px solid;
    border-radius: 8px;
    font-size: 16px;
`

export const StyledParagraph = styled.p`
    text-align: start;
    width: 60%;
    font-size: 12px;
    display: block;
    margin: 0 auto;
    color: #9a9a9a;
`
export const StyleLinkLink = styled(Link)`
    font-weight: 500;
    color: black;
    &.newclass{
        font-size: 14px;
        font-weight: bold;
        position: absolute;
        margin-top: 250px ;
        left:130px;
        text-decoration: none;
    }
`
export const Divbody= styled.div`
    background-color: dimgray;
    text-align: center;
    width: 100%;
    padding: 100px;

`
export const SpanStyled= styled.span`
    font-weight: 900;
    font-size: 16px;
    align-items: center;


`
