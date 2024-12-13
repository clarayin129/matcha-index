import { Inter, Montserrat } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const fonts = [inter, montserrat, roboto];

const font_variables = fonts.map((font) => font.variable);
const font_string = font_variables.join(' ');
export default font_string;
