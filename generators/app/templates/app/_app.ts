module ConREST {
  angular.module('<%= projectName %>.templates', []);

  angular.module('<%= projectName %>.dao', [])
    .factory(DAO);

  angular.module('<%= projectName %>.models', [])
    .factory(Models);

  angular.module('<%= projectName %>', ['<%= projectName %>.<%= projectName %>']);
}
