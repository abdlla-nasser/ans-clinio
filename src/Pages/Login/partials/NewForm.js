import React from "react";
import Input from "./shadowInput";
import Link from "../../../components/Link";
import Flex from "../../../components/Flex";
import Text from "../../../components/Text";
import Button from "../../../components/Button/ButtonWithIcon";
import { colors } from "../../../utils/theme";
import { FormContainer } from "../utils/styled";
import { ErrorView } from "../../../Hocs/FieldShadow/styled";
import lockSvg from "../../../assets/svgs/lock.svg";
import userSvg from "../../../assets/svgs/user.svg";

const flexProps = { margin: "10px 0px", width: "415px" };

export const NewForm = ({ state, setState, labels, formError, isSubmittingLogin, handleSubmit }) => {
  const handleInputChange = (e) => {
    setState({...state, form: { ...state.form, [e.target.name]: e.target.value }})
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        image={userSvg}
        name="username"
        imageAlt="user"
        placeholder={labels.signintoyouraccount}
        autofocus
        error={state.errors.usernameError}
        value={state.form.username}
        autocomplete="email"
        onChange={handleInputChange}
      />
      <Input
        image={lockSvg}
        imageAlt="password"
        name="password"
        placeholder={labels.password}
        error={state.errors.passwordError}
        type="password"
        value={state.form.password}
        autocomplete="current-password"
        onChange={handleInputChange}
      />
      {formError && <ErrorView children={formError} />}
      <Flex align="flex-end" justify="space-between" height="48px" {...flexProps} >
        <Button
          title={labels.signin}
          loading={isSubmittingLogin}
          disabled={isSubmittingLogin}
          type="primary"
          htmlType="submit"
        />
        <Button title={labels.exit} type="warning" />
      </Flex>
      <Flex justify="center" height="22px" {...flexProps} margin="20px 0px">
        <Text size={14} lineHeight="25px">
          {labels.donthaveaccount}{" "}
          <Link
            to="/"
            fontSize={14}
            lineheight={25}
            color={colors.appPrimiry}
            children={labels.createaccount}
            nohover="true"
          />
        </Text>
      </Flex>
    </FormContainer>
  )
}