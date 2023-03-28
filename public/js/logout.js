const logoutBtn = document.getElementById('logout');
async function logout() {
  const response = await fetch('/api/userRoutes/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

logoutBtn.addEventListener('click', logout);