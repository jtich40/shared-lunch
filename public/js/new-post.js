const newPostHandler = async (event) => {
    event.preventDefault();
    const contact = document.querySelector('#contact').value.trim();
    const name = document.querySelector('#name').value.trim();
    const content = document.querySelector('#content').value.trim();
    if (name, content, contact) {
        const response = await fetch('/api/new-post', {
            method: 'POST',
            body: JSON.stringify({ name, contact, content }),
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