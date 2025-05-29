<script>
function calcularMedia() {
  const n1 = parseFloat(document.getElementById('nota1').value);
  const n2 = parseFloat(document.getElementById('nota2').value);
  const n3 = parseFloat(document.getElementById('nota3').value);
  const media = (n1 + n2 + n3) / 3;

  let resultado = '';

  if (media >= 60) {
    resultado = `Média: ${media.toFixed(2)} - APROVADO`;
  } else if (media < 20) {
    resultado = `Média: ${media.toFixed(2)} - REPROVADO`;
  } else {
    resultado = `Média: ${media.toFixed(2)} - PROVA FINAL`;
  }

  document.getElementById('resultado').textContent = resultado;
}
</script>