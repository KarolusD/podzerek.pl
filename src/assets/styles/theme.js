const lightTheme = {
  bg: '#F4F7F9',
  white: '#FFFFFF',
  almostWhite: '#F5FCFF',
  lightGray: '#EBF2F7',
  gray: '#B1C8D6',
  darkGray: '#5E95B7',
  black: '#12181F',
  text: '#012A36',
  brand: '#FF5E62',
  brand2: '#FF9966',
  brand3: '#4790FF',
  lightBrand: 'rgba(255, 94, 98, 0.15)',
  lightBrand3: 'rgba(71, 144, 255, 0.15)',
  brandGradient: 'rgba(255, 153, 102, 0) 0%, #FF5E62 100%',
  themeGradient: ' #FFFFFF 0%, #F0F6F9 50%, #C9DFEB 100%',
  transition: '300ms cubic-bezier(0.25, 0.75, 0.5, 1.25)',
  themeTransition: '400ms ease-in-out',

  font: {
    family: {
      poppins: 'Poppins',
    },
    weight: {
      regular: '400',
      semibold: '600',
      extrabold: '800',
    },
    size: {
      desktop: {
        h1: '7.2rem',
        h2: '2rem',
        h3: '2.4rem',
        h4: '1.8rem',
        body: '1.6rem',
        body2: '1.4rem',
        link: '1.8rem',
        button: '1.6rem',
      },
      mobile: {
        h1: '3.2rem',
        h2: '1.6rem',
        h3: '1.8rem',
        h4: '1.6rem',
        body: '1.5rem',
        body2: '1.4rem',
        link: '1.6rem',
        button: '1.6rem',
      },
    },
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    huge: '@media (min-width: 1920px)',
  },
}

const darkTheme = {
  // mapped variables from main theme called 'lightTheme'
  bg: lightTheme.black,
  white: lightTheme.black,
  almostWhite: lightTheme.darkGray,
  lightGray: lightTheme.gray,
  gray: lightTheme.lightGray,
  darkGray: lightTheme.gray,
  black: lightTheme.white,
  text: lightTheme.white,
  brand: lightTheme.brand,
  brand2: lightTheme.brand2,
  brand3: lightTheme.brand3,
  lightBrand: lightTheme.lightBrand,
  lightBrand3: lightTheme.lightBrand3,
  brandGradient: lightTheme.brandGradient,
  themeGradient: '#161E28 0%, #10161D 50%, #080C12 100%',
  transition: lightTheme.transition,
  themeTransition: lightTheme.themeTransition,
  font: { ...lightTheme.font },
  mq: { ...lightTheme.mq },
}

export { lightTheme, darkTheme }
