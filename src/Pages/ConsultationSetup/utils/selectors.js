import { onSelectRecord } from "../modules/actions";

export const mapStateToProps = ({ consultationSetupReducer }) => ({
  canInsert: true,
  canDelete: true,
  ...consultationSetupReducer,
});

export const actions = {
  onSelectRecord,
};
