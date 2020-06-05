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

document.querySelector('.settings').addEventListener('click', () => {
    document.querySelector('.settings-modal').style.display = "block";
});

document.querySelector('.save').addEventListener('click', () => {
    document.querySelector('.settings-modal').style.display = "none";
});
var f = 0;
document.querySelector('.help').addEventListener('click', () => {
    if (f == 0) {
        f = 1;
        document.querySelector('.dropdown').style.display = "block";
    } else {
        f = 0;
        document.querySelector('.dropdown').style.display = "none";
    }
});



document.querySelector('.description').addEventListener('click', () => {
    document.querySelector('.help-description-modal').style.display = "block";
});

document.querySelector('.help-description-modal-cross').addEventListener('click', () => {
    document.querySelector('.help-description-modal').style.display = "none";
});

document.querySelector('.manual').addEventListener('click', () => {
    document.querySelector('.help-manual-modal').style.display = "block";
});

document.querySelector('.help-manual-modal-cross').addEventListener('click', () => {
    document.querySelector('.help-manual-modal').style.display = "none";
});

document.querySelector('.how-to').addEventListener('click', () => {
    document.querySelector('.help-how-to-modal').style.display = "block";
});

document.querySelector('.help-how-to-modal-cross').addEventListener('click', () => {
    document.querySelector('.help-how-to-modal').style.display = "none";
});