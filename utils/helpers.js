const moment = require('moment');

module.exports = {
  formatDate: (date) => {
    return moment(date).format('MMMM D, YYYY');
  }
}
