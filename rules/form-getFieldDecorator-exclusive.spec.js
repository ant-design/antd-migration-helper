'use strict';

const check = createRuleChecker('form-getFieldDecorator-exclusive');

describe('Rule: form-getFieldDecorator-exclusive', () => {
  it('matches call expression of `getFieldDecorator`', () => {
    expect(check(`
      <FormItem
        {...formItemLayout}
        label="E-mail"
      >
        {getFieldDecorator('email', {
          exclusive: true,
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }, {
            required: true, message: 'Please input your E-mail!',
          }],
        })(
          <Input />
        )}
      </FormItem>
    `)).toThrowError(/deprecated/);
  })
});
