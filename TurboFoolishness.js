class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',

      blocks: [
        {
          opcode: 'version',
          blockType: Scratch.BlockType.REPORTER,
          text: 'TurboFoolishness Version'
        {  
          opcode: 'author',
          blockType: Scratch.BlockType.REPORTER,
          text: 'TurboFoolishness Author'
        }
      ]
    };
  }
  version() {
    return '1.0';
  }
  author() {
    return 'M.D. Walters';
  }
}
Scratch.extensions.register(new turboFoolishness());
