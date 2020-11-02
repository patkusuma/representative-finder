function getRepresentativeButton() {
    resetFields();
    var address = document.getElementById("street-address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var fullAddress = address + ", " + city + ", " + state;
    var result = controller.getRepresentatives(fullAddress);
    generateSenatorInfo(document.getElementById("senator"), result);
}

function generateSenatorInfo(containerNode, rawAPIData) {
    var title = document.createElement("h2");
    title.id = "senatorTitle"
    title.innerHTML = "Your senators";
    containerNode.appendChild(title);
    var senatorIndices = rawAPIData.offices[2].officialIndices;
    console.log(senatorIndices);
    for (i in senatorIndices) {
        var senatorData = document.createElement("div");
        var name = document.createElement("h3");
        name.innerHTML = rawAPIData.officials[senatorIndices[i]].name;
        var phone = document.createElement("p");
        phone.innerHTML = "Phone: " + rawAPIData.officials[senatorIndices[i]].phones[0];
        var address = document.createElement("p");
        address.innerHTML = "Address: " + rawAPIData.officials[senatorIndices[i]].address[0].line1 + 
        "<br />" + rawAPIData.officials[senatorIndices[i]].address[0].city + 
        ", " + rawAPIData.officials[senatorIndices[i]].address[0].state + 
        " " + rawAPIData.officials[senatorIndices[i]].address[0].zip;
        var pic = document.createElement("img")
        pic.src = rawAPIData.officials[senatorIndices[i]].photoUrl;
        console.log(rawAPIData.officials[senatorIndices[i]].photoUrl);
        senatorData.appendChild(name);
        senatorData.appendChild(pic);
        senatorData.appendChild(phone);
        senatorData.appendChild(address);
        containerNode.appendChild(senatorData);
    }
}

function resetFields() {
    if (document.getElementById("senator")) {
        var oldSenatorData = document.getElementById("senator");
        oldSenatorData.parentNode.removeChild(oldSenatorData);
        var newSenatorData = document.createElement("div");
        newSenatorData.id = "senator";
        document.body.appendChild(newSenatorData);
    }
}