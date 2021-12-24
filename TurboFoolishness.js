const version = '1.0';
const author = 'M.D. Walters';
const ext_name = 'TurboFoolishness';
const release_number = 'first';
const tf_icon = 'https://mwalters75.github.io/TurboFoolishness/img/extension.svg';
const tf_block = 'https://mwalters75.github.io/TurboFoolishness/img/block.svg';
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
          opcode: 'dummy-conditional',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy conditional',
          branchCount: 1,
        },  {
          opcode: 'dummy-cap',
          blockType: Scratch.BlockType.CONDITIONAL,
          text: 'dummy cap',
          branchCount: 0,
          terminal: true,
        },
      ]
    };
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
}
Scratch.extensions.register(new turboFoolishness());