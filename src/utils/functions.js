import colors from 'vuetify/lib/util/colors';

const generateRadomColor = () => {
  let colorNames = Object.keys(colors);
  colorNames = colorNames.filter((color) => color !== 'shades');
  let colorNamePosition = Math.floor(
    Math.random() * (0 - Math.floor(colorNames.length - 1)),
  ) + 0;
  colorNamePosition = Math.abs(colorNamePosition);
  const randomColor = colorNames[colorNamePosition];

  // Get randomColorVariation from Vuetify colors package
  let colorVariations = Object.keys(colors[randomColor]);
  colorVariations = colorVariations.filter((variation) => !variation.startsWith('lighten')
  && !variation.startsWith('accent') && !variation.startsWith('white')
  && !variation.startsWith('transparent'));

  let colorVariationPosition = Math.floor(
    Math.random() * (0 - Math.floor(colorVariations.length - 1)),
  ) + 0;
  colorVariationPosition = Math.abs(colorVariationPosition);

  const randomColorVariation = colorVariations[colorVariationPosition];

  return colors[randomColor][randomColorVariation];
};

const capitalize = (string) => {
  if (!string || string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getContactColor = (contacts, newContact) => {
  const contactsWithSameFirstLetter = contacts.filter((item) => {
    const newContactInitial = newContact.name[0].toLowerCase();
    const contactNameInitial = item.name[0].toLowerCase();
    return contactNameInitial === newContactInitial;
  });

  if (contactsWithSameFirstLetter.length > 0) {
    return contactsWithSameFirstLetter[0].color;
  }
  return generateRadomColor();
};

export {
  capitalize,
  generateRadomColor,
  getContactColor,
};
