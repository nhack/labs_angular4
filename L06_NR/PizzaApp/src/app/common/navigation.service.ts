/**
 * Created by marius on 19/04/2017.
 */
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class NavigationService {

  constructor(private router: Router) {
  }

  openPizza(id: string): Promise<boolean> {
    return this.router.navigate(['pizzas', id]);
  }

  openPizzas(): Promise<boolean> {
    return this.router.navigate(['pizzas']);
  }
}
