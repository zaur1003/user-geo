import { LocationDTO } from "./types/types";

const path = require("path-browserify");

// const info = require(path.join(__dirname, "data/info.json"));
import * as info from "./data/info.json";

export const getFullLocation = (): LocationDTO => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const geoInfo = (info as any)[userTimeZone];
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

export const getCountry = (): string | undefined => {
  return getFullLocation().country;
};

export const getCountryCode = (): string | undefined => {
  return getFullLocation().countryCode;
};

export const getCity = (): string | undefined => {
  return getFullLocation().city;
};

export const getRegion = (): string | undefined => {
  return getFullLocation().region;
};

export const getDial = (): string | undefined => {
  return getFullLocation().dial;
};
export const getGDPRApplies = (): boolean | undefined => {
  return getFullLocation().isGDPR;
};
export const getCCPAApplies = (): boolean | undefined => {
  return getFullLocation().isCCPA;
};
