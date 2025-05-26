document.getElementById('formLogin').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const response = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`);
    const usuarios = await response.json();

    if (usuarios.length > 0) {
      alert('Login realizado com sucesso!');
      window.location.href = 'index.html';
    } else {
      alert('E-mail ou senha inválidos!');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao conectar com o servidor.');
  }
});
