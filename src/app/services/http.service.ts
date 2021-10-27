import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campaign } from '../models/campaign';
import { toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: string = "https://hunch-hr-interview.azurewebsites.net/api/randomdata?token=auyzkp2ht&columns=";
  columns: string = "campaign_name,status,objective,created_utc,modified_utc,impressions,spend,clicks,conversions,video_views,lift,ctr,cpm,roas,enabled,kind";

  constructor(private http: HttpClient) { }

  getCampaigns() {
    return this.http.get<Campaign[]>(this.apiUrl + this.columns)
  }
}
