document.addEventListener("DOMContentLoaded", function() {
  var excerptElements = document.querySelectorAll('.post-excerpt');
  
  excerptElements.forEach(function(excerptElement) {
    var innerHTML = excerptElement.innerHTML.trim();
    var tempContainer = document.createElement('div');
    
    tempContainer.innerHTML = innerHTML;
    
    var firstChild = tempContainer.firstElementChild;
    
    if (firstChild && firstChild.tagName.toLowerCase() !== 'p') {
      var pTag = document.createElement('p');
      pTag.innerHTML = firstChild.innerHTML;
      tempContainer.replaceChild(pTag, firstChild);
      excerptElement.innerHTML = tempContainer.innerHTML;
    }
    
    var truncatedText = excerptElement.innerHTML.substring(0, 150) + '...';
    excerptElement.innerHTML = truncatedText;
  });
});
