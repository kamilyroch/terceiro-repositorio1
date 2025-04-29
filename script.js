document.addEventListener('DOMContentLoaded', function() {
   const botaoDecessibilidade = document.getElementById('botao-acessibilidade') 
   const opcoesDecessibilidade = document.getElementById('opcoes-acessibilidade')

   botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeacessibilidade.classList.toggle('apresenta-lista')

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') ===
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   })

const diminuiFonteBotao = document.getElementById('aumentar-fonte')
const diminuiFonteBotao = document.getElementById('diminuir-fonte')

aumentaFonteBotao.addEventListener('click', function() {
   tamanhoAtualFonte += 0.1;
   document.body.style.fontSize = '${tamanhoAtualFonte}rem'
})
diminuirFonteBotao.addEventListener('click', function() {
   tamanhoAtualFonte += 0.1;
   document.body.style.fontSize = '${tamanhoAtualFonte}rem'
})
})   