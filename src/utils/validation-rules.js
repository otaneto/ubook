export const emailRule = (v) => /.+@.+/.test(v) || 'E-mail inválido.';
export const passwordMinLengthRule = (v) => (v && v.length >= 8) || 'A senha deve ter no mínimo 8 caracteres';
export const requiredRule = (v) => !!v || 'O preenchimento desse campo é obrigatório';
