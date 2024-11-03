var anoNascimento = prompt("Informe o seu ano de nascimento: ");
var anoAtual = prompt("Informe o ano atual: ");
var idade = anoAtual - anoNascimento;

if (idade < 0) {
  console.log("Error: Ano de nascimento invalido, Tente novamente");
} else {
  console.log("A sua idade é" + idade);
}
