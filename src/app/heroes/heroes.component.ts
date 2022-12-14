import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from "../services/hero.service";
import {MessageService} from "../services/message.service";

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	HEROES?: Hero[];

	constructor(public messageService: MessageService,private heroService: HeroService) {
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().subscribe(
			heroes =>
				this.HEROES = heroes
		);
	}


}
