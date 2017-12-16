
'use strict';

const check = createRuleChecker('mention-toEditorState');

describe('Rule: mention-toEditorState', () => {
  it('matches toEditorState call`', () => {
    expect(check('toEditorState()')).toThrowError(/deprecated/);
    expect(check('toEditorState(x)')).toThrowError(/deprecated/);
  });
});
