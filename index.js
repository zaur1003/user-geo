const info = require("./info.json");
const getGeo = () => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const geoInfo = info[userTimeZone];
  if (geoInfo) return geoInfo;
  return {
    country: undefined,
    countryCode: undefined,
    city: undefined,
    region: undefined,
    dial: undefined,
    isGDPR: undefined,
    isCCPA: undefined,
  };
};

module.exports.getGeo = getGeo;
