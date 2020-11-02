var controller = {
    getRepresentatives: function(fullAddress) {
        var result = null;
        console.log(fullAddress);
            $.ajax({
                type: "GET",
                url: "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCaNM5QKw9kBXQEBW8UqYctOh4MWz4G0hI",
                dataType: 'json',
                data: {
                    address: fullAddress
                },
                async: false,
                error: function(xhr, error){
                    console.debug(xhr); 
                    console.debug(error);
                },
                success: function(response) {
                    console.log(response);
                    result = response;
                }
            });
        return result;
    }
}