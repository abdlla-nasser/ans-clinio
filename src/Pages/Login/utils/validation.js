export default function ({ username, password }) {
  let errors = null;
  if (!username) {
    errors = { ...errors, usernameError: "Please enter your Username" };
  }
  if (!password) {
    errors = { ...errors, passwordError: "Please enter your Password" };
  }

  return errors;
}
