import { createTest, destroyVM } from '../util';
import Split from 'packages/split';

describe('Split', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Split, true);
    expect(vm.$el).to.exist;
  });
});

