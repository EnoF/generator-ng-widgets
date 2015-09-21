module <%= projectModule %>Test {
  import { library, ctx } = require('../../../test/unit/library');
  var expect = chai.expect;

  library
    .when('some action or perform that will only be executed in this module', () => {
      expect(true).to.equal(false);
    });
}
