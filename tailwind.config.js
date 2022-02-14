// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ["./app/**/*.{ts,tsx}"],  
  theme: {
    extend: {
      colors: {
        blue: {
          '50':  '#f7fafb',
          '100': '#e4f1fc',
          '200': '#c5dbfa',
          '300': '#9bb8f2',
          '400': '#7490e7',
          '500': '#5c6bde',
          '600': '#4b4fce',
          '700': '#3a3bac',
          '800': '#28287e',
          '900': '#16184e',
        },
        indigo: {
          '50':  '#f9fafb',
          '100': '#eef1fb',
          '200': '#dbd7f8',
          '300': '#bab1ec',
          '400': '#a087de',
          '500': '#8662d1',
          '600': '#6d46bc',
          '700': '#513497',
          '800': '#38246a',
          '900': '#1f163e',
        },
        purple: {
          '50':  '#fcfbfb',
          '100': '#f8f1f6',
          '200': '#f1d2ec',
          '300': '#e0a8d4',
          '400': '#d77ab7',
          '500': '#c4559d',
          '600': '#a83a7c',
          '700': '#802b5c',
          '800': '#591e3c',
          '900': '#331321',
        },
        cerise: {
          '50':  '#fdfcfb',
          '100': '#fbf1ee',
          '200': '#f7d1dc',
          '300': '#eca4b8',
          '400': '#e7748f',
          '500': '#d9506c',
          '600': '#c0364d',
          '700': '#982838',
          '800': '#6c1c25',
          '900': '#411114',
        },
        coral: {
          '50':  '#fcfbfa',
          '100': '#faf1e7',
          '200': '#f5d5cc',
          '300': '#e8aaa0',
          '400': '#de7b72',
          '500': '#cc584d',
          '600': '#b03d34',
          '700': '#882e27',
          '800': '#5f1f1b',
          '900': '#391310',
        },
        ochre: {
          '50':  '#fcfbf8',
          '100': '#f9f1de',
          '200': '#f2d9b8',
          '300': '#e0b286',
          '400': '#cd8556',
          '500': '#b36234',
          '600': '#954822',
          '700': '#71361b',
          '800': '#4d2514',
          '900': '#30160d',
        },
        olive: {
          '50':  '#fafaf7',
          '100': '#f5f1e0',
          '200': '#e8debc',
          '300': '#cabb8a',
          '400': '#a19259',
          '500': '#817136',
          '600': '#675724',
          '700': '#4e411d',
          '800': '#352c16',
          '900': '#211b0f',
        },
        gray: {
          '50':  '#f8f9f7',
          '100': '#eef1ee',
          '200': '#d9e0da',
          '300': '#b0beb2',
          '400': '#7c9785',
          '500': '#5f775e',
          '600': '#4c5c45',
          '700': '#3b4535',
          '800': '#292f26',
          '900': '#191c19',
        },
        sea: {
          '50':  '#f6f9f9',
          '100': '#e3f1f9',
          '200': '#c1e0f2',
          '300': '#91c0df',
          '400': '#5c9ac6',
          '500': '#4578ad',
          '600': '#395d92',
          '700': '#2e4670',
          '800': '#202f4f',
          '900': '#131d32',
        },
        cyan: {
          '50':  '#f6f9fa',
          '100': '#e1f1fb',
          '200': '#bedef8',
          '300': '#90bdec',
          '400': '#6196dd',
          '500': '#4a73cf',
          '600': '#3d57ba',
          '700': '#304196',
          '800': '#222c6b',
          '900': '#131b44',
        },
        purple: {
          '50':  '#fcfbfb',
          '100': '#f8f1f6',
          '200': '#f1d2ec',
          '300': '#e0a8d4',
          '400': '#d77ab7',
          '500': '#c4559d',
          '600': '#a83a7c',
          '700': '#802b5c',
          '800': '#591e3c',
          '900': '#331321',
        },
        
      }
    }
  }
}