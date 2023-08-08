import {useState} from 'react'
import {
  BgContainer,
  PasswordContainer,
  PasswordHeading,
  PasswordDescription,
  InputEl,
  WarningMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, changePassword] = useState('')

  const updatePassword = event => {
    changePassword(event.target.value)
  }

  const showWarning = password.length < 8

  return (
    <BgContainer>
      <PasswordContainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <PasswordDescription>
          Check how strong and secure is your password
        </PasswordDescription>
        <InputEl type="password" onChange={updatePassword} value={password} />
        {showWarning && (
          <WarningMsg>Your password must be at least 8 characters</WarningMsg>
        )}
      </PasswordContainer>
    </BgContainer>
  )
}

export default PasswordValidator
