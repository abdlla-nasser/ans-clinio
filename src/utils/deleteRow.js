export default (oldDs, rowId, rowKey) =>
  oldDs.filter((item) => item[rowKey] !== rowId);
