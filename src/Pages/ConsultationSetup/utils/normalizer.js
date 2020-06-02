import { isArrayHasData } from "../../../utils/isThereData";

export default (source) => {
  let finalSource = [];

  const add = ({ _id, ...others }) => {
    finalSource = [
      ...finalSource,
      {
        _id,
        idValue: _id,
        ...others,
      },
    ];
  };

  if (isArrayHasData(source)) {
    source.forEach((item) => add(item));
  }

  return finalSource;
};
