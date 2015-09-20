import { app } from './<%= widgetName %>';

module <%= widgetModule %>VMS {
  export class <%= widgetModule %>VM {
    static $inject = ['$scope'];

    constructor($scope) {

    }
  }
}

app.controller(<%= widgetModule %>VMS);
exports = <%= widgetModule %>VMS;
