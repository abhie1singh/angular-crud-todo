import { AngularCrudTodoPage } from './app.po';

describe('angular-crud-todo App', function() {
  let page: AngularCrudTodoPage;

  beforeEach(() => {
    page = new AngularCrudTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
