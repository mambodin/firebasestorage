console.log('test')
let image = document.getElementById('image')
// Create a root reference
let storageRef = firebase.storage().ref('tie.png');

let imageBlob = new File(['tie'],'tie.png',{type: 'image/png'})

storageRef.put(imageBlob).then(function (snapshot) {
    console.log('Uploaded a blob or file!');
});


console.log(storageRef)