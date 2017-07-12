var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Quis in magna adipisicing biltong tail enim. Adipisicing corned beef laboris tri-tip andouille aliquip short ribs pastrami duis incididunt irure swine. Est andouille nulla pig sirloin, ullamco ad shank brisket cupidatat jerky. Pastrami ribeye do porchetta cow irure ex. In sed ipsum, brisket deserunt anim commodo. Dolore alcatra officia prosciutto consectetur shoulder sunt brisket drumstick. Commodo corned beef short loin meatloaf filet mignon."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg",
        description: "Quis in magna adipisicing biltong tail enim. Adipisicing corned beef laboris tri-tip andouille aliquip short ribs pastrami duis incididunt irure swine. Est andouille nulla pig sirloin, ullamco ad shank brisket cupidatat jerky. Pastrami ribeye do porchetta cow irure ex. In sed ipsum, brisket deserunt anim commodo. Dolore alcatra officia prosciutto consectetur shoulder sunt brisket drumstick. Commodo corned beef short loin meatloaf filet mignon."
    },
    {
        name: "Awesome Skyline", 
        image: "https://farm2.staticflickr.com/1090/1299464120_24651a3f50.jpg",
        description: "Quis in magna adipisicing biltong tail enim. Adipisicing corned beef laboris tri-tip andouille aliquip short ribs pastrami duis incididunt irure swine. Est andouille nulla pig sirloin, ullamco ad shank brisket cupidatat jerky. Pastrami ribeye do porchetta cow irure ex. In sed ipsum, brisket deserunt anim commodo. Dolore alcatra officia prosciutto consectetur shoulder sunt brisket drumstick. Commodo corned beef short loin meatloaf filet mignon."
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // } else {
        //     console.log("campgrounds removed!");
        //     // Add a few campgrounds
        //     data.forEach(function(seed){
        //       Campground.create(seed, function(err, campground){
        //           if(err){
        //               console.log(err);
        //           } else {
        //               console.log("added a campground");
        //             //   create a comment
        //             Comment.create({text: "This place is great, but I wish there was the internet",
        //                 author: "Homer"
        //             }, function(err, comment){
        //                 if(err){
        //                     console.log(err);
        //                 } else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                     console.log("Created new comment");
        //                 }
        //             });
        //           }
        //       });
        //     });
        // }
    });
}

module.exports = seedDB;