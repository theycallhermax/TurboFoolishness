const cl_icon = 'https://mwalters75.github.io/TurboFoolishness/img/ext-img.svg';
class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',
      menuIconURI: cl_icon,
      blocks: [
        {
          opcode: 'version',
          blockType: Scratch.BlockType.REPORTER,
          text: 'TurboFoolishness Version'
        }
      ]
    };
  }
  version() {
    return '1.0';
  }
}
Scratch.extensions.register(new turboFoolishness());