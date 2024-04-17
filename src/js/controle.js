let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa(){
    //Pegar o valor digitado no input
    let valorInput = input.value;

    //Se não for vazio, nem nulo e nem indefinido
    if((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)){

        ++contador;

        let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item_icone">
        <span id="icone_${contador}"  class="material-symbols-outlined">
        done
        </span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item_nome">
            ${valorInput}
        </div>
        <div class="item_botao">
            <button onclick="deletar(${contador})" class="delete">
            Delete
            </button>
        </div>
    </div>`;

    //adicionar o novo item no main
    main.innerHTML += novoItem;

    //zerar os campinhos
    input.value = "";
    input.focus();
    }
};
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);
    
    if(classe=="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('material-symbols-outlined');
        icone.classList.add('material-symbols-outlined');

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('material-symbols-outlined');
        icone.classList.add('material-symbols-outlined');
    }
}

input.addEventListener("keyup", function(event){
    //se apertou ENTER(13)
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})