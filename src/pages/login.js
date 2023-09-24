/* eslint-disable jsx-a11y/alt-text */
import { Formik } from 'formik';
import {string,object} from "yup"
import { StyleLinkLink, StyledButton, StyledField, StyledForm, StyledParagraph, StyledRdiv, Styledpage, Text } from '../styled.styled';

const schema = object({
    name: string().required(),
    email: string().required(),
    password : string().required(),
})

function Login() {
    return (
        <Styledpage>
        <Formik
            initialValues = {{
                email:"",
                password:"",
            }}
            onSubmit ={(values)=>console.log(values.name,values.email, values.password)}
            validationSchema ={schema}
            >{({ errors, touched }) => 
                <StyledForm marginForm = "auto">
                    <Text className='extraTowStely' fontSize ="40" fontWeight ="600" marginText ="50px auto">Welcome back</Text>
                    {console.log(errors, "errors")}
                    {console.log(touched, "touched")}
                    <StyledField type ="email" name="email" placeholder="Email"/>
                    {errors.email && touched.email ? <span>{errors.email}</span> : null}
                    <StyledField type ="password" name="password" placeholder="Password"/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                    <StyledParagraph><StyleLinkLink to='/forgotpass'>Forgot password?</StyleLinkLink></StyledParagraph>
                    <StyledButton type="submit" background ="black" color='white'>Log in</StyledButton>
                    <StyledParagraph>Don’t have an account?<StyleLinkLink to='/'>Sign up</StyleLinkLink></StyledParagraph>
                    <StyledButton type="submit" background ="black" color='white'>Log in with Apple</StyledButton>
                    <StyledButton type="submit"  background ="white" color='black'>Log in with Google</StyledButton>
                </StyledForm>
            }
        </Formik>
        <StyledRdiv urlImag = {require( '../../src/assets/Photo1.png')}>
            <Text className='extraTowStely' marginText = "100px auto 0" fontSize ="40" fontColor='White' fontWeight ='500'>We’re here to optimised your workflow</Text>
            <Text className='extraTowStely' marginText =" 20px auto 0" fontSize ="23" fontColor='White' fontWeight ='200'>Your docs, projects, notes and reminders. Together.</Text>
            <Text className='extraTowStely' marginText =" 300px auto 0" fontSize ="23" fontColor='White' fontWeight ='200'>Finally, all your work in one place.</Text>
        </StyledRdiv>
    </Styledpage>
    )
}



export default Login