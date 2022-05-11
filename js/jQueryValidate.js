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
    phone: { required: true, number: true },
    cep: { required: true, minlength: 8 },
    street: { required: true },
    bairro: { required: true },
    localidade: { required: true, minlength: 3 },
    uf: { required: true },
    // submitHandler: function(form) {
    //       $.post("url", data,
    //         function (data, textStatus, jqXHR) {
              
    //         },
    //         "dataType"
    //       );
    //     form.submit();
    //   }
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

// Validando Sexo

// $('#sexChoice1').blur(function (e) { 
//     e.preventDefault();
//     sexChoice = []
    
//     sexChoice1 = $("#sexChoice1").is(":checked")
//     sexChoice2 = $('#sexChoice2').is(":checked")
    
//     console.log(sexChoice1)
    
//     if (sexChoice1 == true && sexChoice2 == false) {
    
//       sexChoice.push($("#sexChoice1").val())
    
//     }
    
//     else if (sexChoice2 == true && sexChoice1 == false) {
    
//       sexChoice.push($("#sexChoice2").val())
    
//     }
//     else {
    
//     }    
// });



