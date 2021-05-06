import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Registry } from './registry';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RegistryService {

	constructor(private http: HttpClient) { }

	registryUrl = 'http://localhost:3333/registry';
	registriesUrl = 'http://localhost:3333/registries';

	getRegistry(id: string): Observable<Registry> {
		return this.http.get<Registry>(this.registryUrl, {
			params: {
				id: id,
			}
		});
	}

	getRegistries(orderBy='name', direction='ASC') {
		return this.http.get<Registry[]>(this.registriesUrl, {
			params: {
				orderBy: orderBy,
				direction: direction
			}
		});
	}
}
