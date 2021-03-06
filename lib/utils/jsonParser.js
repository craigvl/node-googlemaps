/**
 * Wraps the callback function to convert the output to a javascript object
 */
module.exports = function(callback) {

  if (typeof callback !== 'function') {
    return false;
  }

  return function(err, jsonString) {

    if (err) {
      return callback(err);
    }

    try {
      callback(err, JSON.parse(jsonString));
    } catch (e) {
      return callback(e);
    }

  };

};
