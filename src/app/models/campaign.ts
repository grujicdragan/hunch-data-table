enum CampaignStatus {
    Active = "Active",
    Paused = "Paused"
}

export class Campaign {
    private campaign_name: string;
    private status: CampaignStatus;
    private objective: string;
    private created_utc: string;
    private modified_utc: string;
    private impressions: number;
    private spend: number;
    private clicks: number;
    private conversions: number;
    private video_views: number;
    private lift: number;
    private ctr: number;
    private cpm: number;
    private roas: number;
    private enabled: boolean;
    private kind: string;

    constructor(data: Campaign) {
        this.campaign_name = data.campaign_name.replace(/_/g, " ");
        this.status = data.status ? CampaignStatus.Active : CampaignStatus.Paused;
        const date = new Date(data.created_utc);
        this.created_utc = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        this.modified_utc = data.modified_utc;
        this.objective = data.objective;
        this.impressions = data.impressions;
        this.spend = data.spend;
        this.clicks = data.clicks;
        this.conversions = data.conversions;
        this.video_views = data.video_views;
        this.lift = data.lift;
        this.ctr = data.ctr;
        this.cpm = data.cpm;
        this.roas = data.roas;
        this.enabled = data.enabled;
        this.kind = data.kind;
    }
}
