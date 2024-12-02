export const usuarios = [{email: 'teste@teste.com.br', senha:'123456'}]
export const adicionarUsuario = (email, senha) => {
    usuarios.push({ email, senha });
};