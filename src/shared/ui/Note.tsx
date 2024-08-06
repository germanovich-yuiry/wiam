import styled from "styled-components"

interface INoteProps {
  lastName: string
  firstName: string
  loanAmount: number
  loanTerm: number
}

const NoteContainer = styled.h2`
  width: auto;
  padding: 28px;
  background-color: #ffd1dc;
  color: black;
  border-radius: 48px;
  text-align: center;
  font-family: "Regular";
  font-size: 18px;
  box-shadow: -2px -2px 16px 1px rgba(255, 255, 255, 0.3);
  .warning {
    font-weight: bold;
    color: orange;
  }
`

const Note: React.FC<INoteProps> = ({
  lastName,
  firstName,
  loanAmount,
  loanTerm,
}) => {
  return (
    <NoteContainer>
      {`Поздравляем, ${lastName} ${firstName}! Вам одобрена сумма `}
      <span className="warning">${loanAmount} </span>
      {`на ${loanTerm} дней`}
    </NoteContainer>
  )
}

export default Note
