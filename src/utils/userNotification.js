import notification from "antd/lib/notification";

export const notifyUserSuccess = () => {
  notification.success({
    message: "Process Done Successfully",
    duration: 3,
  });
};

export const notifyUserError = () => {
  notification.error({
    message: "Something went wrong",
    duration: 3,
  });
};
