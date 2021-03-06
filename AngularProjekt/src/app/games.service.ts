import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GamesService {

    constructor(private http: Http) {}

    public getGames(userId: string): Observable<Array<any>> {
        return this.http.get('../../assets/gamesUser' + userId + '.json')
            .map((response: Response) => {
                if (response.status != 200) {
                    return [];
                } else {
                    return response.json();
                }
            });
    }

    public getGame(id: string): Observable<Array<any>> {
        return this.http.get('../../assets/game' + id + '.json')
            .map((response: Response) => {
                if (response.status != 200) {
                    return [];
                } else {
                    return response.json();
                }
            });
    }

    public getSearchedGames(userId: string): Observable<Array<any>> {
        return this.http.get('../../assets/searchedGamesUser' + userId + '.json')
            .map((response: Response) => {
                if (response.status != 200) {
                    return [];
                } else {
                    return response.json();
                }
            });
    }

    public search(query: string): Observable<Array<any>> {
        return this.http.get('../../assets/games.json')
            .map((response: Response) => {
                if (response.status != 200) {
                    return [];
                } else {
                    const array = response.json();
                    return array.filter(game => game.title.includes(query));
                }
            });
    }

}
