class Pipoca {
    constructor(tamanho, sabor, preco) {
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.preco = preco;
    }
}

class InteracaoPipocas {
    constructor() {
        this.tamanhos = ['Pequena', 'Média', 'Grande'];
        this.sabores = ['Salgada', 'Caramelo', 'Doce'];
        this.precos = { 'Pequena': 7.50, 'Média': 8.67, 'Grande': 10.99 };

        this.pipocas = this.criarCombinacoes();
    }

    criarCombinacoes() {
        const pipocas = [];
        this.tamanhos.forEach(tamanho => {
            this.sabores.forEach(sabor => {
                pipocas.push(new Pipoca(tamanho, sabor, this.precos[tamanho]));
            });
        });
        return pipocas;
    }

    encontrarPipoca(tamanho, sabor) {
        return this.pipocas.find(pipoca => pipoca.tamanho === tamanho && pipoca.sabor === sabor);
    }

    iniciarPipos() {
        let tamanho = prompt(`Insira o tamanho de sua pipoca (${this.tamanhos.join(", ")})`);
        let sabor = prompt(`Insira o sabor de sua pipoca (${this.sabores.join(", ")})`);

        let pipocaSugerida = this.encontrarPipoca(tamanho, sabor);

        if (pipocaSugerida) {
            alert(`Você escolheu uma pipoca ${pipocaSugerida.tamanho} com sabor ${pipocaSugerida.sabor}. \nPreço: R$ ${pipocaSugerida.preco.toFixed(2)}`);
        } else {
            alert('Desculpe, não encontramos essa especificação de tamanho e sabor.');
        }
    }
}

let simulador = new InteracaoPipocas();
simulador.iniciarPipos();


