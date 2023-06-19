module.exports = (models, services) => {
  const modelDependencyArr = [];
  const serviceDependencyArr = [];
  Object.keys(models).forEach((modelname) => {
    if (modelname == "sequelize" || modelname == "Sequelize") return;
    const model = models[modelname];
    modelDependencyArr.push({
      name: `${modelname[0].toLowerCase() + modelname.slice(1)}Model`,
      model: model,
    });
  });
  Object.keys(services).forEach((serviceName) => {
    const service = services[serviceName];
    serviceDependencyArr.push({
      name: `${serviceName}`,
      service: service,
    });
  });
  return {
    modelsArr: modelDependencyArr,
    servicesArr: serviceDependencyArr,
  };
};
