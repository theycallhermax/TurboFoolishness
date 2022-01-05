const version = '1.0';
const author = 'M.D. Walters';
const self_destruct = '';
class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      menuIconURI: 'https://mwalters75.github.io/TurboFoolishness/img/extension.svg',
      blockIconURI: 'https://mwalters75.github.io/TurboFoolishness/img/block.svg',
      docsURI: 'https://github.com/Mwalters75/TurboFoolishness#documentation',
      color1: '#9500ff',
      color2: '#000000',
      color3: '#9500ff',
      blocks: [
        {
          opcode: 'fetch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch [url]',
          "arguments": {
            "url": {
              "type": "string",
              "defaultValue": "https://mwalters75.github.io/TurboFoolishness/fetch",
            }
          }
        },  {
          opcode: 'comment',
          blockType: Scratch.BlockType.COMMAND,
          text: 'comment: [comment]',
          "arguments": {
            "comment": {
              "type": "string",
              "defaultValue": "foo",
            }
          }
        },  {
          opcode: 'join',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [one][two][three]',
          "arguments": {
            "one": {
              "type": "string",
              "defaultValue": "apple ",
            },
            "two": {
              "type": "string",
              "defaultValue": "banana ",
            },
            "three": {
              "type": "string",
              "defaultValue": "pineapple",
            }
          }
        }, {
          opcode: 'addition',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one] + [two] + [three]',
          "arguments": {
            "one": {
              "type": Scratch.ArgumentType.NUMBER,
              "defaultValue": "1",
            },
            "two": {
              "type": Scratch.ArgumentType.NUMBER,
              "defaultValue": "2",
            },
            "three": {
              "type": Scratch.ArgumentType.NUMBER,
              "defaultValue": "3",
            }
          }
        },  {
          opcode: 'equaltotrue',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns true?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        }, {
          opcode: 'equaltofalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns false?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        },  {
          opcode: 'equaltonothing',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[boolean] returns nothing?',
          "arguments": {
            "boolean": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        },  {
          opcode: 'miliseconds',
          blockType: Scratch.BlockType.REPORTER,
          text: 'miliseconds',
        },  {
          opcode: 'and',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[one] and [two] and [three]',
          "arguments": {
            "one": {
              "type": Scratch.ArgumentType.BOOLEAN,
            },
            "two": {
              "type": Scratch.ArgumentType.BOOLEAN,
            },
            "three": {
              "type": Scratch.ArgumentType.BOOLEAN,
            }
          }
        },  {
          opcode: 'joinone',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [one]',
          "arguments": {
            "one": {
              "type": "string",
              "defaultValue": "apple",
            }
          }
        },
      ]
    }  
  }
version() {
    return version;
  };
author() {
    return author;
  };
supportededitors() {
    return 'TurboWarp E羊icques';
  };
sing() {
    return 'La, la, la!';
  };
eat() {
    return 'Num, num, crunch, crunch, chew, chew';
  };
fetch({url}) {
    return fetch(url).then(response => response.text())
  };
join(args) {
    return args.one + args.two + args.three;
  };
addition(args) {
    return (args.one + args.two + args.three);
  };
equaltotrue(args) {
    if (args.boolean == true) {
      return 'true';
    } else {
      return 'false';
    }
  };
equaltofalse(args) {
    if (args.boolean == false) {
      return 'true';
    } else {
      return 'false';
    }
  };
equaltonothing(args) {
    if (args.boolean == '') {
      return 'true';
    } else {
      return 'false';
    }
  };
miliseconds() {
  const date = new Date();
  const miliseconds = date.getMilliseconds();
  return miliseconds;
  };
and(args) {
  if (args.one && args.two && args.three) {
      return 'true';
    } else {
      return 'false';
    }
  };
joinone(args) {
  return args.one;
  };
}
Scratch.extensions.register(new turboFoolishness());