class Product {
    constructor(nameOfProduct, calories) {
        this.title = nameOfProduct;
        this.calories = calories;
    }
}

class Dish {
    
    constructor(dishName) {
        this.title = dishName;
        this.products = [];
    }

    addProduct(ingredient, weight) {
        this.products.push([ingredient, weight]);
    }
    
    addCalories() {
        let calories = 0;
        let amount = 0;
        for (let i = 0; i < this.products.length; i++) {
            amount = this.products[i][1] / 100 * this.products[i][0].calories;
            calories += amount;
        }
    }

}

class CaloriesCalculator {
    constructor() {
        this.dishName = [];
    }

    addDish(dishName) {
        this.dishName.push(dishName);
    }

    getTotalCalories() {
        let calories = 0;
        let amount = 0;
        for (let i = 0; i < this.dishName[0].products.length; i++) {
            amount = this.dishName[0].products[i][1] / 100 * this.dishName[0].products[i][0].calories;
            calories += amount;
        }
        return calories;
    }

    getAllDishesInfo() {
        let dish = this.dishName[0].products;
        return (`========================================\n\n ${this.dishName[0].title} - 1 порция, ${calories} ккал:` +
            `\n   * ${dish[0][0].title}, ${dish[0][1]} гр., ` +
            (dish[0][0].calories * dish[0][1] / 100) + ' ккал' +
            `\n   * ${dish[1][0].title}, ${dish[1][1]} гр., ` +
            (dish[1][0].calories * dish[1][1] / 100) + ' ккал' +
            `\n   * ${dish[2][0].title}, ${dish[2][1]} гр., ` +
            (dish[2][0].calories * dish[2][1] / 100) + ' ккал' +
            `\n   * ${dish[3][0].title}, ${dish[3][1]} гр., ` +
            (dish[3][0].calories * dish[3][1] / 100) + ' ккал' +
            `\n\n========================================`
        );
    }

}

const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);

const plov = new Dish('Плов');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const calculator = new CaloriesCalculator();
calculator.addDish(plov);

const calories = calculator.getTotalCalories();
console.log(calories);
const totals = calculator.getAllDishesInfo();
console.log(totals);