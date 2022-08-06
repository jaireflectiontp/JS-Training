let details = '';
$(document).ready(function () {

    $('#filterthis').click(function () {
        $.ajax({
            url: './index.json',
            success: function (emp) {
                details = emp;
            }
        })
    })
    $('#filterthis').keyup(function () {
    filterdata()
    })
})
const filterdata = () => {
    let output = $('#filterthis').val();
    let text = '';
    details.map((store) => {
        console.log(store)
        if (store.id == output) {
            text += '<tr><td>' + store.name + '</td></tr>'
        }
    })
    $('#option').html(text)
}