const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Bruh"
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    
    rating: 7,
    review: "Pretty good"
});

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit."
});

// pineapple.save();

const lichi = new Fruit({
    name: "Lichi",
    rating: 9,
    review: "Is good."
});

// lichi.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

// person.save();

// const mango = new Fruit({
//     name: "Mango",
//     rating: 10,
//     review: "Awesome"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 9,
//     review: "Good"
// });

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 8,
//     review: "Sour"
// });

// Fruit.insertMany([mango, banana, kiwi], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("success");
//     }
// });

Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne(
//     {_id: "62b6087ad955e9e8580577b1"},
//     {name: "Peach"},
//     (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Successfully Updated");
//         }
//     }
// );

// Fruit.deleteOne({name: "Peach"}, err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted");
//     }
// });

// Person.deleteMany({name: "John"}, err => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("S deleted all");
//     }
// });

Person.updateOne({name: "John"}, {favoriteFruit: lichi}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successsss");
    }
});