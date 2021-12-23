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
      menuIconURI: tf_icon,
      blockIconURI: tf_block,
      docsURI: 'https://github.com/Mwalters75/TurboFoolishness#the-making-of-turbofoolishnessdocumentation',
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
          opcode: 'releaseNotes',
          blockType: Scratch.BlockType.REPORTER,
          text: 'release notes',
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
        }
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
releaseNotes() {
    return 'The ' + release_number + 'release of ' + ext_name + '!';
  };
eat() {
    return 'Num, num, crunch, crunch, chew, chew';
  };
}
Scratch.extensions.register(new turboFoolishness());