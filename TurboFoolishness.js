class turboFoolishness {
  constructor (runtime) {
    /**
     * @type {Runtime}
     */
    this.runtime = runtime;
}
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      docsURI: 'https://github.com/Mwalters75/TurboFoolishness#documentation',
      color1: '#9500ff',
      color2: '#9500ff',
      blocks: [
        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get [url]',
          "arguments": {
            "url": {
              "type": "string",
              "defaultValue": "https://reqbin.com/echo/get/json",
            }
          }
        },  '---',  {
          opcode: 'comment',
          blockType: Scratch.BlockType.COMMAND,
          text: 'comment: [comment]',
          "arguments": {
            "comment": {
              "type": "string",
              "defaultValue": "foo",
            }
          }
        },  '---',  {
          opcode: 'join',
          blockType: Scratch.BlockType.REPORTER,
          text: '[one][two][three]',
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
        },  '---',  {
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
        },  '---',  {
          opcode: 'miliseconds',
          blockType: Scratch.BlockType.REPORTER,
          text: 'miliseconds',
        },  '---',  {
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
        },  '---',  {
          opcode: 'newline',
          blockType: Scratch.BlockType.REPORTER,
          text: 'start a new line',
        },  '---',  {
          opcode: 'ifthenelse',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [if] then return [text] else return [else]',
          "arguments": {
            "text": {
              "type": "string",
              "defaultValue": "foo",
            },
            "if": {
              "type": Scratch.ArgumentType.BOOLEAN,
            },
            "else": {
              "type": "string",
              "defaultValue": "foobar",
            }
          }
        },  {
          opcode: 'ifthen',
          blockType: Scratch.BlockType.REPORTER,
          text: 'if [if] then return [text]',
          "arguments": {
            "if": {
            "type": Scratch.ArgumentType.BOOLEAN,
            },
            "text": {
              "type": "string",
              "defaultValue": "foo",
            }
          }
        },  '---',  {
        opcode: 'parseJSON',
        blockType: Scratch.BlockType.REPORTER,
        text: 'extract [PATH] of [JSON_STRING]',
        "arguments": {
          "PATH": {
            "type":"string",
            "defaultValue":"fruit/apples"
          },
          "JSON_STRING": {
            "type":"string",
            "defaultValue":'{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
            }
          }
        },  '---',  {
          opcode: 'js',
          blockType: Scratch.BlockType.COMMAND,
          text: 'execute [js]',
          "arguments": {
            "js": {
              "type":"string",
              "defaultValue":'"Fo" + "o" + "bar"',
            }
          }
        },  '---',  {
          opcode: 'true',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'return true',
        },  {
          opcode: 'false',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'return false',
        },
      ]
    }  
  }
get({url}) {
    return fetch(url).then(response => response.text());
  };
join(args) {
    return args.one + args.two + args.three;
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
newline() {
  return '\n';
  };
ifthenelse(args) {
  if (args.if == true) {
    return args.text;
  } else {
    return args.else;
  }
  };
ifthen(args) {
  if (args.if == true) {
    return args.text;
  }
  };
parseJSON({PATH, JSON_STRING}) {
  try {
    const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
    if (path[0] === '') path.splice(0, 1);
    if (path[path.length - 1] === '') path.splice(-1, 1);
    let json;
    try {
      json = JSON.parse(' ' + JSON_STRING);
    } catch (e) {
      return e.message;
    }
    path.forEach(prop => json = json[prop]);
    if (json === null) return 'null';
    else if (json === undefined) return '';
    else if (typeof json === 'object') return JSON.stringify(json);
    else return json.toString();
  } catch (err) {
    return '';
  }
  };
js(args) {
  const javascript = eval(args.js);
  return javascript;
  };
true() {
  return 'true';
  };
false() {
  return 'false';
  };
}
Scratch.extensions.register(new turboFoolishness());