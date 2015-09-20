<% if (isMainModule) { %>
import { IRouteSetting } from 'core/IRouteSetting';
<% } %>

module <%= projectModule %> {
  <% if (isMainModule) { %>
  var routes: Array<IRouteSetting> = [
    {
      templateUrl: 'pages/homePage',
      routeUrl: '/',
      controller: 'NavigationVM'
    }
  ];
  <% } %>

  export var app = angular.module('<%= projectName %>.<%= projectName %>', []);
  <% if (isMainModule) { %>
  app.config(routeConfig(routes));
  <% } %>
}

exports = module <%= projectModule %>;
