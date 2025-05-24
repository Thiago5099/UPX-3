function atualizarCorCampo(input) {
  if (input.value.trim() !== '') {
    input.classList.add('filled');
  } else {
    input.classList.remove('filled');
  }
}

document.querySelectorAll('.form-control').forEach(input => {
  // Detecta digitação
  input.addEventListener('input', () => atualizarCorCampo(input));
  
  // Detecta autocompletar, colar, arrastar texto etc.
  input.addEventListener('change', () => atualizarCorCampo(input));

  // Detecta valores já preenchidos ao carregar (ex: navegador salva login)
  window.addEventListener('DOMContentLoaded', () => atualizarCorCampo(input));
});
