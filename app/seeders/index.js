const { MONGO_DB_URI, MONGO_DB_CONNECTION_OPTIONS } = require("../config/db");
const mongoose = require("mongoose");

// Seeders
const categorySeeder = require("./category");
const productSeeder = require("./product");
const variantSeeder = require("./variant");

async function runSeeders() {
  await mongoose.connect(MONGO_DB_URI, MONGO_DB_CONNECTION_OPTIONS);

  await Promise.all([
    categorySeeder.drop(),
    productSeeder.drop(),
    variantSeeder.drop()
  ]);

  await categorySeeder.seed();
  await productSeeder.seed();
  await variantSeeder.seed();
}

runSeeders();

/*
  category
  sku
  attributes:
    water_line_compatible
    coffee_flavor
    pack_size
*/

/*

product_type
  COFFEE_MACHINE_LARGE
  COFFEE_MACHINE_SMALL
  ESPRESSO_MACHINE

  COFFEE_POD_LARGE
  COFFEE_POD_SMALL
  ESPRESSO_POD

SKU

water_line_compatible
  true
  false

coffee_flavor
  COFFEE_FLAVOR_VANILLA
  COFFEE_FLAVOR_CARAMEL
  COFFEE_FLAVOR_PSL
  COFFEE_FLAVOR_MOCHA
  COFFEE_FLAVOR_HAZELNUT

pack_size
  1 dozen (12)
  3 dozen (36)
  5 dozen (60)
  7 dozen (84)
*/

/*
SKU LIST
=============================
· CM001 – small machine, base model
· CM002 – small machine, premium model
· CM003 – small machine, deluxe model, water line compatible
· CM101 – large machine, base model
· CM102 – large machine, premium model, water line compatible
· CM103 – large machine, deluxe model, water line compatible
· EM001 – espresso machine, base model
· EM002 – espresso machine, premium model
· EM003 – espresso machine, deluxe model, water line compatible


· CP001 – small coffee pod, 1 dozen, vanilla
· CP003 – small coffee pod, 3 dozen, vanilla
· CP011 – small coffee pod, 1 dozen, caramel
· CP013 – small coffee pod, 3 dozen, caramel
· CP021 – small coffee pod, 1 dozen, psl
· CP023 – small coffee pod, 3 dozen, psl
· CP031 – small coffee pod, 1 dozen, mocha
· CP033 – small coffee pod, 3 dozen, mocha
· CP041 – small coffee pod, 1 dozen, hazelnut
· CP043 – small coffee pod, 3 dozen, hazelnut
· CP101 – large coffee pod, 1 dozen, vanilla
· CP103 – large coffee pod, 3 dozen, vanilla
· CP111 – large coffee pod, 1 dozen, caramel
· CP113 – large coffee pod, 3 dozen, caramel
· CP121 – large coffee pod, 1 dozen, psl
· CP123 – large coffee pod, 3 dozen, psl
· CP131 – large coffee pod, 1 dozen, mocha
· CP133 – large coffee pod, 3 dozen, mocha
· CP141 – large coffee pod, 1 dozen, hazelnut
· CP143 – large coffee pod, 3 dozen, hazelnut
· EP003 – espresso pod, 3 dozen, vanilla
· EP005 – espresso pod, 5 dozen, vanilla
· EP007 – espresso pod, 7 dozen, vanilla
· EP013 – espresso pod, 3 dozen, caramel
· EP015 – espresso pod, 5 dozen, caramel
· EP017 – espresso pod, 7 dozen, caramel
*/
