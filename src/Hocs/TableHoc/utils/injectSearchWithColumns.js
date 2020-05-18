import SearchOptions from "./searchColumns";
import ActionColumn from "./ActionColumn";
import getRenderView from "./renderCell";

export default ({
  columns,
  clearFilter,
  fetchData,
  useModalState,
  openModal,
  rowKey,
  selectedRow,
  isEditing,
  onChange,
  errors,
  isRtl,
  getTitle,
  ...others
}) => {
  let result = [];
  if (columns) {
    const getSearchOpt = SearchOptions({
      isRtl,
      clearFilter,
      fetchData
    });

    const setupView = renderView =>
      getRenderView({
        renderView,
        errors,
        isEditing,
        onChange,
        rowKey,
        selectedRow,
        ...others
      });

    result = columns.map(
      ({
        dataIdxSearch,
        dataIndex,
        titleLabel,
        children,
        renderView,
        key,
        ...col
      }) => {
        const withSearch = dataIdxSearch || dataIndex;
        const search = withSearch ? getSearchOpt : null;
        const render = setupView(renderView);
        return {
          align: "center",
          title: getTitle(titleLabel),
          children:
            children &&
            children.map(({ titleLabel, key, renderView, ...item }) => {
              const render = setupView(renderView);
              return {
                ...item,
                key,
                align: "center",
                title: getTitle(titleLabel),
                ...getSearchOpt,
                ...render
              };
            }),
          ...col,
          dataIndex,
          key: dataIdxSearch || dataIndex || key,
          ...search,
          ...render
        };
      }
    );

    if (useModalState) {
      result = [
        ...result,
        {
          title: getTitle("action"),
          align: "center",
          width: 70,
          render: ActionColumn(openModal, rowKey)
        }
      ];
    }
  }

  return result;
};
