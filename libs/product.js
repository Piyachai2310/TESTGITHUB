const mysql = require("mysql");

module.exports = {
  createProduct: async (pool, productName, productTypeId, detail) => {
    try {
      const sql = "INSERT INTO game (Game_Name, GameType, DetailGame) VALUES (?, ?, ?)";
      const values = [productName, productTypeId, detail];
      const formattedSql = mysql.format(sql, values);
      const result = await pool.query(formattedSql);
      return result;
    } catch (error) {
      console.error("Error in createProduct:", error);
      throw error;
    }
  },


  getByProductId: async (pool, productId) => {
    console.log("----------Enter_GetByProduct-----------")
    var sql = "SELECT * FROM game WHERE gameID = ?"
    sql = mysql.format(sql, [productId])

    return await pool.query(sql);
  },

  updateProduct: async (pool, productId, productName, productTypeId, detail) => {
    try {
      const sql = "UPDATE game SET "
        + "Game_Name =?,"
        + "GameType = ?,"
        + "DetailGame = ?"
        + "WHERE GameID = ?";
      const formattedSql = mysql.format(sql, [productName, productTypeId, detail, productId,]);

      return await pool.query(formattedSql);
    } catch (error) {
      console.error("Error in updateProduct:", error);
      throw error;
    }
  },

  deleteProduct: async (pool, productId) => {
    console.log("Delete_LEVEL 2")
    console.log("productId: " , productId)
    try {
      const sql = "DELETE FROM game WHERE GameID = ?";
      const formattedSql = mysql.format(sql, [productId]);

      return await pool.query(formattedSql);
    } catch (error) {
      console.error("Error in deleteProduct:", error);
      throw error;
    }
  },

  // updateImage: async (pool, productId, fileName) => {
  //   try {
  //     const sql = "UPDATE game SET image_url = ? WHERE GameID = ?";
  //     const formattedSql = mysql.format(sql, [fileName, productId]);

  //     return await pool.query(formattedSql);
  //   } catch (error) {
  //     console.error("Error in updateImage:", error);
  //     throw error;
  //   }
  // }
};
