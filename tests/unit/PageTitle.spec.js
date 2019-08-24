import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import PageTitle from '@/components/PageTitle.vue';

describe('PageTitle.vue', () => {
  it('renders props.pageTitle when passed', () => {
    const pageTitle = 'new title';
    const wrapper = shallowMount(PageTitle, {
      propsData: {
        pageTitle,
      },
    });
    expect(wrapper.text()).to.include(pageTitle);
  });
});
