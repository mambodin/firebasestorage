console.log('test')
let image = document.getElementById('image')

let uploader = document.getElementById('uploader')
let fileButton = document.getElementById('fileButton')
// Create a root reference


let stringRef = firebase.storage().ref('string.txt')


//listen to file upload

fileButton.addEventListener("change", function(e){
    let file = e.target.files[0];

    let imageRef = firebase.storage().ref(file.name);
    let task = imageRef.put(file);

    task.on('state_changed',
        function progress(snapshot){
            let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            uploader.value = percentage

        },

        function err(err){
            console.log(err)
        },

        function complete(){
            console.log('File uploaded')
        }
    );
})



