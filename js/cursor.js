const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(e){
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});
