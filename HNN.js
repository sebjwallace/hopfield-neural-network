
function HNN(numNeurons){

  this.weights = []
  this.patterns = []

  for(var i = 0; i < numNeurons; i++)
    this.weights[i] = this.addNeuron(numNeurons)

}

HNN.prototype.learn = function(input){

  for(var x = 0; x < input.length; x++)
    for(var y = 0; y < input.length; y++)
      this.weights[x][y] += input[x] * input[y]

  this.patterns.push(input)

}

HNN.prototype.recall = function(input,callback,delay){

  var self = this

  function activate(input,weights,ignore){
    var sum = 0
    for(var n = 0; n < input.length; n++)
        if(n != ignore)
          sum += input[n] * weights[n]
    if(sum >= 0) return 1
    else return -1
  }

  function randomActivation(input){
    var randomIndex = randomInt(0,input.length-1)
    var randomNeuron = self.weights[randomIndex]
    input[randomIndex] = activate(input,randomNeuron,randomIndex)
    if(callback)
      callback(input,i)
    if(self.hasPattern(input))
      return true
  }

  if(delay){
    var interval;
    interval = setInterval(function(){
      if(randomActivation(input))
        clearInterval(interval)
    },delay)
  } else{
    for(var i = 0; i < 100; i++)
      if(randomActivation(input))
        return true
  }

}

HNN.prototype.hasPattern = function(pattern){

  pattern = pattern.toString()

  for(var i = 0; i < this.patterns.length; i++)
    if(pattern == this.patterns[i].toString())
      return true

  return false

}

HNN.prototype.addNeuron = function(numWeights){

  var weights = []

  for(var i = 0; i < numWeights; i++)
    weights[i] = 0

  return weights

}
