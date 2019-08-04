exports.getRootPath = (env) => {
  console.log(env);
    return env === 'development' ? 'https://www.fotopus9m.com' : ''
};
