const vers = '1.0';
const auth = 'M.D. Walters';
const cl_icon = 'https://mwalters75.github.io/TurboFoolishness/img/extension.svg';
const cl_block = 'https://mwalters75.github.io/TurboFoolishness/img/block.svg';
class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      menuIconURI: cl_icon,
      blockIconURI: cl_block,
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
        },
      ]
    };
  }
version() {
    return vers;
  };
author() {
    return auth;
  };
supportededitors() {
    return 'TurboWarp E羊icques';
  };
sing() {
    return 'La, la, la!';
  };
}
Scratch.extensions.register(new turboFoolishness());