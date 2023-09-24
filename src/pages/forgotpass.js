/* eslint-disable jsx-a11y/alt-text */
import { Formik } from 'formik';
import {string,object} from "yup"
import { SpanStyled, StyleLinkLink, StyledButton, StyledField, StyledForm, StyledRdiv, Styledpage, Text } from '../styled.styled';


function ForgotPass() {
    const schema = object({
        name: string().required(),
        email: string().required(),
        password : string().required(),
    })

    return (
    <Styledpage>
        <Formik
            initialValues = {{
                email:"",
            }}
            onSubmit ={(values)=>console.log(values.name,values.email, values.password)}
            validationSchema ={schema}
            >{({ errors, touched }) => 
                <>
                    <StyledForm marginForm = "70px auto">
                        <Text className='extraTowStely' fontSize ="40" fontWeight ="600" marginText ="50px auto">Forgot password?</Text>
                        <Text className='para' fontSize ="14" fontWeight ="800" marginText ="auto">Enter the email address you used when you joined and we’ll send you code to reset your password.</Text>                    
                        {console.log(errors, "errors")}
                        {console.log(touched, "touched")}
                        <StyledField type ="email" name="email" placeholder="Email"/>
                        {errors.email && touched.email ? <span>{errors.email}</span> : null}
                        <StyledButton type="submit"  background ="black" color='white'>Continue</StyledButton>
                        <StyleLinkLink className='newclass' to='/login'>
                            <SpanStyled>{"<"}</SpanStyled> 
                            <SpanStyled>{"<"}</SpanStyled> 
                            <SpanStyled>{"< "}</SpanStyled> 
                            Back
                        </StyleLinkLink>
                    </StyledForm>
                        
                </> 
            }
        </Formik>
        <StyledRdiv urlImag = {require( '../assets/Photo2.png')}>
            <Text className='extraTowStely' marginText =" 100px auto 0" fontSize ="40" fontColor='White' fontWeight ='500'>We’re here to optimised your workflow</Text>
            <Text className='extraTowStely' marginText =" 20px auto 0" fontSize ="23" fontColor='White' fontWeight ='200'>Your docs, projects, notes and reminders. Together.</Text>
            <Text className='extraTowStely' marginText =" 300px auto 0" fontSize ="23" fontColor='White' fontWeight ='200'>Finally, all your work in one place.</Text>
        </StyledRdiv>
        
    </Styledpage>
    )
}


export default ForgotPass