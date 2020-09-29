
/**
 TasksList

 addItem(task)
 deleteItem(taskId)
 markAsDone(taskId)
 unMarkAsDone(taskId)
 getTaskList() -> return (sort array isDone = false first)

 Task
 # id
 # content
 # created at
 # isDone

 */


 class Task{
   #id;
   content;
   isDone;

  constructor(id, content, isDone) {
    this.#id = id;
    this.content = content;
    this.isDone = isDone;
  }

  getTaskId(){
    return this.#id;
  }
 }
///////////////////////////////////////////////////////////////////////////////////////////////////////
 class TasksList {
  #taskId;
  tasksList;

  constructor(){
    this.tasksList = [];
    this.#taskId = 0;
  }

  addNewTask(content, isDone){
    let task = new Task(this.#taskId, content, isDone);
    this.#taskId++;
    this.tasksList.push(task);
  }

  deleteTask(taskId){
    let taskIndex = this.tasksList.findIndex((task) => task.getTaskId() === taskId);
    this.tasksList.splice(taskIndex, 1);
  }

  markTaskAsDone(taskId){
    let task = this.tasksList.find((task) => task.getTaskId() === taskId);
    if(!task.isDone){
      task.isDone = true;
    }
  }

  unMarkTaskAsDone(taskId){
    let task = this.tasksList.find((task) => task.getTaskId() === taskId);
    if(task.isDone){
      task.isDone = false;
    }
  }

  getTaskList(){
    this.tasksList.sort((taskA, taskB) =>  taskA.isDone - taskB.isDone);
    return this.tasksList
  }
 }

  

let tasksList = new TasksList();
tasksList.addNewTask('firstTask', false);
tasksList.addNewTask('secondTask', true);
tasksList.addNewTask('thirdTask', true);
// console.log(tasksList);
tasksList.markTaskAsDone(0);
tasksList.unMarkTaskAsDone(1);
tasksList.unMarkTaskAsDone(2);
console.log(tasksList);


console.log(tasksList.getTaskList());

