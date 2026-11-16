const cowsayQuotes = [
  'Do not be sorry. Be better.',
  'War. War never changes.',
  'Fear is the mind-killer.',
  'The cake is a lie.',
  'I am the one who knocks.',
  'Winter is coming.',
  'Not all those who wander are lost.',
  "In the end, we only regret the chances we didn't take.",
  'The only limit to our realization of tomorrow will be our doubts of today.',
];

const COW = String.raw`        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`;

// Split text into lines no longer than `width`, breaking on spaces
// (a single word longer than `width` is cut into pieces)
function wrapText(text, width) {
  const lines = [];
  let line = '';

  for (let word of text.split(/\s+/)) {
    while (word.length > width) {
      if (line) lines.push(line);
      lines.push(word.slice(0, width));
      word = word.slice(width);
      line = '';
    }
    if (!line) line = word;
    else if (line.length + 1 + word.length <= width) line += ' ' + word;
    else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);

  return lines;
}

// Build the speech bubble the same way the `cowsay` program does
function cowsay(text, width = 40) {
  const lines = wrapText(text, width);
  const max = Math.max(...lines.map((l) => l.length));

  const body = lines.map((l, i) => {
    const padded = l.padEnd(max);
    if (lines.length === 1) return `< ${padded} >`;
    if (i === 0) return `/ ${padded} \\`;
    if (i === lines.length - 1) return `\\ ${padded} /`;
    return `| ${padded} |`;
  });

  return [
    ' ' + '_'.repeat(max + 2),
    ...body,
    ' ' + '-'.repeat(max + 2),
    COW,
  ].join('\n');
}


const cow = document.querySelector('.the-great-mystical-wise-cow');

if (cow) {
  const quote = cowsayQuotes[Math.floor(Math.random() * cowsayQuotes.length)];
  cow.textContent = cowsay(quote);
}
