$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });
    $('.menu-hambuger').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone') .mask('(00)00000-0000')

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            mensagem:{
                required: true
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, Insira seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncoretos = validador.numberOfInvalids();
            if (camposIncoretos){
                alert(`Existem ${camposIncoretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({

            scrollTop: destino.offset().top
        }, 1000)
    })
})