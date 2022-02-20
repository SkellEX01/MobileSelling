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
        let [user] = await this.knex.select('*').from('Admin').where('username', username);
        return !!user ? this.factory(user) : null;
    }

    async getById(id) 
    {
        let user = await this.knex.select('*').from('Admin').where('id', id);
        return user.length ? this.factory(user[0]) : null;
    }

    factory(user) 
    {
        return new User(user);
    }
}

module.exports = UserRepository;
