import React, { useCallback } from "react";
import { connect } from "react-redux";
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

import { mapStateToProps, mapDispatchToProps } from "../utils/selectors";

const flexProps = { margin: "10px 0px", width: "415px" };

const LoginForm = ({
  onLogin,
  username,
  password,
  usernameError,
  passwordError,
  onInputChange,
  formError,
  isSubmittingLogin,
  push,
  labels: {
    emailorphoneno,
    pass,
    signin,
    exit,
    donthaveaccount,
    createaccount,
  },
}) => {
  // const { }
  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      return onLogin(push);
    },
    [onLogin, push]
  );

  return (
    <FormContainer onSubmit={handleLogin}>
      <Input
        image={userSvg}
        imageAlt="user"
        placeholder="Email or phone no"
        autofocus
        error={usernameError}
        value={username}
        autocomplete="email"
        onChange={onInputChange("username")}
      />
      <Input
        image={lockSvg}
        imageAlt="password"
        placeholder={pass}
        error={passwordError}
        type="password"
        value={password}
        autocomplete="current-password"
        onChange={onInputChange("password")}
      />
      {formError && <ErrorView children={formError} />}
      <Flex align="flex-end" justify="space-between" height="48px" {...flexProps} >
        <Button
          title={signin}
          loading={isSubmittingLogin}
          disabled={isSubmittingLogin}
          type="primary"
          htmlType="submit"
        />
        <Button title={exit} type="warning" />
      </Flex>
      <Flex justify="center" height="22px" {...flexProps} margin="20px 0px">
        <Text size={14} lineHeight="25px">
          {donthaveaccount}{" "}
          <Link
            to="/"
            fontSize={14}
            lineheight={25}
            color={colors.appPrimiry}
            children={createaccount}
            nohover="true"
          />
        </Text>
      </Flex>
    </FormContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
