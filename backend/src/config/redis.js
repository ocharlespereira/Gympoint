export default {
  /**
   * se esta rota der problema no terminal aplique os seguintes comandos
   * docker start database
   * docker start redisgympass
   */
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};
