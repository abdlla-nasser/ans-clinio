import React from "react";
import { connect } from "react-redux";
import Input from "./shadowInput";
import Link from "../../../components/Link";
import Flex from "../../../components/Flex";
import Text from "../../../components/Text";
import Button from "../../../components/Button/ButtonWithIcon";
import { colors } from "../../../utils/theme";
import { FormContainer } from "../utils/styled";
import { ErrorView } from "../../../Hocs/FieldShadow/styled";
import { mapStateToProps, mapDispatchToProps } from "../utils/selectors";

import userSvg from "../../../assets/svgs/user.svg";
import lockSvg from "../../../assets/svgs/lock.svg";

const { useCallback } = React;

const flexProps = {
  margin: "10px 0px",
  width: "415px",
};

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
}) => {
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
        placeholder="Email or Phone no."
        autofocus
        error={usernameError}
        value={username}
        autocomplete="email"
        onChange={onInputChange("username")}
      />

      <Input
        image={lockSvg}
        imageAlt="password"
        placeholder="Password"
        error={passwordError}
        type="password"
        value={password}
        autocomplete="current-password"
        onChange={onInputChange("password")}
      />

      {formError && <ErrorView children={formError} />}

      <Flex
        align="flex-end"
        justify="space-between"
        height="48px"
        {...flexProps}
      >
        <Button
          title="Sign in"
          loading={isSubmittingLogin}
          disabled={isSubmittingLogin}
          type="primary"
          htmlType="submit"
        />

        <Button title="Exit" type="warning" />
      </Flex>

      <Flex justify="center" height="22px" {...flexProps} margin="20px 0px">
        <Text size={14} lineHeight="25px">
          Don't have an account?{" "}
          <Link
            to="/"
            fontSize={14}
            lineheight={25}
            color={colors.appPrimiry}
            children="Create Account"
            nohover="true"
          />
        </Text>
      </Flex>
    </FormContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
