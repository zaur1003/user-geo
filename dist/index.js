"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCCPAApplies = exports.getGDPRApplies = exports.getDial = exports.getRegion = exports.getCity = exports.getCountryCode = exports.getCountry = exports.getFullLocation = void 0;
var info = __importStar(require("./data/info.json"));
var getFullLocation = function () {
    var userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var geoInfo = info[userTimeZone];
    if (geoInfo)
        return geoInfo;
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
exports.getFullLocation = getFullLocation;
var getCountry = function () {
    return (0, exports.getFullLocation)().country;
};
exports.getCountry = getCountry;
var getCountryCode = function () {
    return (0, exports.getFullLocation)().countryCode;
};
exports.getCountryCode = getCountryCode;
var getCity = function () {
    return (0, exports.getFullLocation)().city;
};
exports.getCity = getCity;
var getRegion = function () {
    return (0, exports.getFullLocation)().region;
};
exports.getRegion = getRegion;
var getDial = function () {
    return (0, exports.getFullLocation)().dial;
};
exports.getDial = getDial;
var getGDPRApplies = function () {
    return (0, exports.getFullLocation)().isGDPR;
};
exports.getGDPRApplies = getGDPRApplies;
var getCCPAApplies = function () {
    return (0, exports.getFullLocation)().isCCPA;
};
exports.getCCPAApplies = getCCPAApplies;
//# sourceMappingURL=index.js.map