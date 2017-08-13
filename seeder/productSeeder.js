/**
 * Created by Jahid on 8/13/2017.
 */
var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [ new Product({
    imagePath:"https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/fc3_naked_boxshot_tablet_138234.jpg",
    description:"Awesome Game!!!",
    title:"Farcry 3",
    price:10
}),new Product({
    imagePath:"https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/fc3_naked_boxshot_tablet_138234.jpg",
    description:"Awesome Game!!!",
    title:"Farcry 3",
    price:10
}),new Product({
    imagePath:"https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/fc3_naked_boxshot_tablet_138234.jpg",
    description:"Awesome Game!!!",
    title:"Farcry 3",
    price:10
}),new Product({
    imagePath:"https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/fc3_naked_boxshot_tablet_138234.jpg",
    description:"Awesome Game!!!",
    title:"Farcry 3",
    price:10
})
];

var done = 0;
for(var i=0; i<products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if(done == products.length){
            exit();
        }
        
    });
}

function exit() {
    mongoose.disconnect();
}

