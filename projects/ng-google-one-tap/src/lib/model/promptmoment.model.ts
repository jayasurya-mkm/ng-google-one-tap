export interface PromptMomentNotification {
    isDisplayMoment(): boolean;
    isDisplayed(): boolean;
    isNotDisplayed(): boolean;
    getNotDisplayedReason(): notDisplayedReason;
    isSkippedMoment(): boolean;
    getSkippedReason(): skippedReasone;
    isDismissedMoment(): boolean;
    getDismissedReason(): dismissedReasone;
    getMomentType(): momentType;
}

interface notDisplayedReason {
    browser_not_supported: any;
    invalid_client: any;
    missing_client_id: any;
    opt_out_or_no_session: any;
    secure_http_required: any;
    suppressed_by_user: any;
    unregistered_origin: any;
    unknown_reason: any;
}

interface skippedReasone {
    auto_cancel: boolean;
    user_cancel: boolean;
    tap_outside: boolean;
    issuing_failed: boolean;
}

interface dismissedReasone {
    credential_returned: any;
    cancel_called: any;
    flow_restarted: any;
}

interface momentType {
    display: any;
    skipped: any;
    dismissed: any;
}