//MENU MOBILE
function menuOnClick() {
    document.getElementById("sidebar").classList.toggle("button-active");
    document.getElementById("modal-menu").classList.toggle("modal-menu");

    document.getElementsByTagName("body")[0].classList.toggle("body-overflow-hidden");
}
////////////////


let divDiscussoes = document.getElementsByClassName("padding-first-class")[0];
let botaoCriarTopico = document.getElementById("botao-criar-topico");

function gerarFormPraCriarTopico(){
  let formPraCriarTopico = (
    function criaFormPraCriarTopico(){
      let formPraCriarTopico = document.createElement("div");

      formPraCriarTopico.innerHTML = `
        <div class="p-7">
        <p>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>
        </div>
        <p class="p-8">Assunto</p>
        <input type="text" class="box-assunto-2" placeholder="Defina um tópico sucinto para notificar os autores...">
        <p class="p-8 pp">Conteúdo</p>
        <textarea id="w3review" class="box-assunto-2" rows="4" cols="100"></textarea>
        <div class="box-assunto-3 conteudo-enviar-flex">
            <div>
                <img class="image-shape" src="images/Shape.svg" alt="">
                <img src="images/Shape2.svg" alt="">
            </div>
            <div id="botao-enviar-topico" class="clicar">
                <p class="p-9">Enviar</p>
            </div>
        </div>
      `;
      formPraCriarTopico.classList.add("divv");

      return formPraCriarTopico;
  })();

  function criarDivDeConfirmacao(){
    let novoTopico = document.createElement("div");
    novoTopico.classList.add("panel-1");
    novoTopico.innerHTML = `
        <div class="box-assunto novo-topico">
            <div class="confirmacao-novo-topico feedback-flex">
                <img src="images/setas.svg" alt="">
                    <p class="p-10">Aguardando feedback dos autores</p>
                    <p class="descobrir-1">Editar tópico</p>
            </div>
            <div class="overlay-novo-topico"></div>
            <p class="p-3">Assunto da pergunta aparece aqui</p>
            <p class="p-4">Carlos Henrique Santos</p>
            <p class="p-5">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>
    `;
    document.getElementById("topicos").prepend(novoTopico);


    let divDeConfirmacao = document.createElement("div");
    divDeConfirmacao.classList.add("flex-discussoes");
    divDeConfirmacao.innerHTML = `
    <p class="p-1">Seu tópico foi enviado com sucesso! :D</p>
    <p class="p-2">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
    <p class="descobrir">Descubra outros trabalhos!</p>
    <div id="botao-novo-topico" class="flex-topico clicar">
        <a class="a-img-p" href="#" title="Criar tópico"></a>
            <div class="novotopico-margin"><p class="p-criar-topico">criar novo tópico</p></div>
        </a>
    </div>
    `;

    divDeConfirmacao.children[3].addEventListener("click", gerarFormPraCriarTopico);

    divDiscussoes.innerHTML = "";
    divDiscussoes.append(divDeConfirmacao);
  }
  formPraCriarTopico.children[5].children[1].addEventListener("click", criarDivDeConfirmacao);

  divDiscussoes.innerHTML = "";
  divDiscussoes.append(formPraCriarTopico);
}

botaoCriarTopico.addEventListener("click", gerarFormPraCriarTopico);