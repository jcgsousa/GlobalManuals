
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

/* pesquisa no primavera*/

document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.querySelector('.search-box input');
  var searchIcon = document.querySelector('.search-box .icon');
  var searchStatus = document.querySelector('.search-status');

  searchInput.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
          performSearch();
      }
  });

  searchIcon.addEventListener('click', function () {
      performSearch();
  });

  function performSearch() {
      var searchTerm = searchInput.value;

      // Mostrar a mensagem de aguarde
      searchStatus.textContent = '  Aguarde, a pesquisar no HelpCenter Primavera...';

      if (searchTerm.trim() !== '') {
          // Simular um atraso para a pesquisa (você pode remover isso no ambiente de produção)
          setTimeout(function () {
              var searchUrl = 'https://helpcenter.ila.cegid.com/?s=' + encodeURIComponent(searchTerm);
              // Redirecionar para a URL de pesquisa
              window.location.href = searchUrl;
          }, 1000); // Atraso de 1 segundo (1000 milissegundos)
      } else {
          // Se o campo de pesquisa estiver vazio, ocultar a mensagem de aguarde
          searchStatus.textContent = '';
      }
  }
});
