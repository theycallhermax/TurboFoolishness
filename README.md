# TurboFoolishness
TurboFoolishness is a TurboWarp custom extension
## Supported Editors
A copy of this list is also avalible in the reporter "supported editors"

- [TurboWarp](https://turbowarp.org/editor?extension=https://mwalters75.github.io/TurboFoolishness/TurboFoolishness.js)
- [E羊icques](https://sheeptester.github.io/scratch-gui/?url=https://mwalters75.github.io/TurboFoolishness/TurboFoolishness.js)
## The Making of TurboFoolishness/Documentation
Well, making TurboFoolishness was very hard and lots, and lots of debugging. It's truly hard to make a "Scratch" extension. Firstly, the very first block was "version". It was originally called "TurboFoolishness Version". The code for it currently is this:
```
{
    opcode: 'version',
    blockType: Scratch.BlockType.REPORTER,
    text: 'version',
},
```
After reading *lots* of documentations, I figured out how to make another reporter block with this code:
```
{
    opcode: 'version',
    blockType: Scratch.BlockType.REPORTER,
    text: 'version',
},  {
    opcode: 'author',
    blockType: Scratch.BlockType.REPORTER,
    text: 'author',
},
```