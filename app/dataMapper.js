const client = require('./database');

const dataMapper = {

    async getAllFigurines(){
        const query = 'SELECT * FROM "figurine";';
        const result = await client.query(query);
        return result.rows;
    },
    async getOneFigurine(id){
        const query = 'SELCET * FROM "figurine" WHERE ID = $1;';
        const result = await client.query(query, id);
        return result.rows[0];
    }
};


module.exports = dataMapper;