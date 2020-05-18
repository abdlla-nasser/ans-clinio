import { isObjHasData } from "../../../utlities/isThereData";

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
