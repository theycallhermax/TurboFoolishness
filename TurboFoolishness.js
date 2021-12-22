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
          opcode: 'echo',
          blockType: Scratch.BlockType.REPORTER,
          text: 'echo [data]',
          arguments: {
            data: {
							type: Scratch.ArgumentType.STRING,
							defaultValue: 'dot'
						}
          }
        },  // {
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
echo() {
    return data;
  };
}
Scratch.extensions.register(new turboFoolishness());