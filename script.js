window.onload = function() {

		var fileInput = document.getElementById('fileInput');
		var fileInjectArea = document.getElementById('fileInjectArea');


		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var imageType = /.*.javascript/;

			if (file.type.match(imageType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					fileInjectArea.innerHTML = "";

					var img = document.createElement("SCRIPT"); 
					img.src = reader.result;

					fileInjectArea.appendChild(img);
				}

				reader.readAsDataURL(file);	
			} else {
				fileInjectArea.innerHTML = "File not supported!";
			}
		});

}
