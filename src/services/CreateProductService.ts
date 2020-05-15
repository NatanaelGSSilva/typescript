import ProductRepository from '../repositories/ProductRepository';
import Product from '../models/Product';

export default class CreateProductService { // serviço manipula um repositorio, ou melhor serviço vai ter um repositorio
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {// retorna um produto
    const product = this.repository.findByCode(code);// vamos definir o que a função faz
    if (product) {
      throw Error('Produto já cadastrado');
    } else {
      const p = new Product({
        buyPrice,
        code,
        description,
        lovers,
        sellPrice,
        tags,
      });
      this.repository.save(p);
      return p;
    }
  }

}
