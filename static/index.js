function thanks()
{
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    console.log(name, phone);
    var url = "https://wa.me/91"+phone+ "?text=" + "ThankYou For Joining Us " + name + "We are glad you joined us!";
    window.open(url, '_blank').focus();
}