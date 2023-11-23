import fastify from "fastify";
import { studentRoutes } from "./routes/student.routes";
import { courseRoutes } from "./routes/course.routes";
import { campusRoutes } from "./routes/campus.routes";

const app = fastify();

app.register(studentRoutes, {
  prefix: '/student',
})

app.register(courseRoutes, {
  prefix: '/course',
})

app.register(campusRoutes, {
  prefix: '/campus'
})

app.listen({ port: 3030}, () => {
  console.log('Online e roteando! On port 3030.')
})

//campusid c5530ccd-8c1a-4199-a66d-8fa49f5f22f6
//cursoid 26cd7033-bd41-4d54-bbe9-33fd59bc12f6
//studentid 2013b96f-44c6-49ae-8573-a1373f11999d