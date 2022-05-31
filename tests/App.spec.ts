import { mount } from '@cypress/vue';
import { setActivePinia, createPinia } from 'pinia';
import App from '@/App.vue';

describe('Test App component', () => {

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('works', () => {
    mount(App,);

    cy.get('.layout-sample__title').contains('Vue Template');
  });

});
