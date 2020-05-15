import UserRepository from '../repositories/UserRepository';
import User from '../models/User';

export default class CreateUserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public execute({
    nome,
    email,
    tags }: User): User {

    const user = this.repository.findByEmail(email);// vamos definir o que a função faz
    if(user){
      throw Error('Usuario ja Cadastrado com esse email');
    }else{
    const p = new User({
      nome,
      email,
      tags,
    });
    this.repository.save(p);

    return p;
  }
  }

  // TODO PUT
}
