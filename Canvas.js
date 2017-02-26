
function Canvas(args){

  this.root = args.root
  this.layers = [new CanvasLayer({root:this.root})]

}

function CanvasLayer(args){

  this.root = args.root
  this.canvas = document.createElement('canvas')
  this.context = this.canvas.getContext('2d')

  this.height = this.canvas.height = (args.height || this.root.clientHeight)
  this.width = this.canvas.width = (args.width || this.root.clientWidth)

  this.fillColor = 'black'
  this.strokeColor = 'black'
  this.textColor = 'black'
  this.strokeWidth = 1

  this.canvas.style.position = 'absolute'
  this.canvas.style.top = 0
  this.canvas.style.left = 0
  this.canvas.style.zIndex = args.index || 0
  this.root.appendChild(this.canvas)

}

CanvasLayer.prototype.clear = function(){
  this.context.clearRect(0,0,this.width,this.height)
}

CanvasLayer.prototype.hide = function(){
  this.canvas.style.display = 'none'
}

CanvasLayer.prototype.show = function(){
  this.canvas.style.display = 'block'
}

CanvasLayer.prototype.rect = function(x,y,w,h,color){
  this.context.fillStyle = color || this.fillColor
  this.context.fillRect(x,y,w,h)
}

CanvasLayer.prototype.line = function(x1,y1,x2,y2,color,width){
  this.context.strokeStyle = color || this.strokeColor
  this.context.lineWidth = width || this.strokeWidth
  this.context.beginPath()
  this.context.moveTo(x1,y1)
  this.context.lineTo(x2,y2)
  this.context.stroke()
}
