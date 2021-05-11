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
}

interface customConfig {
    disable_exponential_cooldowntime?: boolean;
    authvalidate_by_googleapis?: boolean;
}

export interface credentialRes {
    client_id: string;
    credential: string;
    select_by: string;
}

export interface UserInfo {
    iss: string;
    nbf: number;
    aud: string;
    sub: string;
    hd: string;
    email: string;
    email_verified: boolean;
    azp: string;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    iat: number;
    exp: number;
    jti: string;
}
