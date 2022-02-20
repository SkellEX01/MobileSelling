const User = require('./User');

class UserRepository 
{
    constructor(knex) 
    {
        this.knex = knex;
    }

    async getAll() 
    {
        let users = await this.knex.select('*').from('Admin');
        return users.map(user => this.factory(user));
    }

    async findByUsername(username) 
    {
        let [rawUser] = await this.knex.select('*').from('Admin').where('username', username);
        return !!rawUser ? this.factory(rawUser) : null;
    }

    async getById(id) 
    {
        let rawUser = await this.knex.select('*').from('Admin').where('id', id);

        if(rawUser.length) {
            return this.factory(rawUser[0]);
        } 

        return null;
    }

    factory(user) 
    {
        return new User(user);
    }
}

module.exports = UserRepository;
