
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
