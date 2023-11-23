import { FastifyInstance } from 'fastify';
import { CourseCreate } from '../interfaces/course.interface';
import { CourseUseCase } from '../usecases/course.usecase';

export async function courseRoutes(fastify: FastifyInstance) {
  const courseUseCase = new CourseUseCase();

  fastify.post<{ Body: CourseCreate }>('/', async (req, reply) => {
    const { name, campusId } = req.body;

    try {
      const data = await courseUseCase.create({
        name,
        campusId,
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get('/', async (req, reply) => {
    try {
      const data = await courseUseCase.getAll();
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const { id } = req.params;

    try {
      const data = await courseUseCase.findById(id);
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.put<{ Params: { id: string }; Body: CourseCreate }>('/:id', async (req, reply) => {
    const { id } = req.params;
    const { name, campusId } = req.body;

    try {
      const data = await courseUseCase.update(id, {
        name,
        campusId,
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const { id } = req.params;

    try {
      const data = await courseUseCase.delete(id);
      return reply.send({ success: data });
    } catch (error) {
      reply.send(error);
    }
  });
}
