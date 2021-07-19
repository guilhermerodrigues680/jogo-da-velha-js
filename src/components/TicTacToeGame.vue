<template>
  <div class="tic-tac-toe-game">
    <div class="board-row" v-for="(row, i) in board" :key="i">
      <div class="board-col" v-for="(col, j) in row" :key="j" @click.prevent="toggle(i,j)">
        <span>
          <svg v-show="board[i][j] === 0" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="245" stroke="black" stroke-width="10"/>
          </svg>
          <svg v-show="board[i][j] === 1" width="356" height="355" viewBox="0 0 356 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.646447" y1="354.2" x2="354.2" y2="0.646468" stroke="black" stroke-width="10"/>
            <line x1="1.35355" y1="0.646447" x2="354.907" y2="354.2" stroke="black" stroke-width="10"/>
          </svg>
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
  // https://stackoverflow.com/questions/45049873/how-to-remove-the-blue-highlight-of-button-on-mobile
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.125s cubic-bezier(0.22, 1, 0.36, 1);


  // https://medium.com/@mezoistvan/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(#c1c8e4, 0.75);
    }
  }

  &:active {
    background: rgba(#c1c8e4, 1);
  }

  span {
    width: 55%;
    height: 55%;
    display: inline-flex;
    flex-direction: column;

    svg {
      width: 100%;
    }
  }
}
</style>
