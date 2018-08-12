import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

import {SERVER_API_URL} from 'app/app.constants';
import {createRequestOption} from 'app/shared';
import {Campaign} from 'app/shared/model/campaign.model';

type EntityResponseType = HttpResponse<Campaign>;
type EntityArrayResponseType = HttpResponse<Campaign[]>;

@Injectable({ providedIn: 'root' })
export class CampaignService {
    private resourceUrl = SERVER_API_URL + 'api/campaigns';

    constructor(private http: HttpClient) {}

    create(campaign: Campaign): Observable<EntityResponseType> {
        return this.http.post<Campaign>(this.resourceUrl, campaign, { observe: 'response' });
    }

    update(campaign: Campaign): Observable<EntityResponseType> {
        return this.http.put<Campaign>(this.resourceUrl, campaign, { observe: 'response' });
    }

    find(id: string): Observable<EntityResponseType> {
        return this.http.get<Campaign>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<Campaign[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: string): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
