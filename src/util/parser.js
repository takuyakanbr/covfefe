
function getResource(url, success, failure) {
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        success(req.responseText);
      } else {
        failure(req.status);
      }
    }
  };
  req.open('GET', url, true);
  req.send();
}

function parseGrammar(text) {
  let grammar = {};
  text = text.split(/\r?\n/);

  for (const line of text) {
    if (line.length === 0 || // empty line
      line.startsWith('#')) // comment
      continue;

    const [match, replacements] = line.split('=');

    let repl = [];
    let sets = replacements.split('|');
    for (const set of sets) { // for each set of replacements

      if (set.startsWith('&')) { // repeat previous set
        const n = parseInt(set.substring(1));
        for (let i = 0; i < n; i++) {
          repl.push(repl[repl.length - 1]);
        }
        continue;
      } else if (set.startsWith('+')) { // append items in match
        const match = grammar[set.substring(1)];
        for (const m of match)
          repl.push(m);
        continue;
      }

      let items = set.split(',');
      repl.push(items); // add this set of replacements
    }

    grammar[match] = repl;
  }
  return grammar;
}

function loadGrammar(success, failure) {
  getResource('grammar.dat', (text) => {
    success(parseGrammar(text));
  }, failure);
}

export default loadGrammar;
