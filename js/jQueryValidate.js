$("#formOne").validate({
  rules: {
    userName: {
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    userSurname: {
      required: true,
      minlength: 3,
      maxlength: 20
    },
    userEmail: {
      required: true,
      email: true,
    },
    userEmail_2: {
      required: true,
      email: true,
      equalTo: userEmail
    },
    password: {
      required: true,
      minlength: 6
    },
    password_2: {
      required: true,
      minlength: 6,
      equalTo: password
    },
    birthdate: { required: true },
    // sexChoice: { required: true },
    cpf: { required: true, minlength: 11 },
    rg: { required: true },
    emitting_state: { required: true },
    countries: { required: true },
    marital_status: { required: true },
    phone: { required: true },
    cep: { required: true, minlength: 8 },
    street: { required: true },
    bairro: { required: true },
    localidade: { required: true, minlength: 3 },
    uf: { required: true },
  },

  messages: {
    userName: { required: "Insira seu nome" },
    userSurname: { required: "Insira seu sobrenome"},
    userEmail: { required: "Digite seu e-mail"},
    userEmail_2: { required: "Digite seu e-mail novamente",  equalTo: 'Digite o mesmo e-mail novamente' },
    password: { required: "Digite sua senha" },
    password_2: { required: "Confirme sua senha", equalTo: 'Senhas devem ser iguais' }, 
    birthdate: { required: 'Digite sua data de nascimento'},
    cpf: { required: 'Digite seu CPF' },
    rg: { required: 'Digite seu RG' },
    countries: { required: 'Escolha sua nacionalidade' },
    marital_status: { required: 'Selecione seu estado civil' },
    phone: { required: 'Digite um número de telefone celular' },
    cep: { required: 'Digite seu CEP' },
    street: { required: 'Digite a rua que você reside' },
    bairro: { required: 'Digite o bairro onde você reside' },
    localidade: { required: 'Digite o estado onde você reside' },
    uf: { required: 'Escolha o estado' }
  }

});

$('#cpf').blur(function (e) { e.preventDefault(); $(this).mask('999.999.999-99') })
$('#phone').blur(function (e) { e.preventDefault(); $(this).mask('(99)999999999') })

$('#formOne').submit(function (e) { 
  e.preventDefault();

  var formDataArray = $(this).serializeArray(); 
  console.log(formDataArray)
});


