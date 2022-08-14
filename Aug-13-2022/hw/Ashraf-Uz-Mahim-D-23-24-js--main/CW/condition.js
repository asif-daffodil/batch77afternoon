// ------------- ---  --- -------------

let x = 40;
let y = 50;

if (x != y && x < y) {
  console.log("Successful");
} else {
  console.log("Error");
}

// ------------- ---  --- -------------

let age = 20;

if (age <= 17 && age >= 1) {
  console.log("You are a child.");
} else if (age <= 30 && age >= 18) {
  console.log("You are a young person.");
} else if (age <= 50 && age >= 31) {
  console.log("You are a middle aged person.");
} else if (age <= 80 && age >= 49) {
  console.log("You are an old person.");
} else if (age <= 150 && age >= 79) {
  console.log("You are a lucky person to have lived a long life.");
} else {
  console.log("Please provide correct information.");
}
