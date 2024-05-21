import {Form as VeeForm, Field as VeeField, defineRule,ErrorMessage,configure} from 'vee-validate';
import { required,min,max,email,confirmed } from '@vee-validate/rules';

export default{
    install(app){
        app.component('VeeForm' , VeeForm);
        app.component('VeeField' , VeeField);
        app.component('ErrorMessage',ErrorMessage);
        defineRule('required', required);
        defineRule('tos', required);
        defineRule('min' , min);
         defineRule('max' ,max);

          defineRule('email' ,email);
          defineRule('passwords_mismatch', confirmed);

          configure({

            generateMessage: (ctx) => {
                const messages = {
                  required: ` ${ctx.field} is required.`,
                  min: `The ${ctx.field} is requires at least 6characters`,
                  max: ` ${ctx.field} is too long.`,
                  alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces.`,
                  email: `${ctx.field} must be a valid email.`,
                  passwords_mismatch: "The passwords don't match.",
                  tos: 'You must accept the Terms .',
                };
                const message = messages[ctx.rule.name]
            ? messages[ctx.rule.name]
            : `The field ${ctx.field} is invalid.`;

               return message;
            },
          });



    },
};