/**
 * Created by marius on 15/03/2017.
 */
import {Pizza} from "./pizza";

export let PIZZAS: Array<Pizza> = [
  {
    name: '4 STAGIONI',
    price: 27.5,
    weight: 550,
    image: 'assets/images/quattro.png',
    ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'DIAVOLA',
    price: 25,
    weight: 450,
    image: 'assets/images/pepperoni.png',
    ingredients: 'sos rosii, mozzarella, salam picant, oregano',
    canPurchase: false,
    soldOut: false
  }
];
