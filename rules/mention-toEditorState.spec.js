
'use strict';

const check = createRuleChecker('mention-toEditorState');

describe('Rule: mention-toEditorState', () => {
  it('matches toEditorState call`', () => {
    expect(check('toEditorState()')).toThrow();
    expect(check('toEditorState(x)')).toThrow();
  });
});
