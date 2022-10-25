class Chronometer {
  
  constructor() {
    this.currentTime = 0;   
    this.intervalId  = null; 
  }

  start(printTimeCallback) {    
    this.intervalId = setInterval(()=>
    {
      if(printTimeCallback)
          printTimeCallback();
      this.currentTime+=1;
    },1000);
  }
    
  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    let seconds = (this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let numero = value.toString().split("");
    if (numero.length  ===  1)
        return "0"+value;
    else
        return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
    clearTimeout();
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
