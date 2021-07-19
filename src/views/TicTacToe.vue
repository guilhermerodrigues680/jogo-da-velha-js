<template>
  <div class="view">
    <TicTacToeGame class="tic-tac-toe-game"/>
  </div>
</template>

<script>
import TicTacToeGame from "@/components/TicTacToeGame.vue";

export default {
  name: 'TicTacToe',

  components: {
    TicTacToeGame,
  },
}
</script>

<style lang="scss" scoped>
.view {
  display: grid;
  grid-template-columns: minmax(0, 50vw);
  grid-template-rows: minmax(0, 50vh);
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  background-image: radial-gradient(circle farthest-corner at 12.3% 19.3%, #557fea 0%, #85ceec 100.2%);
}

.tic-tac-toe-game {

}
</style>
