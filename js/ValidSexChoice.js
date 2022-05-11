// Validando Sexo
$('#sexChoice1').blur(function (e) { 
    e.preventDefault();

    sexChoice = []
    
    sexChoice1 = $("#sexChoice1").is(":checked")
    sexChoice2 = $('#sexChoice2').is(":checked")
    
    if (sexChoice1 == true && sexChoice2 == false) {
      sexChoice.push($("#sexChoice1").val())
    }
    
    else if (sexChoice1 == false && sexChoice2 == true) {
      sexChoice.push($("#sexChoice2").val())
    }
    console.log(sexChoice)
});

$('#sexChoice2').blur(function (e) { 
    e.preventDefault();

    sexChoice = []
    
    sexChoice1 = $("#sexChoice1").is(":checked")
    sexChoice2 = $('#sexChoice2').is(":checked")
    
    if (sexChoice1 == true && sexChoice2 == false) {
      sexChoice.push($("#sexChoice1").val())
    }
    
    else if (sexChoice1 == false && sexChoice2 == true) {
      sexChoice.push($("#sexChoice2").val())
    }
    console.log(sexChoice)
});