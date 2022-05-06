let items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let subject = item.getAttribute('id');
        window.location.href = `/argomento?materia=${subject.replace('-item', '')}`;
    }
    , false);
});