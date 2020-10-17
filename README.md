# Explicación de los componentes y servicios realizados en angular para llegar a la solución

## Componente user-list

Fué creado con ayuda del comando `ng g c user-list` y con ayuda del componente ya creado `car-list`. Se hizo uso tambien de `<mat-selection-list>` para que se pudieran seleccionar varios owners con una especie de checkbox y poderlos eliminar. Y finalmente se agregó un boton para dirigirse a la lista de carros.

## Componente user-edit

Fué creado con ayuda del comando `ng g c user-edit` y con ayuda del componente ya creado `car-edit`. Y unicamente se le agregaron mas `<mat-form-field>` para mostrar todos los detalles del usuario.

## Servicio user

Fué creado con ayuda del comando `ng g s shared/user/user` y con ayuda del servicio ya creado `shared/car/car`. unicamnete se le agrego el metodo `getBy_linksHelfHref` con el fin de obtener los owners por medio del href, ya que no se contaba con un parametro `id`.

## Cambios en componente car-list

Se agregó `{{ car.ownerDni }}` para poder ver el Dni del woner al lado del nombre del carro y tambien se agrego un boton para dirigirse a la lista de owners.

## Cambios en componente car-edit

Se hizo uso del componente `<mat-select>` de angular material para seleccionar el usuario que va estar relacionado con ese carro.

---

# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
