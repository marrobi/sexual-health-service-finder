module.exports = {
  directives: {
    connectSrc: [
      '\'self\'',
      'assets.adobedtm.com',
      '*.demdex.net',
      '*.google-analytics.com',
      '*.hotjar.com:*',
      'nhs.funnelback.co.uk',
    ],
    defaultSrc: [
      '\'self\'',
    ],
    fontSrc: [
      '*.hotjar.com',
      '*.nhs.uk',
    ],
    frameSrc: [
      '*.hotjar.com',
    ],
    imgSrc: [
      '\'self\'',
      'data:',
      '*.2o7.net',
      '*.everesttech.net',
      '*.google-analytics.com',
      '*.hotjar.com',
      '*.nhs.uk',
      '*.omtrdc.net',
      '*.webtrends.com',
      '*.webtrendslive.com',
    ],
    scriptSrc: [
      '\'self\'',
      '\'unsafe-eval\'',
      '\'unsafe-inline\'',
      'data:',
      'assets.adobedtm.com',
      '*.demdex.net',
      '*.google-analytics.com',
      '*.hotjar.com',
      '*.nhs.uk',
      '*.webtrends.com',
      '*.webtrendslive.com',
    ],
    styleSrc: [
      '\'self\'',
      '\'unsafe-inline\'',
      '*.nhs.uk',
    ],
  },
};
