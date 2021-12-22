const vers = '1.0';
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
          text: 'TurboFoolishness Version',
        }, 	{
          opcode: 'author',
          blockType: Scratch.BlockType.REPORTER,
          text: 'TurboFoolishness Author',
        }, 	{
      ]
    };
  }
  version() {
    return '1.0';
  };
author() {
    return 'M.D. Walters';
  };
}
Scratch.extensions.register(new turboFoolishness());