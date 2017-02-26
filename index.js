
var canvas = new CanvasLayer({
  root: document.getElementById('hnn'),
  height: 100,
  width: 200
})

var hnn = new HNN(16)

hnn.learn([1,1,-1,-1,1,1,-1,-1,1,1,1,1,-1,-1,-1,-1])
hnn.learn([1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,1,1,1])
hnn.recall([-1,1,-1,-1,1,1,1,-1,1,1,-1,-1,-1,-1,1,1], function(pattern,i){
  console.log(i)
  console.log(pattern)
  canvas.clear()
  for(var i = 0; i < pattern.length; i++)
    if(pattern[i] > 0)
      canvas.rect(i*10+10,10,9,9)
    else canvas.rect(i*10+10,10,9,9,'rgba(0,0,0,0.1)')
},100)
