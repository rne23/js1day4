// To-Do List Building App

/* Array holding the arrays of each task. */
var toDo = [];
var confirmationStr =
`Would you like to create a To-Do List? Give a name for a
 task (e.g., "Homework" or "Laundry") followed by a rank for each task (e.g.,
for a list of five tasks, "1" for the most important task and "5" for the least
important task). The most important task MUST have a rank of 1.`;

confirmation = confirm(confirmationStr);

/*Builds the To-Do list. */
if (confirmation == true) {
  numberofTasks = prompt(`Please enter the number of tasks you would like to
complete this weekend:`);
  for (i=0; i < numberofTasks; i++) {
    taskName = prompt(`Please enter a name for a task:`);
    taskRank = prompt(`Please enter a rank for the task:`);
    toDo.push([taskName, taskRank]);
  }
}

/* Sorts To-Do array in order from most important to least important. */
alert("Your To-Do list so far: " + toDo.sort());

/* Searches for the second-most important task and removes it from the array. */
for (let x of toDo) {
  if (x[1] == 2) {
    toDo.splice(x,1)
  }
}

/* Searches for the least important task and removes it from the array. */
i = 0;
while (i < toDo.length) {
  if (toDo[i][1] == Math.max.apply(null, toDo)) {
    toDo.splice(toDo[i],1);
  } else {
      i++;
  }
}

/* Adds 'done' to all the tasks other than the most important one. */
i = toDo.length - 1;
do {
  toDo[i][0] += ' (DONE)';
  i--;
} while ( i != 0);

/* Alerts all the tasks that are marked done in the todo array. */
alertTaskArray = [];
for (let x of toDo) {
  test = x[0].search('(DONE)');
  if (test > -1) {
    alertTaskArray.push(x[0]);
  }
}

alert(alertTaskArray);
