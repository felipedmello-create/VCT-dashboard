const sideItem = document.querySelectorAll(".side-item");

sideItem.forEach(function(item) {
    item.addEventListener('click', function() {
        sideItem.forEach(function(i) {
            i.classList.remove('selected')
        });
    
        item.classList.add('selected');
    });
});

const btns = document.querySelectorAll('.btn-group button');

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        btns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});
