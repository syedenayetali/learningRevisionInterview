function task1(cb) {
  setTimeout(() => {
    console.log("Task 1");
    cb();
  }, 2000);
}
function task2(cb) {
  setTimeout(() => {
    console.log("Task 2");
    cb();
  }, 1000);
}
function task3(cb) {
  setTimeout(() => {
    console.log("Task 3");
    cb();
  }, 3000);
}
function task4(cb) {
  setTimeout(() => {
    console.log("Task 4");
    cb();
  }, 1500);
}

//these steps are important
task1(() =>
  task2(() =>
    task3(() =>
      task4(() => {
        console.log("All task complete");
      })
    )
  )
);
