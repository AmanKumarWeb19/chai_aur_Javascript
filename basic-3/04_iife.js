(function chai() {
  console.log("Welcome to IIFE");
})();

((name) => {
  console.log(`Welcome ${name} to IIFE Concept!`);
})("Aman");
