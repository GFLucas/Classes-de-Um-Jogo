class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usando magia";
                break;
            case "guerreiro":
                ataque = "usando espada";
                break;
            case "monge":
                ataque = "usando artes marciais";
                break;
            case "ninja":
                ataque = "usando shuriken";
                break;
            default:
                ataque = "usando ataque corpooral";
        }

        const mensagem = `o ${this.tipo} atacou ${ataque}.`;
        console.log(mensagem);
    }
}

const heroi1 = new Heroi("Hércules", 29, "guerreiro");
const heroi2 = new Heroi("Gandalf", 254, "mago");
const heroi3 = new Heroi("Jackie Chan", 60, "monge");
const heroi4 = new Heroi("Itachi", 12, "ninja");


heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();