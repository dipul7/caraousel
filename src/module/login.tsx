import React, { useEffect, useState } from 'react'
import { Caraousel } from './carousel'
import { ButtonLogin, LoginWrapper } from './style'

export const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const message = localStorage.getItem('user') && localStorage.getItem('pass')

  const submit = () => {
    if (user == 'admin' && password == 'admin') {
      localStorage.setItem('user', user)
      localStorage.setItem('pass', password)
      window.location.reload()
    }
  }
  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('pass')
    window.location.reload()
  }

  return (
    <>
      {message ? (
        <LoginWrapper>
          {' '}
          <ButtonLogin onClick={logout}>Logout </ButtonLogin>
        </LoginWrapper>
      ) : (
        <LoginWrapper>
          {' '}
          <input
            value={user}
            type='text'
            onChange={(e: any) => setUser(e.target.value)}
          />{' '}
          <input
            value={password}
            type='password'
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <ButtonLogin onClick={submit}>Login</ButtonLogin>
        </LoginWrapper>
      )}

      <Caraousel />
    </>
  )
}
