document.addEventListener('DOMContentLoaded', function() {
   const botaoDecessibilidade = document.getElementById('botao-acessibilidade') 
   const opcoesDecessibilidade = document.getElementById('opcoes-acessibilidade')

   botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeacessibilidade.classList.toggle('apresenta-lista')

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') ===
    botaoDeAcessibilidade.setAttribute('aria-expanded'), !botaoSelecionado
   })
})