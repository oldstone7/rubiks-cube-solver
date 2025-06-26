class Cube {
  constructor() {
  this.faces = {
  U: Array(9).fill('w'),
  D: Array(9).fill('y'),
  F: Array(9).fill('g'),
  B: Array(9).fill('b'),
  L: Array(9).fill('o'),
  R: Array(9).fill('r')
  };
  this.moveHistory = [];
  }
  
  rotateFace(face, direction) {
      const original = this.faces[face];
      let rotated = [];
  
      if (direction === 'clockwise') {
          rotated[0] = original[6];
          rotated[1] = original[3];
          rotated[2] = original[0];
          rotated[3] = original[7];
          rotated[4] = original[4];
          rotated[5] = original[1];
          rotated[6] = original[8];
          rotated[7] = original[5];
          rotated[8] = original[2];
      } else if (direction === 'counter-clockwise') {
          rotated[0] = original[2];
          rotated[1] = original[5];
          rotated[2] = original[8];
          rotated[3] = original[1];
          rotated[4] = original[4];
          rotated[5] = original[7];
          rotated[6] = original[0];
          rotated[7] = original[3];
          rotated[8] = original[6];
      }
  
      this.faces[face] = rotated;
  
      const faceMap = {
          F: [
              { face: 'U', indices: [6, 7, 8] },
              { face: 'R', indices: [0, 3, 6] },
              { face: 'D', indices: [2, 1, 0] },
              { face: 'L', indices: [8, 5, 2] }
          ],
          B: [
              { face: 'U', indices: [2, 1, 0] },
              { face: 'L', indices: [0, 3, 6] },
              { face: 'D', indices: [6, 7, 8] },
              { face: 'R', indices: [8, 5, 2] }
          ],
          U: [
              { face: 'B', indices: [2, 1, 0] },
              { face: 'R', indices: [2, 1, 0] },
              { face: 'F', indices: [2, 1, 0] },
              { face: 'L', indices: [2, 1, 0] }
          ],
          D: [
              { face: 'F', indices: [6, 7, 8] },
              { face: 'R', indices: [6, 7, 8] },
              { face: 'B', indices: [6, 7, 8] },
              { face: 'L', indices: [6, 7, 8] }
          ],
          L: [
              { face: 'U', indices: [0, 3, 6] },
              { face: 'F', indices: [0, 3, 6] },
              { face: 'D', indices: [0, 3, 6] },
              { face: 'B', indices: [8, 5, 2] }
          ],
          R: [
              { face: 'U', indices: [8, 5, 2] },
              { face: 'B', indices: [0, 3, 6] },
              { face: 'D', indices: [8, 5, 2] },
              { face: 'F', indices: [8, 5, 2] }
          ]
      };
  
      const adj = faceMap[face];
      const temp = JSON.parse(JSON.stringify(this.faces)); // deep copy
  
      for (let i = 0; i < 4; i++) {
          const from = direction === 'clockwise' ? (i + 3) % 4 : (i + 1) % 4;
          const toIndices = adj[i].indices;
          const fromIndices = adj[from].indices;
  
          for (let j = 0; j < 3; j++) {
              this.faces[adj[i].face][toIndices[j]] = temp[adj[from].face][fromIndices[j]];
          }
      }
  }
  
  getColorString() {
      return (
        this.faces.U.join('') +
        this.faces.R.join('') +
        this.faces.F.join('') +
        this.faces.D.join('') +
        this.faces.L.join('') +
        this.faces.B.join('')
      );
  }
  scramble() {
    const faces = ['U', 'D', 'F', 'B', 'L', 'R'];
    const directions = ['clockwise', 'counter-clockwise'];
    const divider = document.createElement('div');
    divider.innerHTML = `<h2>Scramble Steps:</h2>`;
    document.getElementById('cube-visual').appendChild(divider);

    for (let i = 0; i < 15; i++) {
        const face = faces[Math.floor(Math.random() * faces.length)];
        const direction = directions[Math.floor(Math.random() * directions.length)];
        this.rotateFace(face, direction);
        this.moveHistory.push({ face, direction }); // record move
        this.show(`Scramble move ${i + 1}: ${face} ${direction}`);
    }
}

solve() {
    if (!this.moveHistory || this.moveHistory.length === 0) {
        alert("Nothing to solve. Scramble first or make some moves!");
        return;
    }

    const reverseDir = {
        'clockwise': 'counter-clockwise',
        'counter-clockwise': 'clockwise'
    };

    let step = 1;

    const divider = document.createElement('div');
    divider.innerHTML = `<h2>Solve Steps:</h2>`;
    document.getElementById('cube-visual').appendChild(divider);

    for (let i = this.moveHistory.length - 1; i >= 0; i--) {
        const { face, direction } = this.moveHistory[i];
        const reverse = reverseDir[direction];
        this.rotateFace(face, reverse);
        this.show(`Solve step ${step++}: ${face} ${reverse}`);
    }

    this.moveHistory = []; // ✅ Optional: clear after solving
}


  show(label) {
      const el = document.createElement('div');
      el.innerHTML = `<strong>${label}</strong><br>${getCubeSvg(this.getColorString())}`;
      document.getElementById('cube-visual').appendChild(el);
  }
  
  
  }
  