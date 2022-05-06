let items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let url = item.getAttribute('id');
        window.location.href = url.replace('-item', '');
    }
    , false);
});