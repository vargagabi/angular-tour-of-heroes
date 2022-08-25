import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../services/hero.service";
import {Location} from "@angular/common";

@Component({
	selector: 'app-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
	@Input() hero?: Hero;

	constructor(private route: ActivatedRoute, private heroService:HeroService,public location: Location) {
	}

	getHero():void{
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.heroService.getHero(id).subscribe(data => this.hero = data);
	}

	ngOnInit(): void {
		this.getHero();
	}

	goBack() {
		this.location.back();
	}
}
