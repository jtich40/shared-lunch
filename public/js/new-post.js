const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const name = document.querySelector('#name').value.trim();
    const content = document.querySelector('#contact').value.trim();
    if (title, name, content) {
        const response = await fetch('/api/new-post', {
            method: 'POST',
            body: JSON.stringify({ title, name, content }),
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