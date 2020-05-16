new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame(){
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack(){
      this.monsterHealth -= this.calculateDamage(3,10);
      if(this.checkWin()) {
        return
      }
      this.monsterAttack()
    },
    specialAttack(){
      this.monsterHealth -= this.calculateDamage(10,20);
      if(this.checkWin()) {
        return
      }
      this.monsterAttack()
    },
    heal(){
      console.log("Healed")
    },
    giveUp(){
      console.log("Given up")
    },
    monsterAttack(){
      this.playerHealth -= this.calculateDamage(5,12)
      this.checkWin()
    },
    calculateDamage(min,max){
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin(){
      if(this.monsterHealth <= 0){
        if(confirm('You Won! New Game?')){
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if(this.playerHealth <= 0) {
        if(confirm('Oops you Lost! Play Again?')){
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    }
  }
})