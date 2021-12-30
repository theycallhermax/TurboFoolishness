const version = '1.0';
const author = 'M.D. Walters';
class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      menuIconURI: 'https://mwalters75.github.io/TurboFoolishness/img/extension.svg',
      blockIconURI: 'https://mwalters75.github.io/TurboFoolishness/img/block.svg',
      docsURI: 'https://github.com/Mwalters75/TurboFoolishness#the-making-of-turbofoolishnessdocumentation',
      color1: '#9500ff',
      color2: '#000000',
      blocks: [
        {
          opcode: 'version',
          blockType: Scratch.BlockType.REPORTER,
          text: 'version',
        }, 	{
          opcode: 'author',
          blockType: Scratch.BlockType.REPORTER,
          text: 'author',
        },  {
          opcode: 'supportededitors',
          blockType: Scratch.BlockType.REPORTER,
          text: 'supported editors',
        },  {
          opcode: 'sing',
          blockType: Scratch.BlockType.REPORTER,
          text: 'sing',
        },  {
          opcode: 'eat',
          blockType: Scratch.BlockType.REPORTER,
          text: 'eat'
        },  {
          opcode: 'dummy-hat',
          blockType: Scratch.BlockType.HAT,
          text: 'dummy hat',
        },  {
          opcode: 'dummy-block',
          blockType: Scratch.BlockType.COMMAND,
          text: 'dummy block',
        },  {
          opcode: 'dummyreporter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'dummy reporter',
        },  {
          opcode: 'dummyboolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'dummy boolean'
        },  {
          opcode: 'dummy-conditional-one',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional with one branch',
          branchCount: 1,
        },  {
          opcode: 'dummy-conditional-two',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional with two branches',
          branchCount: 2,
        },  {
          opcode: 'dummy-conditional-three',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional with three branches',
          branchCount: 3,
        },  {
          opcode: 'dummy-conditional-four',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditonal with four branches',
          branchCount: 4,
        },  {
          opcode: 'dummy-conditional-five',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional with five branches',
          branchCount: 5,
        },  {
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
dummyreporter() {
    return '';
  };
dummyboolean() {
    return '';
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
}
Scratch.extensions.register(new turboFoolishness());