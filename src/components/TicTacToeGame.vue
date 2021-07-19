<template>
  <div class="tic-tac-toe-game">
    <div class="control">
      <button v-show="finishedGame" @click="restart()">Reiniciar</button>
      <h2>Vez do jogador {{currentPlayerText}} {{finishedGame}} - {{winningPlayer}}</h2>
    </div>
    <div class="board">
      <div class="board-row" v-for="(row, i) in board" :key="i">
        <div class="board-col" v-for="(col, j) in row" :key="j" @click.prevent="toggle(i,j)">
          <svg v-show="board[i][j] === 0" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="245" stroke="black" stroke-width="10"/>
          </svg>
          <svg v-show="board[i][j] === 1" width="356" height="355" viewBox="0 0 356 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.646447" y1="354.2" x2="354.2" y2="0.646468" stroke="black" stroke-width="10"/>
            <line x1="1.35355" y1="0.646447" x2="354.907" y2="354.2" stroke="black" stroke-width="10"/>
          </svg>
        </div>
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

    currentPlayer: 0, // iniciar com null
  }),

  computed: {
    currentPlayerText() {
      switch (this.currentPlayer) {
        case 0:
          return 'O';
        case 1:
          return 'X';
        default:
          return "Nenhum";
      }
    },

    boardIsFilled() {
      return this.board.every(el => el.every(el2 => el2 !== null));
    },

    finishedGame() {
      return this.winningPlayer !== null || this.boardIsFilled;
    },

    winningPlayer() {
      const player0Winner = this.checkIfPlayerWinner(0);
      const player1Winner = this.checkIfPlayerWinner(1);

      if (this.boardIsFilled && !player0Winner && !player1Winner) {
        return -1;
      }

      if (player0Winner) {
        return 0;
      }

      if (player1Winner) {
        return 1;
      }

      return null;
    },
  },

  watch: {
    winningPlayer(player) {
      switch (player) {
        case -1:
          alert('Nenhum jogador venceu');
          break;
        case 0:
          alert('Jogador O vencedor');
          break;
        case 1:
          alert('Jogador X vencedor');
          break;
      }
    },
  },

  methods: {
    restart() {
      this.board.forEach(row => row.forEach((_, idx) => this.$set(row, idx, null)));
    },

    nextPlayer() {
      if (this.currentPlayer === 0) {
        this.currentPlayer = 1;
      } else {
        this.currentPlayer = 0;
      }
    },

    checkIfPlayerWinner(player) {
      // Checa se alguma linha foi preenchida ou alguma coluna ou alguma diagonal
      // Linhas
      if (this.board.some(row => row.every(c => c === player))) {
        return true
      }

      // Colunas
      for (let i = 0; i < 3; i++) {
        if (this.board.map(row => row[i]).every(c => c === player)) {
          return true;
        }
      }

      // Diagonais
      if (this.board.map((row, idx) => row[idx]).every(c => c === player)) {
        return true;
      }

      if (this.board.map((row, idx) => row[2 - idx]).every(c => c === player)) {
        return true;
      }

      return false;
    },

    toggle(row, col) {
      if (this.finishedGame) {
        console.info('Jogo já finalizado');
        return;
      }

      if ((this.board[row][col]) !== null) {
        console.info('Posicao já preenchida no tabuleiro');
        return;
      }

      if (this.currentPlayer === 0) {
        this.$set(this.board[row], col, 0);
      } else {
        this.$set(this.board[row], col, 1);
      }

      this.nextPlayer();
    },
  }
}
</script>

<style lang="scss" scoped>
.tic-tac-toe-game {
  display: flex;
  flex-direction: column;
}

.control {
  display: flex;
  justify-content: center;
}

.board {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: repeat(3, minmax(0, 1fr));
  row-gap: 0.125rem;
  overflow: hidden;
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

  svg {
    width: 55%;
    height: 55%;
  }
}
</style>
