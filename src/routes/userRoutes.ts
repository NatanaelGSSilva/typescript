import { Router } from 'express';
import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();
const userRepository = new UserRepository();

userRouter.get('/', (request, response) => {
  response.json(userRepository.findAll());
});

userRouter.post('/', (request, response) => {
  try {
    const service = new CreateUserService(userRepository);
    const { nome, email, tags,id } = request.body;
    const user = service.execute({
      id,
      nome,
      email,
      tags,
    });
    return response.status(201).json(user);
  } catch (error) {
    return response.status(400).json({ Erro: error.message });
  }
});

userRouter.put('/:id', (request,response) => {
  try {
    const id = request.params.id;
    const { nome, email, tags, } = request.body;
    const user = userRepository.update(id, nome, email, tags);
    return response.status(200).json(user);
  } catch (error) {
    return response.status(400).json({ Erro: error.message});
  }
});

export default userRouter;
