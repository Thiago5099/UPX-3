document.getElementById('formCadastro').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  try {
    const check = await fetch(`http://localhost:3000/usuarios?email=${email}`);
    const usuarios = await check.json();

    if (usuarios.length > 0) {
      alert('Este e-mail já está cadastrado!');
      return;
    }

    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });

    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
      window.location.href = 'Login.html';
    } else {
      alert('Erro ao cadastrar usuário.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao conectar com o servidor.');
  }
});
