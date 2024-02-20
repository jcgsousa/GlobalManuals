function openImage(imageUrl) {
  var windowName = 'ManualImageWindow';
  var windowFeatures = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=800,height=600';
  window.open(imageUrl, windowName, windowFeatures);
}