export const server =
  process.env.REACT_APP_ENV === 'production'
    ? 'https://qanda2021testback.azurewebsites.net/'
    : process.env.REACT_APP_ENV === 'staging'
    ? 'https://qanda2021testback.staging.azurewebsites.net/'
    : 'http://localhost:47731';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'petespangler.us.auth0.com',
  client_id: 'HjrtYyUiWgzpemed9t317uuXrsGzMDs1',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
