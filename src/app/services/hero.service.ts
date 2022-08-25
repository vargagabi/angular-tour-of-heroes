import {Injectable} from '@angular/core';
import {Hero} from "../hero";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
	providedIn: 'root'
})
export class HeroService {
	HEROES: Hero[] = [
		{id: 12, name: 'Dr. Nice'},
		{id: 13, name: 'Bombasto'},
		{id: 14, name: 'Celeritas'},
		{id: 15, name: 'Magneta'},
		{id: 16, name: 'RubberMan'},
		{id: 17, name: 'Dynama'},
		{id: 18, name: 'Dr. IQ'},
		{id: 19, name: 'Magma'},
		{id: 20, name: 'Tornado'}
	];

	getHeroes(): Observable<Hero[]> {
		this.messageService.add("Heroservice fetched heroes");
		return of(this.HEROES);
	}
	getHero(id: number): Observable<Hero>{
		this.messageService.add("HeroService: hero fetched with id: " + id);
		const hero = this.HEROES.find(h=>h.id === id)!;
		return of(hero);
	}
	constructor(private messageService: MessageService) {
	}
}
