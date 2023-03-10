import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .button-container {
    display: flex;
  }

  .button {
    background: #416fec;
    color: #fff;
    width: 50px;
    text-align: center;
    padding: 10px 20px;
    margin: 10px;
    user-select: none;
    cursor: pointer;
    border-radius: 20px;
  }

  .button-2-container {
    display: flex;
  }

  .button-2 {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background: #6690ad;
    margin: 6px;
    cursor: pointer;
  }

  .active {
    background: #e36743;
  }
`
export const Frame = styled.div`
  border: 5px solid #b2ff59;
  width: 550px;
  overflow: hidden;
  border-radius: 20px;
  @media only screen and (max-width: 700px) {
    width: 350px;
  }
  @media only screen and (max-width: 400px) {
    width: 250px;
  }
`

export const Box = styled.div`
  box-sizing: border-box;
  width: 550px;
  height: 550px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 700px) {
    width: 350px;
    height: 350px;
  }
  @media only screen and (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
  img {
    width: 550px;
    height: 550px;
    @media only screen and (max-width: 700px) {
      width: 350px;
      height: 350px;
    }
    @media only screen and (max-width: 400px) {
      width: 250px;
      height: 250px;
    }
  }
`

export const BoxContainer = styled.div`
  display: flex;
`
export const Button = styled.div`
  display: flex;
`
export const ButtonLogin = styled.div<any>`
  background: #a71360;
  color: #fff;
  width: 80px;
  text-align: center;
  padding: 10px 20px;
  margin: 10px;
  user-select: none;
  cursor: pointer;
  border-radius: 20px;
  &:disabled {
    opacity: 0.5;
    cursor: none;

  }
`
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;

  input {
    margin: 15px;
    border-radius: 6px;
    padding: 8px;
  }
`
