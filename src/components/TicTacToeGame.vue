<template>
  <div class="tic-tac-toe-game">
    <div class="board-row" v-for="(row, i) in board" :key="i">
      <div class="board-col" v-for="(col, j) in row" :key="j" @click="toggle(i,j)">
        <span
          :class="{
            'marked-with-o': board[i][j] === 0,
            'marked-with-x': board[i][j] === 1,
            'unmarked': board[i][j] === null,
          }"
        >
          <!-- {{`board[${i}][${j}] === ${board[i][j]}`}} -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicTacToeGame',

  data: () => ({
    board: [ // null, 0 e 1
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  }),

  methods: {
    toggle(row, col) {
      switch (this.board[row][col]) {
        case null:
          this.$set(this.board[row], col, 0);
          break;
        case 0:
          this.$set(this.board[row], col, 1);
          break;
        default:
          this.$set(this.board[row], col, null);
          break;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.tic-tac-toe-game {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: repeat(3, minmax(0, 1fr));
  row-gap: 0.125rem;
}

.board-row {
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 0.125rem;
}

.board-col {
  background: rgba(#c1c8e4, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.875rem;
  user-select: none;
  cursor: pointer;
  position: relative;

  &:hover {
    background: rgba(#c1c8e4, 0.75);
  }

  &:active {
    background: rgba(#c1c8e4, 1);
  }

  .marked-with-o {
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      border: 0.5rem solid black;
      transform: translate(-50%, -50%);
    }
  }

  .marked-with-x {
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      border-top: 0.5rem solid black;
    }

    &::before {
      transform: translate(-50%, -50%) rotateZ(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotateZ(45deg);
    }
  }

  .unmarked {

  }
}
</style>
