//  function openImage(imageUrl) {
//   var windowName = 'ManualImageWindow';
//   var windowFeatures = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=800,height=600';
//   window.open(imageUrl, '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=800,height=600');
//  }

// teste abrir a imagem e ajustar a janela à dimensão da foto e dar nome à janela 
function openImage(imageUrl) {
  
  var img = new Image();
  
  img.onload = function() {
    var imageName = imageUrl.split('/').pop(); 
    document.title = imageName;
    var width = img.width;
    var height = img.height;
    var windowFeatures = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=' + width + ',height=' + height;
    window.open(imageUrl, '_blank', windowFeatures);
  };
  
  img.src = imageUrl;
}


