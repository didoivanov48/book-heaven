export const oktaConfig = {
    clientId: "0oairlu650IZlgBob5d7",
    issuer: "https://dev-71735817.okta.com/oauth2/default",
    redirectUri: "http://localhost:3000/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: true,
}