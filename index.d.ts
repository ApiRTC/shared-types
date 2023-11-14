import { GetOrCreateConversationOptions, JoinOptions, PublishOptions } from '@apirtc/apirtc'

export type InvitationData = {
    cloudUrl?: string;
    apiKey?: string;
    // TBD: this might become an ApiRTC platform configuration instead (per apiKey or even per userAgent id).
    callStatsMonitoringInterval?: number;
    conversation: {
        name: string; friendlyName?: string;
        //moderationEnabled?: boolean;;
        getOrCreateOptions?: GetOrCreateConversationOptions;
        joinOptions?: JoinOptions;
    };
    user: {
        firstName: string; lastName: string;
    }
    streams: Array<{
        type: 'user-media' | 'display-media',
        constraints?: MediaStreamConstraints,
        publishOptions?: PublishOptions
    }>;
};