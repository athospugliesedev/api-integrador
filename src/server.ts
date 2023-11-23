import fastify from "fastify";
import { studentRoutes } from "./routes/student.routes";

const app = fastify();

app.register(studentRoutes, {
  prefix: '/student',
})

app.listen({ port: 3030}, () => {
  console.log('Online e roteando! On port 3030.')
})