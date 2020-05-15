import User from '../models/User';
// classe que conversa com o model é um Controller
 export default class UserRepository{
  private users: Array<User>

  constructor(){
    this.users = [];
  }

  public findAll(): Array<User> {
    return this.users;
  }

  public findByid(id: string): User | undefined {
    return this.users.find(value => value.id === id);
  }

  public findByEmail(email: string): User | undefined{
    return this.users.find(value => value.email === email);
  }

  public save({// vai receber o que do produto, eu peguei esses carinhas do meu produto
    nome,
    email,
    tags,
  }: User): User {// recebe um produto e retorna um produto
    const user = new User({
      nome,
      email,
      tags,
    });
    this.users.push(user);
    return user; // depois de persistir ele retona um product
  }
}
