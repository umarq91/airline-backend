const { where } = require("sequelize");
const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      console.log("Coming in create ",this.model)
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : create");
      throw error;
    }
  }

  async destroy(query) {
    try {
      const response = await this.model.destroy({
        where: query,
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : destroy");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : get");
      throw error;
    }
  }
  
  async getAll() {
    try {
      const response = await this.model.getAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : get");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the crud Repo : get");
      throw error;
    }
  }
}

module.exports = CrudRepository;
