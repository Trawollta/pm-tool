import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from '../models/channels.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  private apiUrl = 'http://localhost:8000/api/channels';

  constructor(private http: HttpClient) {}

  createChannel(channelData: any): Observable<any> {
    return this.http.post(this.apiUrl, channelData);
  }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.apiUrl);
  }
}
