# Typo-rgb

The [typo](https://github.com/kaelzhang/typo) plugin to output full 8-bit colors (256 RGB colors) in command-line (CLI)!

![screenshot](https://raw.github.com/kaelzhang/typo-rgb/master/screenshot.png)

## Installation

```bash
npm install typo --save
npm install typo-rgb --save
```
	
## Usage
	
```js
var typo = require('typo')({
	output: process.stdout
});

typo.plugin( require('typo-rgb') );
```

### Print colored text

```js
typo.log('{{rgb:#f0f purple}}'); // print a purple text 'purple'
```	

### Print colored background

```js
typo.log('{{bg.rgb:#f0f purple}}'); // print 'purple' with the purple background
```

### Syntax
	
```js
typo.log(
	'{{rgb:#<rgb> <text>}}',
	[<substitution>], 
	[<callback>]
);
```

### Available helpers

`rgb` and `bg.rgb`