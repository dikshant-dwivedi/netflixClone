import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import { Form } from "../components"
import { FirebaseContext } from "../context/firebase"
import * as ROUTES from "../constants/routes"

export default function Signup() {
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)

  const [firstName, setFirstName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const isInvalid = password === "" || emailAddress === "" || firstName === ""

  const handleSignup = (event) => {
    event.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE)
          })
      })
      .catch((error) => {
        setError(error.message)
        setFirstName("")
        setEmailAddress("")
        setPassword("")
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input
              placeholder='First name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to='/signup'>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
