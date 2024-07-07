import { Request, Response } from "express";
import ListProductService from "../services/ListProductService";
import ShowProducService from "../services/ShowProductService";
import CreateProducService from "../services/CreateProductService";
import UpdateProducService from "../services/UpdateProductService";
import DeleteProducService from "../services/DeleteProductService";

export default class ProductsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.execute();

    return res.json(products)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showProduct = new ShowProducService();

    const product = await showProduct.execute({ id });

    return res.json(product);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body;

    const createProduct = new CreateProducService();

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    })

    return res.json(product);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body;
    const { id } = req.params;

    const updateProduct = new UpdateProducService();

    const product = await updateProduct.execute({
      id,
      name,
      price,
      quantity,
    })

    return res.json(product);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteProduct = new DeleteProducService();

    await deleteProduct.execute({ id });

    return res.json([])

  }
}
