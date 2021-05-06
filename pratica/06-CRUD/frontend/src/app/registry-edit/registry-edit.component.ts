import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Registry } from '../registry';
import { RegistryService } from '../registry.service';

@Component({
	selector: 'app-registry-edit',
	templateUrl: './registry-edit.component.html',
	styleUrls: ['./registry-edit.component.css']
})
export class RegistryEditComponent implements OnInit {

	routeId: string | null = null;

	registry!: Registry;

	constructor(
		private route: ActivatedRoute,
		private registryService: RegistryService,
	) { }

	ngOnInit(): void {
		this.routeId = this.route.snapshot.paramMap.get('id');
		if (this.routeId) this.receiveRegistry();
	}

	async receiveRegistry() {
		this.registry = await this.registryService.getRegistry(this.routeId!).toPromise();
	}

	parseBudget(budget: string) {
		return Number(budget.replace('$', '').replace(',', ''));
	}

	addPicture() {
		let newElement = document.createElement('div');
		newElement.className = 'col';
		newElement.innerHTML = `
		<div>
			<label for="txtUrl">URL</label>
			<input type="text" class="form-control txtUrl" name="txtUrl">
		</div>
		`;
		document.getElementById('picturesWrapper')?.appendChild(newElement);
	}

	addContact() {
		let newElement = document.createElement('div');
		newElement.className = 'row';
		newElement.innerHTML = `
		<div class="col-2">
			<label for="txtUrl">ID</label>
			<input type="text" class="form-control txtId" name="txtId">
		</div>
		<div class="col-6">
			<label for="txtUrl">Intermediador</label>
			<input type="text" class="form-control txtBroker" name="txtBroker">
		</div>
		<div class="col-3">
			<label for="txtUrl">Data</label>
			<input type="datetime-local" class="form-control txtId" name="txtId">
		</div>
		`;
		document.getElementById('contactsWrapper')?.appendChild(newElement);
	}
}
