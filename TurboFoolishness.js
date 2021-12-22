class turboFoolishness {
  getInfo() {
    return {
      id: 'turbofoolishness',
      name: 'TurboFoolishness',

      blocks: [
        {
          opcode: 'tfver',
          blockType: Scratch.BlockType.REPORTER,
          text: 'TurboFoolishness Version'
        }
      ]
    };
  }

  /**
   * Corresponds to `opcode: 'hello'` above
   */
  tfver() {
    // You can just return a value: any string, boolean, or number will work.
    // If you have to perform an asynchronous action like a request, just return a Promise.
    // The block will wait until the Promise resolves and return the resolved value.
    return '1.0';
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new turboFoolishness());
