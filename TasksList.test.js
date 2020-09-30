const TasksList = require('./TasksList').TasksList;
const Task = require('./TasksList').Task;

describe('TaskList', () => {
  describe('addNewTask', () => {
    it('should set new task and return task id = 0', () => {
      const tasksList = new TasksList();
      const idResult = tasksList.addNewTask('task 1', true);
      const idExcepted = 0;
  
      expect(idResult).toEqual(idExcepted);
    });
  
    it('should throw error when content arg is not string type', () => {0
      const tasksList = new TasksList();
      // null
      expect(() => { 
        tasksList.addNewTask( null , true);
      }).toThrow('Invalid arg: content must be string type');
      // undefined
      expect(() => {
        tasksList.addNewTask( undefined , true);
      }).toThrow('Invalid arg: content must be string type');
      // object
      expect(() => {
        tasksList.addNewTask( {} , true);
      }).toThrow('Invalid arg: content must be string type');
      // boolean
      expect(() => {
        tasksList.addNewTask( true , true);
      }).toThrow('Invalid arg: content must be string type');
      // number
      expect(() => {
        tasksList.addNewTask( 1 , true);
      }).toThrow('Invalid arg: content must be string type');
    });
  
    it('should throw error when isDone arg is not boolean type', () => {
      const tasksList = new TasksList();
      // null
      expect(() => { 
        tasksList.addNewTask( 'task 1' , null);
      }).toThrow('Invalid arg: isDone must be boolean type');
      // undefined
      expect(() => {
        tasksList.addNewTask( 'task 1' , undefined);
      }).toThrow('Invalid arg: isDone must be boolean type');
      // object
      expect(() => {
        tasksList.addNewTask( 'task 1' , {});
      }).toThrow('Invalid arg: isDone must be boolean type');
      // string
      expect(() => {
        tasksList.addNewTask( 'task 1' , 'true');
      }).toThrow('Invalid arg: isDone must be boolean type');
      // number
      expect(() => {
        tasksList.addNewTask( 'task 1' , 1);
      }).toThrow('Invalid arg: isDone must be boolean type');
    });
  
  });

  describe('deleteTask', () => {
    it('should return id of deleted task' , () => {
      const tasksList = new TasksList();
      const taskIdToDelete = tasksList.addNewTask('task 1', true);
      const deletedTaskId = tasksList.deleteTask(taskIdToDelete);
      expect(deletedTaskId).toBe(taskIdToDelete);
    });

    test('The number of tasks is reduced by 1', () => {
      const tasksList = new TasksList();
      tasksList.addNewTask('task 1', true);
      const taskToDeleteId = tasksList.addNewTask('task 2', true);
      const initialTasksCount = tasksList.getTasksCount();
      tasksList.deleteTask(taskToDeleteId);
      const updatedTasksCount = tasksList.getTasksCount();
      expect(updatedTasksCount).toBe(initialTasksCount - 1);
    });

    it('should throw error when task id not exist in tasks list' , () => {
      const tasksList = new TasksList();
      expect(() => { 
        tasksList.deleteTask(10);
      }).toThrow('task id not exist');
    });
  });
});


// describe('tic-tac-toe', () => {
//   describe('markCell', () => {
//       it('should set the given cell to the given sign', () => {
//           ticTacToe.newGame();

//           ticTacToe.markCell(0, 1, 'X');

//           const result = ticTacToe.getBoard();

//           const expected = [
//               [null, 'X', null],
//               [null, null, null],
//               [null, null, null],
//           ];

//           expect(result).toEqual(expected);
//       });

  //     it('should throw error when cell is already marked', () => {
  //         ticTacToe.newGame();

  //         ticTacToe.markCell(1, 0, 'X');

  //         expect(() => {
  //             ticTacToe.markCell(1, 0, 'O');
  //         }).toThrow('cell is already taken!');
  //     });
  // });

  // describe('getBoard', () => {
  //     it('should return initialized board', () => {
  //         ticTacToe.newGame();
  //         const result = ticTacToe.getBoard();
  //         const expected = [
  //             [null, null, null],
  //             [null, null, null],
  //             [null, null, null],
  //         ];
  //         expect(result).toEqual(expected);
  //     });
  // });
// });