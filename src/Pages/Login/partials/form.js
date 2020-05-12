import React from "react";
import { connect } from "react-redux";
import Input from "./shadowInput";
import { FormContainer } from "../utils/styled";
import Link from "../../../components/Link";
import Flex from "../../../components/Flex";
import Text from "../../../components/Text";
import Button from "../../../components/Button/ButtonWithIcon";
import { ErrorView } from "../../../Hocs/FieldShadow/styled";
import { colors } from "../../../utils/theme";

import userSvg from "../../../assets/svgs/user.svg";
import lockSvg from "../../../assets/svgs/lock.svg";

const flexProps = {
  margin: "10px 0px",
  width: "415px",
};

const LoginForm = ({ formError, schemaError }) => {
  return (
    <FormContainer>
      <Input
        image={userSvg}
        imageAlt="user"
        placeholder="Email or Phone no."
        autofocus
        error=""
        value=""
        onChange={() => {}}
      />

      <Input
        image={lockSvg}
        imageAlt="password"
        placeholder="Password"
        error=""
        value=""
        autocomplete="new-password"
        onChange={() => {}}
      />

      {formError ||
        (schemaError && <ErrorView children={formError || schemaError} />)}

      <Flex
        align="flex-end"
        justify="space-between"
        height="48px"
        {...flexProps}
      >
        <Button
          title="Sign in"
          // loading={isLoading}
          // disabled={isLoading}
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

export default LoginForm;
