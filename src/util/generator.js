
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomItem(list) {
  return list[getRandomInt(0, list.length)];
}

function appendInverse(list, items) {
  for (let i = items.length - 1; i >= 0; i--) {
    list.push(items[i]);
  }
}

// generates an output given the grammar and the starting rule
function generateSingle(grammar, startRule) {
  let output = '';
  let stack = [startRule];

  while (stack.length > 0) {
    const next = stack.pop();

    if (next in grammar) {
      const items = getRandomItem(grammar[next]);
      appendInverse(stack, items);
    } else {
      output += next;
    }
  }
  return output;
}

// returns an array containing <count> generated outputs
function generate(grammar, start, count, appendNumbers) {
  if (start.length === 0)
    return [];

  let result = [];

  for (let n = 0; n < count; n++) {
    const startRule = getRandomItem(start);
    let output = '';
    while (output.length < 4 || output.length > 15)
      output = generateSingle(grammar, startRule);
    if (appendNumbers)
      output += generateSingle(grammar, '@rnum');
    result.push(output);
  }

  return result;
}

export default generate;
