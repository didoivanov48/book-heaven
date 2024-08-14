export const oktaConfig = {
    clientId: '0oaiwcre4gHh6M8Fz5d7',
    issuer: 'https://dev-10072743.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}