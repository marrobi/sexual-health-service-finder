const urlUtils = require('../lib/externalUrlUtils');

function results(req, res, next) {
  const locationDetails = res.locals.postcodeLocationDetails;
  res.locals.services = urlUtils.addMapUrl(locationDetails, res.locals.services);
  res.locals.resultsExternalUrl =
    urlUtils.getChoicesResultsUrlToOnlineTests(locationDetails, res.locals.location);
  next();
}

module.exports = {
  results,
};
