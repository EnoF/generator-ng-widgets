import { app } from '../<%= widgetName %>';

module <%= widgetModule %>VMS {
  export class <%= widgetModule %>VM {
    static $inject = ['$scope'];

    constructor($scope) {

    }
  }
}

app.controller(<%= widgetModule %>VMS);
export = <%= widgetModule %>VMS;
