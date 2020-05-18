/**
  @param {Array} files
*/

export default ({ files, multiple }, callback) => {
  let result = [];
  for (var i = 0; i < files.length; i++) {
    let file = files[i];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    // eslint-disable-next-line
    reader.onload = () => {
      result = [...result, reader.result];
      if (result.length === files.length) {
        if (multiple) {
          return callback(result);
        } else return callback(result[0]);
      }
    };
  }
};
