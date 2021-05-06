import { Component, OnInit } from '@angular/core';
import { Registry } from '../registry';
import { RegistryService } from '../registry.service';

@Component({
	selector: 'app-registries',
	templateUrl: './registries.component.html',
	styleUrls: ['./registries.component.css']
})
export class RegistriesComponent implements OnInit {

	registries: Registry[] = [];

	constructor(private registryService: RegistryService) { }

	ngOnInit(): void {
		this.receiveRegistries();
	}

	receiveRegistries() {
		let selectElement = document.getElementsByTagName('select');
		const orderBy = selectElement[0].value;
		const direction = selectElement[1].value;

		this.registryService.getRegistries(orderBy, direction).subscribe((data: Registry[]) => this.registries = data);
	}
}
