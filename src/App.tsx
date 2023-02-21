import styled, { keyframes } from "styled-components"

const Wrapper = styled.div``
const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`

const Emoji = styled.span`
  font-size: 36px;
`
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: teal;
  animation: ${animation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 40px;
    }
  }
`

const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: teal;
`

const Btn = styled.button`
  background-color: yellow;
  color: red;
`

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😆</Emoji>
      </Box>
      <Input />
      <Input />
      <Input />
      <Input />
      <Btn>1231231232</Btn>
      <Btn as="a">sadlflsdkjfs</Btn>
    </Wrapper>
  )
}

export default App
