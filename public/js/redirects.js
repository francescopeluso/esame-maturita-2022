let items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let subject = item.getAttribute('id');
        window.location.href = `/#links`;
    }
    , false);
});