# User-Geo

User Geo is javascript library that can define user country,city, region whether or not GDPR or CCPA is applied in user's country

## Installation

```bash
npm install @zaur_mahmudov/user-geo
```

## Import

User Geo supports both ECMAscript and CommonJS so it can be imported and required

```javascript
import * as UserGeo from "@zaur_mahmudov/user-geo";

or;

const UserGeo = require("@zaur_mahmudov/user-geo");
```

## Methods

```javascript
import * as UserGeo from "@zaur_mahmudov/user-geo";

// getFullLocation - returns full object with user geo location
UserGeo.getFullLocation();

// getCountry - returns user country name
UserGeo.getCountry();

// getCountryCode - returns user country code
UserGeo.getCountryCode();

// getCity - returns user city name
UserGeo.getCity();

// getRegion - returns user region
UserGeo.getRegion();

// getDial - returns dial code of user's country
UserGeo.getDial();

// getGDPRApplies - returns whether or not GDPR is applied in user's country
UserGeo.getGDPRApplies();

// getCCPAApplies - returns whether or not CCPA is applied in user's country
UserGeo.getCCPAApplies();
```

## Examples

```javascript
/**
 * getFullLocation method returns user full geo data object. E.g.:
*/
{
  country: 'Hungary',
  countryCode: 'HU',
  city: 'Budapest',
  region: 'Europe',
  dial: '+36',
  isGDPR: true,
  isCCPA: false
}

/**
 * All other methods returns string. E.g.:
*/

UserGeo.getCountry(); // returns - "Budapest"
UserGeo.getCountryCode(); // returns - "HU"

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
