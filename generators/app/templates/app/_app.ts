module <%= projectModule.toCapital() %> {
  angular.module('<%= projectName %>.templates', []);

  angular.module('<%= projectName %>.dao', []);

  angular.module('<%= projectName %>.models', []);

  angular.module('<%= projectName %>', ['<%= projectName %>.<%= projectName %>']);
}
