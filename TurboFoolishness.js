class turboFoolishness {
  constructor(runtime) {
      /**
       * @type {Runtime}
       */
      this.runtime = runtime;
    }
    getInfo() {
      return {
        id: 'turbofoolishness',
        name: 'TurboFoolishness',
        docsURI: 'https://scratch.mit.edu/discuss/post/5964143/',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [url] using [allorgins_get]',
            "arguments": {
              "url": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "https://reqbin.com/echo/get/json",
              },
              "allorgins_get": {
                "type": Scratch.ArgumentType.STRING,
                "menu": "allorgins_get",
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
            disableMonitor: true,
          },  '---',  {
            opcode: 'ifthenelse',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [if] then [text] else [else]',
            "arguments": {
              "text": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "foo",
              },
              "if": {
                "type": Scratch.ArgumentType.BOOLEAN,
              },
              "else": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "foobar",
              }
            }
          },  {
            opcode: 'ifthen',
            blockType: Scratch.BlockType.REPORTER,
            text: 'if [if] then [text]',
            "arguments": {
              "if": {
              "type": Scratch.ArgumentType.BOOLEAN,
              },
              "text": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "foo",
              }
            }
          },  '---',  {
          opcode: 'parseJSON',
          blockType: Scratch.BlockType.REPORTER,
          text: 'extract [PATH] of [JSON_STRING]',
          "arguments": {
            "PATH": {
              "type":Scratch.ArgumentType.STRING,
              "defaultValue":"foo"
            },
            "JSON_STRING": {
              "type":Scratch.ArgumentType.STRING,
              "defaultValue":'{"foo":"foobar"}'
              }
            }
          },  '---',  {
            opcode: 'js',
            blockType: Scratch.BlockType.COMMAND,
            text: 'execute [js]',
            "arguments": {
              "js": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue":'"Fo" + "o" + "bar"',
              }
            }
          },  {
            opcode: 'js_reporter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'execute [js]',
            "arguments": {
              "js": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": '"Fo" + "o" + "bar"',
              }
            }
          }, '---',  {
            opcode: 'true',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true',
          },  {
            opcode: 'false',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false',
          },  {
            opcode: 'stringtoboolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[string]',
            "arguments": {
              "string": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue":"true",
              }
            }
          },  '---',  {
            opcode: 'strict_equality',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is [sentance] EXACTLY [other_sentance]?',
            "arguments": {
              "sentance": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "Foo"
              },
              "other_sentance": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "Foobar"
              }
            }
          },  '---', {
            opcode: 'backwards_text',
            blockType: Scratch.BlockType.REPORTER,
            text: 'make [text] backwards',
            "arguments": {
              "text": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "foo",
              }
            }
          },  {
            opcode: 'find_and_replace',
            blockType: Scratch.BlockType.REPORTER,
            text: 'replace [find] with [replace] in [text]',
            "arguments": {
              "find": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "Foo",
              },
              "replace": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "Foobar",
              },
              "text": {
                "type": Scratch.ArgumentType.STRING,
                "defaultValue": "Foo",
              }
            }
          }, '---', {
            "opcode": 'convertEpochtoRelative',
				    "blockType": Scratch.BlockType.REPORTER, 
					  "text": 'epoch to relative time [epoch]',
					  "arguments": {
						  "epoch": {
							  "type": Scratch.ArgumentType.NUMBER,
							  "defaultValue": 0,
						},
					}
				},
        ],
        "menus": {
          "allorgins_get": {
            items: [{text:"AllOrgins",value:"https://api.allorigins.win/raw?url="},{text:"GET",value:""}],
          },
        }
      }
    }
  get(args) {
      return fetch(args.allorgins_get + args.url).then(response => response.text()).catch(err => '');
    };
  equaltotrue(args) {
    return (args.boolean == true);
    };
  equaltofalse(args) {
    return (!(args.boolean));
    };
  equaltonothing(args) {
    return (args.boolean == '');
    };
  miliseconds() {
    var date = new Date();
    var miliseconds = date.getMilliseconds();
    return miliseconds;
    };
  ifthenelse(args) {
    if (args.if) {
      return args.text;
    } else {
      return args.else;
    }
    };
  ifthen(args) {
    if (args.if == true) {
      return args.text;
    } else {
      return '';
    }
    };
  parseJSON(args) {
    try {
      var path = args.PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + args.JSON_STRING);
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
    var javascript = eval(args.js);
    return javascript;
    };
  js_reporter(args) {
    var javascript = eval(args.js);
    return javascript;
    };
  true() {
    return (true);
    };
  false() {
    return (false);
    };
  stringtoboolean(args) {
    return args.string.toString().toLowerCase();
    };
  strict_equality(args) {
    return (args.sentance === args.other_sentance);
    };
  backwards_text(args) {
    return args.text.split('').reverse().join('');
    };
  find_and_replace(args) {
    return args.text.replace(args.find, args.replace);
    };
  convertEpochtoRelative({epoch}) {
		this.current_date = new Date();
		this.current_epoch = this.current_date.getTime() / 1000;
		this.difference = (this.current_epoch - epoch);
		if (this.difference < 60) {
			// Less than a minute has passed:
			this.time_unit = 0;
			this.difference = Math.round(this.difference);
		} else if (this.difference < 3600) {
			// Less than an hour has passed:
			this.time_unit = 1;
			this.difference =  Math.round(this.difference / 60);
		} else if (this.difference < 86400) {
			// Less than a day has passed:
			this.time_unit = 2;
			this.difference =  Math.round(this.difference / 3600);
		} else if (this.difference < 2620800) {
			// Less than a month has passed:
			this.time_unit = 3;
			this.difference =  Math.round(this.difference / 86400);
		} else if (this.difference < 31449600) {
			// Less than a year has passed:
			this.time_unit = 4;
			this.difference =  Math.round(this.difference / 2620800);
		} else {
			// More than a year has passed:
			this.time_unit = 5;
			this.difference =  Math.round(this.difference / 31449600);
		}
        if (this.difference <= 0) {
            return "just now";
        } else if (this.difference == 1) {
			return ["a second ago", "a minute ago", "a hour ago", "a day ago", "a month ago", "a year ago"][this.time_unit];
		} else {
			return String(this.difference) + [" seconds ago", " minutes ago", " hours ago", " days ago", " months ago", " years ago"][this.time_unit];
		}
	};
  }
  Scratch.extensions.register(new turboFoolishness());
