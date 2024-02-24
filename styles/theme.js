import { extendTheme } from "@chakra-ui/react";

export const theme=extendTheme({
    fonts: {
        heading: 'Inter',
        body: 'Inter'
    },
    styles: {
        global: {
          body: {
            bg: '.300',
            color: 'gray.900',
          },
          h2: {
            fontSize: '2xl',
            fontWeight: 'bold',
          },
          h3: {
            fontSize: 'lg'
          },
          h4: {
            fontSize: 'md'
          }
        }
      },
})