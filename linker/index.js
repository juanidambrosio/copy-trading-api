const link = require("./link");

const run = async () => {
  try {
    await link();
  } catch (error) {
    console.log(error.message);
  }
};

run();
