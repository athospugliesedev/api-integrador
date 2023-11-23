import { FastifyInstance } from 'fastify';
import { StudentCreate } from '../interfaces/student.interface';
import { StudentUseCase } from '../usecases/student.usecase';

export async function studentRoutes(fastify: FastifyInstance) {
  const studentUseCase = new StudentUseCase();

  fastify.post<{ Body: StudentCreate }>('/', async (req, reply) => {
    const { enrollment, name, courseId, email, password } = req.body;
    try {
      const data = await studentUseCase.create({
        enrollment,
        name,
        courseId,
        email,
        password
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const { id } = req.params;
    const data = await studentUseCase.getById(id);
    if (data) {
      return reply.send(data);
    } else {
      reply.status(404).send({ error: 'Student not found' });
    }
  });

  fastify.get('/', async (req, reply) => {
    const data = await studentUseCase.getAll();
    reply.send(data);
  });

  fastify.patch<{ Params: { id: string }; Body: Partial<StudentCreate> }>('/:id', async (req, reply) => {
    const { id } = req.params;
    const { enrollment, name, courseId } = req.body;
    const data = await studentUseCase.update(id, { enrollment, name, courseId });
    if (data) {
      return reply.send(data);
    } else {
      reply.status(404).send({ error: 'Student not found' });
    }
  });

  fastify.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const { id } = req.params;
    const success = await studentUseCase.delete(id);
    if (success) {
      reply.send({ success: true });
    } else {
      reply.status(404).send({ error: 'Student not found' });
    }
  });
}
