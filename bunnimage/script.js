async function getImage(event) {
  event.preventDefault();
  var myform = document.getElementById('myform');
  //get image and filename uploaded by user via the form
  let nameInput = document.getElementById('username');
  let fileInput = document.getElementById('image');
  let file = fileInput.files[0]; //get image data

  var payload = new FormData(myform);
  console.log(payload);
  payload.append('file', file);
  $('#output').text('Thanks!');

  if (document.getElementById('username').value != '') {
    try {
      let url = 'https://hackervoicee.azurewebsites.net/api/bunnimage-upload';
      console.log('Image was uploaded, making POST request to Azure function');
      // create request to Azure functions
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          "codename": nameInput.value
        },
        body: payload
      });

      $('#output').text('Your image has been stored successfully!');
    } catch (err) {
      $('#output').text(err);
    }
  } else {
    alert('No name error.');
  }
}

async function downloadImage() {
  let username = document.getElementById('downloadusername').value
  console.log("username:" + username)

  if ( username != '') {

   try {
    let url = "https://hackervoicee.azurewebsites.net/api/bunnimage-download"

    console.log("Documented file name; making GET request to download image"); 
  
   fetch(url, {
     headers: {
     username : username
     }
   })
    .then(resp => {
      return resp.json()
      })
    .then(data => {
      console.log(data)
      console.log(data.downloadUri)
      window.open(data.downloadUri, "_self")
      });
  
   } catch(err) {
      alert(err)
   }

  
  } else {
    alert('No name error.');
  }
}
