const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let str = "";

fs.readFile("./firstname.txt")
  .then((firstname) => {
    str += firstname;
    return fs.readFile("./lastname.txt");
  })
  .then((lastname) => {
    str += ` ${lastname.toString()}`;
    return fs.readFile("./age.txt");
  })
  .then((age) => {
    str += ` is ${age.toString()} years old`;
    return fs.readFile("./hobbies.txt");
  })
  .then((hobbiesBuff) => {
    const hobbies = JSON.parse(hobbiesBuff.toString()).join(" and ");
    str += ` and his hobbies are ${hobbies}`;
  })
  .then(() => {
    console.log(str);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const printSentence = async () => {
  const firstname = await fs.readFile("./firstname.txt");
  const lastname = await fs.readFile("./lastname.txt");
  const age = await fs.readFile("./age.txt");
  const hobbies = JSON.parse(
    (await fs.readFile("./hobbies.txt")).toString()
  ).join(" and ");

  console.log(
    `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies}`
  );
};

printSentence();
