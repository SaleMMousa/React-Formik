/* eslint-disable jsx-a11y/alt-text */
import { Formik } from 'formik';
import {string,object} from "yup"
import { StyleLinkLink, StyledButton, StyledField, StyledForm, StyledParagraph, StyledRdiv, Styledpage, Text } from '../styled.styled';


function Createaccount() {
    const schema = object({
        name: string().required(),
        email: string().required(),
        password : string().required(),
    })

    return (
    <Styledpage>
        <Formik
            initialValues = {{
                name : "",
                email:"",
                password:"",
            }}
            onSubmit ={(values)=>console.log(values.name,values.email, values.password)}
            validationSchema ={schema}
            >{({ errors, touched }) => 
                <StyledForm marginForm = "auto">
                    <Text className='extraStely' fontSize ="50" fontWeight ="bold">Create account</Text>
                    {console.log(errors, "errors")}
                    {console.log(touched, "touched")}
                    <StyledField type ="text" name="name" placeholder="Name"/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                    <StyledField type ="email" name="email" placeholder="Email"/>
                    {errors.email && touched.email ? <span>{errors.email}</span> : null}
                    <StyledField type ="password" name="password" placeholder="Password"/>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                    <StyledButton type="submit"  background ="black" color='white'>Create account</StyledButton>
                    <StyledParagraph>Already have an account?<StyleLinkLink to='/login'>Login</StyleLinkLink></StyledParagraph>
                </StyledForm>
            }
        </Formik>
        <StyledRdiv urlImag = {require( '../assets/Photo.png')}>
            <Text className='extraTowStely' marginText =" 100px auto 0" fontSize ="40" fontColor='White' fontWeight ='500'>We’re here to optimised your workflow</Text>
            <Text className='extraTowStely' marginText =" 20px auto 0" fontSize ="23" fontColor='White' fontWeight ='200'>Your docs, projects, notes and reminders. Together.</Text>
            <Text className='extraTowStely' marginText =" 300px auto 0" fontSize ="23" fontColor='White' fontWeight ='200'>Finally, all your work in one place.</Text>
        </StyledRdiv>
    </Styledpage>
    )
}


export default Createaccount