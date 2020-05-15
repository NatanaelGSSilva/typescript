import { uuid } from 'uuidv4';


export default class User{
  id: string;

  nome: string;

  email: string;

  tags: Array<User>


 constructor({
   nome,
   email,
   tags,
 }: Omit<User, 'id'>){
   this.nome = nome;
   this.email = email;
     this.tags = tags;
   this.id = uuid();
 }
}
