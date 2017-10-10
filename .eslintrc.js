module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import",
        "chai-friendly",
    ],
    "globals": {
      "window": true,
      "document": true,
      "jQuery": true,
      "Zoolander": true,
      "svgBannerGetAttributes": true,
      "svgBannerStringSplitter": true,
    },
    "rules": {
      // Errors.
      "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["$"] }],
      "no-unused-expressions": 0,
      "chai-friendly/no-unused-expressions": 2
    },
    "env": {
      "mocha": true,
      "jquery": true,
      "jasmine": true,
    }
};
