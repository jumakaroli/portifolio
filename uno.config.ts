// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
  } from 'unocss'
  
  export default defineConfig({
    
    theme: {
      colors: {
        // ...
        "brand":{
            "darker": "#142850",
            "dark": "#27496D",
            "teal": "#0C7B93",
            "light": "#00ABCC",
            "white": "#CIDADF"
        }
      }
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  })