class dummyBlocks {
    getInfo() {
        return {
            id: 'dummyBlocks',
            name: 'Dummy Blocks',
            blocks: [
                {
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
                  opcode: 'dummy-conditional-one',
                  blockType: Scratch.BlockType.CONDITIONAL,
                  text: 'dummy conditional with one branch',
                  branchCount: 1,
                },  {
                  opcode: 'dummy-conditional-two',
                  blockType: Scratch.BlockType.CONDITIONAL,
                  text: 'dummy conditional with two branches',
                  branchCount: 2,
                },  {
                  opcode: 'dummy-conditional-three',
                  blockType: Scratch.BlockType.CONDITIONAL,
                  text: 'dummy conditional with three branches',
                  branchCount: 3,
                },  {
                  opcode: 'dummy-conditional-four',
                  blockType: Scratch.BlockType.CONDITIONAL,
                  text: 'dummy conditonal with four branches',
                  branchCount: 4,
                },  {
                  opcode: 'dummy-conditional-five',
                  blockType: Scratch.BlockType.CONDITIONAL,
                  text: 'dummy conditional with five branches',
                  branchCount: 5,
                }
            ]
        }
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
Scratch.extensions.register(new dummyBlocks());