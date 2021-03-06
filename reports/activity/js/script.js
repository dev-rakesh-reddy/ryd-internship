document.querySelector('.filter').addEventListener('click', () => {
    document.querySelector('.modal').style.display = "block";
});

document.querySelector('.filter-cross').addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
});

var checkboxes = document.querySelectorAll('input.subOption'),
    checkall = document.getElementById('your-company');

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function() {
        var checkedCount = document.querySelectorAll('input.subOption:checked').length;

        checkall.checked = checkedCount > 0;
        checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
    }
}

checkall.onclick = function() {
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }
}