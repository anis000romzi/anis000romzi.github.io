const cowsayQuotes = [
  'Do not be sorry. Be better.',
  'Fear is the mind-killer.',
  'Meow ~',
  'Moooo ...',
  'Not all those who wander are lost.',
  "In the end, we only regret the chances we didn't take.",
  'The only limit to our realization of tomorrow will be our doubts of today.',
  'Despite everything, it\'s still you.',
  'What is better - to be born good, or to overcome your evil nature through great effort?',
  'Life before death. Strength before weakness. Journey before destination.'
];

const ALERTED_COW = String.raw`        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`;

const RELAXED_COW = String.raw`        \   ^__^
         \  (^^)\_______
            (__)\       )\
                ||----w | \
                ||     ||`;

const SURPRISED_COW = String.raw`        \   ^__^
         \  (00)\_______
            (__)\       )—— —
                //~~~~w\\ 
               //       \\`;

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
function cowsay(text, cowArt, width = 40) {
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
    cowArt,
  ].join('\n');
}

const cow = document.querySelector('.the-great-mystical-wise-cow');

if (cow) {
  let quote = '';
  let hovering = false;
  let surpriseTimer;

  const render = (cowArt) => {
    cow.textContent = cowsay(quote, cowArt);
  };

  // Pick a quote different from the current one
  const newQuote = () => {
    let next;
    do {
      next = cowsayQuotes[Math.floor(Math.random() * cowsayQuotes.length)];
    } while (next === quote && cowsayQuotes.length > 1);
    quote = next;
    cow.setAttribute('aria-label', `ASCII art of a cow saying: ${quote}`);
  };

  // Idle: relaxed
  newQuote();
  render(RELAXED_COW);

  // Hover: alerted
  cow.addEventListener('mouseenter', () => {
    hovering = true;
    clearTimeout(surpriseTimer);
    render(ALERTED_COW);
  });

  cow.addEventListener('mouseleave', () => {
    hovering = false;
    clearTimeout(surpriseTimer);
    render(RELAXED_COW);
  });

  // Click: surprised + new quote, then calm back down after a moment
  cow.addEventListener('click', () => {
    newQuote();
    render(SURPRISED_COW);
    clearTimeout(surpriseTimer);
    surpriseTimer = setTimeout(
      () => render(hovering ? ALERTED_COW : RELAXED_COW),
      1000
    );
  });
}
