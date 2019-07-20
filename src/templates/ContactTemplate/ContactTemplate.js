/* eslint react/prop-types: 0 */
import React, { useState } from 'react'
import Section from 'components/Section/Section'
import TitleSection from 'components/TitleSection/TitleSection'
import styled from 'styled-components'
import Button from 'components/Button/Button'
import { P } from 'components/Typography/Typography'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const StyledSection = styled(Section)`
  ${({ theme }) => theme.mq.desktop} {
    min-height: 60vh;
    align-items: center;
  }
`

const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 80px 12.5vw;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
    min-height: 60vh;
    flex-wrap: wrap;
    padding: 0 12.5vw;
  }

  ${({ theme }) => theme.mq.huge} {
    padding: 0 25vw;
  }
`

const StyledFlexItem = styled.div`
  position: relative;
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    height: 300px;
    padding-right: 80px;
  }
  ${({ theme }) => theme.mq.huge} {
    max-width: 750px;
  }
`

const StyledFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;

  :last-of-type {
    margin-bottom: 48px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 78px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 64px 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  top: 20px;
  left: 0;
  pointer-events: none;
  color: ${({ theme }) => theme.darkGray};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  transform-origin: left top;
  transform: ${({ filled }) =>
    filled ? `translateY(-10px) scale(0.9)` : 'none'};
  transition: transform 200ms ease-out,
    color ${({ theme }) => theme.themeTransition};

  :focus,
  :active {
    background: transparent;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.body2};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.body2} * 1.4);
    transform: ${({ filled }) =>
      filled ? `translateY(-20px) scale(0.9)` : 'none'};
  }
`

const StyledField = styled(Field)`
  position: relative;
  outline: none;
  border: none;
  resize: none;
  width: 100%;
  height: ${({ textarea }) => (textarea ? '175px' : '56px')};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.brand : theme.brand3)};
  background: transparent;
  padding-top: 32px;
  transition: border 200ms ease-out, color 200ms ease-out;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }

  ${({ theme }) => theme.mq.huge} {
    padding-bottom: 12px;
    font-size: calc(${({ theme }) => theme.font.size.desktop.body} * 1.4);
  }
`

const StyledButton = styled(Button)`
  position: relative;
  ${({ theme }) => theme.mq.desktop} {
    right: 80px;
  }
`

const ErrorMessage = styled(P)`
  display: block;
  position: absolute;
  bottom: -44px;
  left: 0;
  color: ${({ theme }) => theme.brand};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
`

const StatusMessage = styled(P)`
  display: block;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme, sent }) => (sent ? theme.brand3 : theme.brand)};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
`

const StyledH3 = styled.h3`
  position: relative;
  left: 12.5vw;
  top: 64px;
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.mobile.h3};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  color: ${({ theme }) => theme.text};
  transition: color ${({ theme }) => theme.themeTransition};

  ${({ theme }) => theme.mq.desktop} {
    top: 20vh;
    font-size: ${({ theme }) => theme.font.size.desktop.h3};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.mobile.h3} * 1.4);
    left: 25vw;
  }
`

const ContactTemplateMarkup = ({
  errors,
  touched,
  isSubmitting,
  handleChange,
  handleBlur,
  handleReset,
  handleSubmit,
  status,
}) => {
  const [nameField, setNameField] = useState(false)
  const [emailField, setEmailField] = useState(false)
  const [messageField, setMessageField] = useState(false)

  const handleFieldBlur = e => {
    handleBlur(e)
    if (e.target.name === 'name' && e.target.value == '') {
      setNameField(false)
    }
    if (e.target.name === 'email' && e.target.value == '') {
      setEmailField(false)
    }
    if (e.target.name === 'message' && e.target.value == '') {
      setMessageField(false)
    }
  }

  const handleChangeFiled = e => {
    handleChange(e)
    if (e.target.name === 'name' && e.target.value !== '') {
      setNameField(true)
    }
    if (e.target.name === 'email' && e.target.value !== '') {
      setEmailField(true)
    }
    if (e.target.name === 'message' && e.target.value !== '') {
      setMessageField(true)
    }
  }

  const handleFieldSubmit = e => {
    handleSubmit(e)
    setNameField(false)
    setEmailField(false)
    setMessageField(false)
  }

  return (
    <StyledForm
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={e => handleFieldSubmit(e)}
      onReset={handleReset}
    >
      <StyledFlexItem>
        <StyledFieldWrapper>
          <StyledLabel filled={nameField ? 1 : 0} htmlFor="name">
            Your name
          </StyledLabel>
          <StyledField
            type="text"
            name="name"
            onChange={e => handleChangeFiled(e)}
            onBlur={e => handleFieldBlur(e)}
            filled={nameField ? 1 : 0}
            error={errors.name && touched.name ? 1 : 0}
          />
          {touched.name && errors.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
        </StyledFieldWrapper>
        <StyledFieldWrapper>
          <StyledLabel filled={emailField ? 1 : 0} htmlFor="email">
            Your email
          </StyledLabel>
          <StyledField
            type="email"
            name="email"
            onChange={e => handleChangeFiled(e)}
            onBlur={e => handleFieldBlur(e)}
            filled={emailField ? 1 : 0}
            error={errors.email && touched.email ? 1 : 0}
          />
          {touched.email && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
        </StyledFieldWrapper>
      </StyledFlexItem>
      <StyledFlexItem>
        <StyledFieldWrapper>
          <StyledLabel
            filled={messageField ? 1 : 0}
            textareaLabel
            htmlFor="message"
          >
            Your message
          </StyledLabel>
          <StyledField
            textarea="true"
            component="textarea"
            name="message"
            onChange={e => handleChangeFiled(e)}
            onBlur={e => handleFieldBlur(e)}
            filled={messageField ? 1 : 0}
            error={errors.message && touched.message ? 1 : 0}
          />
          {touched.message && errors.message && (
            <ErrorMessage>{errors.message}</ErrorMessage>
          )}
        </StyledFieldWrapper>
      </StyledFlexItem>
      <StyledButton type="submit" disabled={isSubmitting}>
        send your message
      </StyledButton>
      {status && status.msg && (
        <StatusMessage sent={status.success ? 1 : 0}>
          {status.msg}
        </StatusMessage>
      )}
    </StyledForm>
  )
}

const FormikTemplate = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      name: name || '',
      email: email || '',
      message: message || '',
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string('Enter your name').required('Name is required'),
    email: Yup.string('Enter your email')
      .email('Email is not valid')
      .required('Email is required'),
    message: Yup.string('Enter your message').required('Message is required'),
  }),

  handleSubmit(values, { setSubmitting, setErrors, setStatus, resetForm }) {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...values,
      }),
    })
      .then(() => {
        setSubmitting(false)
        resetForm()
        setStatus({
          success: true,
          msg: 'Your message was succesfully sent, thank you!',
        })
      })
      .catch(error => {
        setErrors(error)
        setSubmitting(false)
        setStatus({
          success: false,
          msg: 'Something went wrong, please try again later',
        })
      })
  },
})(ContactTemplateMarkup)

const ContactTemplate = () => (
  <StyledSection id="contact">
    <TitleSection>Stay in touch</TitleSection>
    <StyledH3>Feel free to contact me</StyledH3>
    <FormikTemplate />
  </StyledSection>
)

export default ContactTemplate
