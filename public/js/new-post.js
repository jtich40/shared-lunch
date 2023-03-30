const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const name = document.querySelector('#name').value.trim();
    const contact = document.querySelector('#contact').value.trim();
    if (title, name, contact) {
        const response = await fetch('/api/new-post', {
            method: 'POST',
            body: JSON.stringify({ title, name, contact }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#new-post').addEventListener('click', newPostHandler);