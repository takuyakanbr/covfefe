
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

function generate(grammar, start, count) {
  if (start.length === 0)
    return [];

  let result = [];

  for (let n = 0; n < count; n++) {
    let output = '';
    let stack = [ getRandomItem(start) ];

    while (stack.length > 0) {
      const next = stack.pop();

      if (next in grammar) {
        const items = getRandomItem(grammar[next]);
        appendInverse(stack, items);
      } else {
        output += next;
      }

    }
    result.push(output);
  }

  return result;
}

export default generate;
