export const mapStateToProps = ({ consultationSetupReducer }) => ({
  canInsert: true,
  canDelete: true,
  ...consultationSetupReducer,
});
