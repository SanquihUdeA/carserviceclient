import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user/user.service";
import { GiphyService } from "../shared/giphy/giphy.service";
import { CarService } from "../shared/car/car.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users: Array<any>;
  cars: Array<any>;
  carsSelected: Array<any>;

  constructor(
    private userService: UserService,
    private giphyService: GiphyService,
    private carService: CarService
  ) {}

  ngOnInit() {
    this.userService.getAll().subscribe((data) => {
      this.users = data._embedded.owners;
      for (const user of this.users) {
        this.giphyService
          .get(user.name)
          .subscribe((url) => (user.giphyUrl = url));
      }
    });
    this.ngOnInitCars();
  }

  ngOnInitCars() {
    this.carService.getAll().subscribe((data) => {
      this.cars = data;
      for (const car of this.cars) {
        this.giphyService
          .get(car.name)
          .subscribe((url) => (car.giphyUrl = url));
      }
    });
  }

  removeItemFromArr(item) {
    var i = this.users.indexOf(item);
    this.users.splice(i, 1);
  }

  searchCarAndMakeDniNull(ownerDni) {
    this.carsSelected = [];
    for (var i = 0; i < this.cars.length; i++) {
      if (ownerDni == this.cars[i].ownerDni) {
        this.cars[i].ownerDni = null;
        this.carsSelected.push(this.cars[i]);
      }
    }
  }

  remove(owners) {
    for (var i = 0; i < owners.length; i++) {
      this.searchCarAndMakeDniNull(owners[i].value.dni);
      for (var j = 0; j < this.carsSelected.length; j++) {
        this.carService
          .save(this.carsSelected[j])
          .subscribe((error) => console.error(error));
      }
      this.carsSelected = [];
      var href = owners[i].value._links.self.href;
      this.removeItemFromArr(owners[i].value);
      this.userService.remove(href).subscribe((error) => console.error(error));
    }
  }
}
