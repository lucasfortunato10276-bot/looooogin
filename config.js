<script>
function mostrar(id) {

  const painel = document.querySelector('.painel-config')
  const secoes = painel.querySelectorAll('.secao')

  secoes.forEach(secao => {
    secao.classList.remove('ativa')
  })

  const secaoAtiva = painel.querySelector('#' + id)
  if(secaoAtiva){
    secaoAtiva.classList.add('ativa')
  }

}

/* abre a primeira automaticamente */
document.addEventListener("DOMContentLoaded", function(){
  mostrar('privacidade')
})
</script>