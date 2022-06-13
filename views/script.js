function getRandomColor () {
    return '#' + (
      '000000' + (Math.random() * 0x1000000).toString(16)
    ).slice(-6)
  }
  
  function color (heading) {
    heading.style.backgroundColor = getRandomColor()
  }
  
  setInterval(color, 300, document.getElementsByClassName('name'))
  