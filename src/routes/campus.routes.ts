import { FastifyInstance } from 'fastify';
import { CampusCreate } from '../interfaces/campus.interface';
import { CampusUseCase } from '../usecases/campus.usecase';

export async function campusRoutes(fastify: FastifyInstance) {
  const campusUseCase = new CampusUseCase();

  fastify.post<{ Body: CampusCreate }>('/', async (req, reply) => {
    const { name } = req.body;
    try {
      const data = await campusUseCase.create({ name });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get('/', async (req, reply) => {
    try {
      const data = await campusUseCase.getAll();
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const { id } = req.params;
    try {
      const data = await campusUseCase.findById(id);
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.put<{ Params: { id: string }; Body: Partial<CampusCreate> }>('/:id', async (req, reply) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const data = await campusUseCase.update(id, { name });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const { id } = req.params;
    try {
      const data = await campusUseCase.delete(id);
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });
}
