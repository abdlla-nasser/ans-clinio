import { isObjHasData } from "../../../utils/isThereData";

/**
 * @param {Object} labels
 * @param {String} label
 * @return {String}
 */

export default (labels, label = "") =>
  label && isObjHasData(labels)
    ? labels[label]
      ? labels[label]
      : label
    : label;
