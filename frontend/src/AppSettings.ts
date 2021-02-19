export const server = 'http://localhost:44371';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'petespangler.us.auth0.com',
  client_id: 'HjrtYyUiWgzpemed9t317uuXrsGzMDs1',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
