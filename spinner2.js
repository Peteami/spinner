let word = "|/-\\|/-\\|";
let time = 100;
for (const char of word) {
  setTimeout(() => {
    process.stdout.write("\r");
    process.stdout.write(char);
  }, time);
  time += 200;
}
