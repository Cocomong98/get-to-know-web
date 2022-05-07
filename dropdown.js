document.querySelector('.btn_toggle').onclick = function () {
    let classList = document.querySelector('.list_depth').classList;

    (classList.contains('show'))
        ? classList.remove('show')
        : classList.add('show');
}