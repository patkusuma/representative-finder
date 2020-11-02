function getRepresentativeButton() {
    var address = document.getElementById("street-address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var fullAddress = address + ", " + city + ", " + state;
    var result = controller.getRepresentatives(fullAddress);
}