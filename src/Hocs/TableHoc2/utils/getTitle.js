// @ts-check
import { isObjHasData } from "../../../utils/isThereData";

/**
 * @param {Object} labels
 * @param {String} label
 * @returns {String}
 */

export default (labels, label = "") =>
  label && isObjHasData(labels)
    ? labels[label]
      ? labels[label]
      : label
    : label;
