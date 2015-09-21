import { app } from '../<%= widgetName %>';
import IDirective = ng.IDirective;

module <%= widgetModule %>Directives {
  export function <%= directiveName %>(): IDirective {
    return {
      restrict: 'E',
      scope: {

      },
      controller: '<%= widgetModule %>VM',
      templateUrl: '<%= widgetModule %>'
    };
  }
}

app.directive(<%= widgetModule %>Directives);
export = <%= widgetModule %>Directives;
