export interface configuration extends customConfig {
    client_id: string;
    auto_select?: boolean;
    login_uri?: string;
    cancel_on_tap_outside?: boolean;
    prompt_parent_id?: string;
    nonce?: string;
    context?: string;
    state_cookie_domain?: string;
    ux_mode?: string;
    allowed_parent_origin?: string;
    [key: string]: any;
}

export interface SocialUser {
    provider: string;
    id: string;
    email: string;
    name: string;
    photoUrl: string;
    firstName: string;
    lastName: string;
    authToken: string;

    idToken: string; // Reference https://developers.google.com/identity/sign-in/web/backend-auth
    authorizationCode: string; // Reference https://developers.google.com/identity/sign-in/web/reference#googleauthgrantofflineaccessoptions

    response: any;
}

export interface customConfig {
    disale_force_cooldowntime?: boolean;
    authvalidation_from_ngtap?: boolean;
    debugging_by_oauth2_api?: boolean;
}

export interface credentialRes {
    client_id: string;
    credential: string;
    select_by: string;
}
