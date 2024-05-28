$(document).ready(function() {
    // Aplica a máscara ao campo de nome (#nome)
    $('#nome').mask('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', {
        // Define a tradução para a máscara
        translation: {
            // Define o caractere 'S' como aceitando letras (incluindo letras acentuadas)
            'S': { pattern: /[a-zA-ZÀ-ú\s]/, recursive: true }
        }
    });
        
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    });

    $('#cep').mask('00000-000', {
        placeholder: 'xxxxx-xxx'
    });

    $('.formulario').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor insira seu nome."
            },
            email: {
                required: "Por favor, insira seu endereço de e-mail.",
                email: "Por favor, insira um endereço de e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu número de telefone."
            },
            endereco: {
                required: "Por favor, insira seu endereço."
            },
            cpf: {
                required: "Por favor, insira seu CPF."
            },
            cep: {
                required: "Por favor, insira seu CEP."
            }
        },
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso!");
            form.submit();
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
