
function openImage(imageUrl) {
  var img = new Image();
  
  img.onload = function() {
    var imageName = imageUrl.split('/').pop(); 
    document.title = imageName;
    
    var width = img.width;
    var height = img.height;
    
    var newTab = window.open('', '_blank', 'width=' + width + ', height=' + height + ', top=0, left=0');
    newTab.document.write('<html><head><title>' + imageName + '</title></head><body style="margin: 0;"><img src="' + imageUrl + '" width="' + width + '" height="' + height + '" style="display: block;"></body></html>');
  };
  
  img.src = imageUrl;
}
function abrirPaginaTeste(imagem) {
  var novaJanela = window.open('', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no');
  novaJanela.document.write('<html lang="pt-pt"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Zoom Image</title><style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh;overflow:hidden;}img{max-width:100%;max-height:100%;}</style></head><body><ul><div><p><img id="thumbnail01" src="' + imagem + '" alt="Thumbnail Image" /></p></div></ul></body></html>');
  
  novaJanela.document.close();
}