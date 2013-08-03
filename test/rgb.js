'use strict';

var typo = require('typo')({
    output: process.stdout
});

var rgb = require('typo-rgb');

typo.plugin(rgb);

typo.log(
 '{{rgb:#f26d7d peach font}}' + 
 '{{bg.rgb:#f26d7d|rgb:#000 peach bg and black font}}' +
 '{{bg.rgb:#f26d7d peach bg and white font}}'
);