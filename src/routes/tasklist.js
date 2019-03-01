const TaskDao = require("../models/TaskDao");

class TaskList {
  /**
   * Handles the various APIs for displaying and managing tasks
   * @param {TaskDao} taskDao
   */
  constructor(taskDao) {
    this.taskDao = taskDao;
  }

  
  async showTasks(req, res) {

    try{
        console.log("Success");
        const querySpec = {
          query: "SELECT * FROM c"
        };
      
        const items = await this.taskDao.find(querySpec);
       // console.log("items",items);
        res.send(items);
    }
    catch(e){
      console.log(e);
    }

  }

  async getTaskById(req,res){
    try{
      // const queryById = {
      //   query: "select * FROM c where c.id = '" + req.params.Id + "'"
      // }
      console.log("Id",req.params.Id);
      const item = await this.taskDao.getItemById(req.params.Id);
      res.send(item);
    }
    catch(err){
      console.log(err);
    }
  }

  async addTask(req, res) {
    try{
      const item = req.body;

      await this.taskDao.addItem(item);
      res.redirect("/");
    }
    catch(err){
      console.log(err);
    }
  }

  async updateTask(req, res) {
    try
    {
      // const updatedTasks = Object.keys(req.body);
      // const tasks = [];
      // console.log("updatedTasks",updatedTasks);
      // updatedTasks.forEach(task => {
      //   tasks.push(this.taskDao.updateItem(task));
      // });

      const item = req.body;
      console.log("item",item);
      await this.taskDao.updateItem(item);
      res.redirect("/");
    }
    catch(err){
      console.log(err);
    }
  }

  async deleteTask(req , res){
    try{
        const itemId = req.params.Id;
        console.log("itemId",itemId);
        await this.taskDao.deleteItem(itemId);
        res.redirect("/");
    }
    catch(ex){
      console.log(ex);
    }
  }
}

module.exports = TaskList;
