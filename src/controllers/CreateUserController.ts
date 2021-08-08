import { response } from "express";
import { Request, Response } from "express-serve-static-core";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ name, email, admin });
    return response.json(user);
  }
}

export { CreateUserController };
