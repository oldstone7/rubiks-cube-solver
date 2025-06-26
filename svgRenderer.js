function getCubeSvg(colorString) {
  const faceNames = ['U', 'R', 'F', 'D', 'L', 'B'];
  const faces = [];

  // Split the colorString into 6 faces, each of 9 stickers
  for (let i = 0; i < 6; i++) {
    faces.push(colorString.slice(i * 9, (i + 1) * 9));
  }

  // Generate HTML for each face
  const faceDivs = faces.map((faceColors, i) => {
    let faceHtml = `<div class="face-block"><strong>${faceNames[i]}:</strong><br>`;
    for (let j = 0; j < 9; j++) {
      const color = getCssColor(faceColors[j]);
      faceHtml += `<div class="sticker" style="background:${color}"></div>`;
      if ((j + 1) % 3 === 0) faceHtml += '<br>';
    }
    faceHtml += '</div>';
    return faceHtml;
  });

  // Return as a wrapped container (3 faces per row, two rows per cube state)
  return `
    <div class="cube-step">
      <div class="face-row">
        ${faceDivs[0]} ${faceDivs[1]} ${faceDivs[2]}
      </div>
      <div class="face-row">
        ${faceDivs[3]} ${faceDivs[4]} ${faceDivs[5]}
      </div>
    </div>
  `;
}

function getCssColor(char) {
  switch (char) {
    case 'w': return 'white';
    case 'r': return 'red';
    case 'g': return 'green';
    case 'b': return 'blue';
    case 'y': return 'yellow';
    case 'o': return 'orange';
    default: return 'gray';
  }
}
