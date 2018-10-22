import { Component, OnInit } from '@angular/core';
import { Address } from './address';
import { AddressService } from './address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  addresses: Address[];
  order: string = 'name';
  orderReverse: boolean = false;

  constructor(private addressService: AddressService) {
    
  }

  ngOnInit(): void {
    this.fetchAddresses();
  }

  fetchAddresses(): any {
    this.addressService.getAddresses()
        .subscribe(addresses => this.addresses = addresses.contacts);
  }

  setOrder(newOrder) {
    this.order = newOrder;
    this.orderReverse = !this.orderReverse;
  }
}
