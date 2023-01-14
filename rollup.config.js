import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
export default function(e){
	const [input,file]=e.test?["src/test/Application.ts","bundle.js"]:["src/min.ts","SKLibrary.js"];
	return {
		input: input,
		output: [
			{
				file: file,
				format: 'iife',
				extend: true,
				globals: {
					'pixi.js': 'PIXI',
					'@tawaship/pixim.js': 'Pixim'
				},
			}
		],
		external: ['pixi.js', '@tawaship/pixim.js'],
		plugins: [
			nodeResolve(),
			commonjs(),
			typescript(),
			buble(),
			terser({
				compress: {
					//drop_console: true
				}
			})
		]
	}
}