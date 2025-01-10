import { Inter, Montserrat } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair',
});

const playfairItalic = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair-italic',
  style: 'italic',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const fonts = [inter, montserrat, roboto, playfair, playfairItalic];

const font_variables = fonts.map((font) => font.variable);
const font_string = font_variables.join(' ');
export default font_string;
