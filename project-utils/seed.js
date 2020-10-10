const db = require('../db/index');
const Bundles = require('../db/models/bundles.model');


const seeds = [
  {
    name: 'bale up',
    value: 120,
    logoURL: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    helper: '@amplificare',
    minimum: 5
  },
  {
    name: 'break out',
    value: 104,
    logoURL: 'https://unsplash.com/photos/LNRyGwIJr5c',
    helper: '@aliquid',
    minimum: 1
  },
  {
    name: 'bundle of energy',
    value: 152,
    logoURL: 'https://unsplash.com/photos/6J--NXulQCs',
    helper: '@(opp.',
    minimum: 5
  },
  {
    name: 'bundle of joy',
    value: 166,
    logoURL: 'https://unsplash.com/photos/pwaaqfoMibI',
    helper: '@extenuare',
    minimum: 4
  },
  {
    name: 'bundle of laughs',
    value: 134,
    logoURL: 'https://unsplash.com/photos/6cY-FvMlmkQ',
    helper: '@aliquid)',
    minimum: 4
  },
  {
    name: 'bundle of nerves',
    value: 132,
    logoURL: 'https://unsplash.com/photos/1DkWWN1dr-s',
    helper: '@elegantia',
    minimum: 2
  },
  {
    name: 'bundle off',
    value: 166,
    logoURL: 'https://unsplash.com/photos/6-jTZysYY_U',
    helper: '@orationis',
    minimum: 3
  },
  {
    name: 'bundle up',
    value: 144,
    logoURL: 'https://unsplash.com/photos/GYumuBnTqKc',
    helper: '@on',
    minimum: 2
  },
  {
    name: 'chercher une aiguille dans une botte de foin',
    value: 173,
    logoURL: 'https://unsplash.com/photos/SSxIGsySh8o',
    helper: '@one',
    minimum: 2
  },
  {
    name: 'make a bundle',
    value: 167,
    logoURL: 'https://unsplash.com/photos/tBtuxtLvAZs',
    helper: '@if',
    minimum: 2
  },
  {
    name: 'sleep tight',
    value: 173,
    logoURL: 'https://unsplash.com/photos/-wWRHIUklxM',
    helper: '@shoe',
    minimum: 4
  },
  {
    name: 'wrap up',
    value: 119,
    logoURL: 'https://unsplash.com/photos/5L4XAgMSno0',
    helper: '@fits,',
    minimum: 6
  },
  {
    name: 'born in a barn',
    value: 167,
    logoURL: 'https://unsplash.com/photos/CMWRIzyMKZk',
    helper: '@wear',
    minimum: 6
  },
  {
    name: 'cap in hand',
    value: 108,
    logoURL: 'https://unsplash.com/photos/8lMhzUjD1Wk',
    helper: '@it',
    minimum: 6
  },
  {
    name: 'early bath',
    value: 138,
    logoURL: 'https://unsplash.com/photos/NaWKMlp3tVs',
    helper: '@meat',
    minimum: 6
  },
  {
    name: 'eat humble pie',
    value: 188,
    logoURL: 'https://unsplash.com/photos/7BjmDICVloE',
    helper: '@potatoes',
    minimum: 3
  },
  {
    name: 'go far',
    value: 164,
    logoURL: 'https://unsplash.com/photos/uAgLGG1WBd4',
    helper: '@baloney',
    minimum: 1
  },
  {
    name: 'Hat in Hand',
    value: 102,
    logoURL: 'https://unsplash.com/photos/D8LcRLwZyPs',
    helper: '@smoke',
    minimum: 1
  },
  {
    name: 'humble pie',
    value: 115,
    logoURL: 'https://unsplash.com/photos/AmPRUnRb6N0',
    helper: '@mirrors',
    minimum: 3
  },
  {
    name: 'humili, obscuro loco natus',
    value: 156,
    logoURL: 'https://unsplash.com/photos/-oWyJoSqBRM',
    helper: '@take',
    minimum: 5
  },
  {
    name: 'humilibus (obscuris) parentibus natus',
    value: 137,
    logoURL: 'https://unsplash.com/photos/_h7aBovKia4',
    helper: '@dirt',
    minimum: 1
  },
  {
    name: "i'm a lone wolf",
    value: 168,
    logoURL: 'https://unsplash.com/photos/Kt5hRENuotI',
    helper: '@nap',
    minimum: 6
  },
  {
    name: 'il n’y a pas de petit chez soi',
    value: 142,
    logoURL: 'https://unsplash.com/photos/V6s1cmE39XM',
    helper: '@thirsty',
    minimum: 1
  },
  {
    name: 'il n’y a si petit buisson qui ne porte ombre',
    value: 170,
    logoURL: 'https://unsplash.com/photos/pJILiyPdrXI',
    helper: '@thursday',
    minimum: 3
  },
  {
    name: 'IMHO',
    value: 120,
    logoURL: 'https://unsplash.com/photos/_snqARKTgoc',
    helper: '@image',
    minimum: 2
  },
  {
    name: 'meek as a lamb',
    value: 183,
    logoURL: 'https://unsplash.com/photos/8BmNurlVR6M',
    helper: '@vaut',
    minimum: 2
  },
  {
    name: 'moment in the sun',
    value: 199,
    logoURL: 'https://unsplash.com/photos/bClr95glx6k',
    helper: '@mille',
    minimum: 6
  },
  {
    name: 'pucker up',
    value: 105,
    logoURL: 'https://unsplash.com/photos/93Ep1dhTd2s',
    helper: '@mots',
    minimum: 3
  },
  {
    name: 'pudding and tame',
    value: 178,
    logoURL: 'https://unsplash.com/photos/7ALI0RYyq6s',
    helper: '@warts',
    minimum: 5
  },
  {
    name: 'pull the wool',
    value: 125,
    logoURL: 'https://unsplash.com/photos/U5rMrSI7Pn4',
    helper: '@blaze',
    minimum: 1
  },
  {
    name: "swallow one's pride",
    value: 166,
    logoURL: 'https://unsplash.com/photos/Q47eNv_UvfM',
    helper: '@trail',
    minimum: 1
  },
  {
    name: "a 'lotta baloney'",
    value: 185,
    logoURL: 'https://unsplash.com/photos/LyeduBb2Auk',
    helper: '@bloom',
    minimum: 6
  },
  {
    name: 'a picture paints a thousand words',
    value: 100,
    logoURL: 'https://unsplash.com/photos/zvf7cZ0PC20',
    helper: '@is',
    minimum: 3
  },
  {
    name: 'all sizzle and no steak',
    value: 133,
    logoURL: 'https://unsplash.com/photos/utwYoEu9SU8',
    helper: '@rose',
    minimum: 2
  },
  {
    name: 'blink of an eye',
    value: 114,
    logoURL: 'https://unsplash.com/photos/DwTZwZYi9Ww',
    helper: '@fiddle',
    minimum: 3
  },
  {
    name: 'broad strokes',
    value: 135,
    logoURL: 'https://unsplash.com/photos/rM7B4DheQc0',
    helper: '@while',
    minimum: 5
  },
  {
    name: 'ce sont des descriptions prises sur le vif',
    value: 198,
    logoURL: 'https://unsplash.com/photos/E7q00J_8N7A',
    helper: '@Rome',
    minimum: 5
  },
  {
    name: 'dicendo augere, amplificare aliquid (opp. dicendo extenuare aliquid)',
    value: 184,
    logoURL: 'https://unsplash.com/photos/KqVHRmHVwwM',
    helper: '@burns',
    minimum: 6
  },
  {
    name: 'elegantia orationis',
    value: 135,
    logoURL: 'https://unsplash.com/photos/j4PaE7E2_Ws',
    helper: '@monster',
    minimum: 3
  },
  {
    name: 'go off on one',
    value: 116,
    logoURL: 'https://unsplash.com/photos/yOujaSETXlo',
    helper: '@mash',
    minimum: 3
  },
  {
    name: 'if the shoe fits, wear it',
    value: 166,
    logoURL: 'https://unsplash.com/photos/93g2k8D1Mi8',
    helper: '@neuvième',
    minimum: 5
  },
  {
    name: 'meat and potatoes',
    value: 128,
    logoURL: 'https://unsplash.com/photos/upywS5QFwr8',
    helper: '@art',
    minimum: 3
  },
  {
    name: 'pen picture',
    value: 104,
    logoURL: 'https://unsplash.com/photos/VB-w_3dnyvI',
    helper: '@novela',
    minimum: 1
  },
  {
    name: 'smoke and mirrors',
    value: 181,
    logoURL: 'https://unsplash.com/photos/2fl-ocJ5MOA',
    helper: '@gráfica',
    minimum: 1
  },
  {
    name: 'take a dirt nap',
    value: 106,
    logoURL: 'https://unsplash.com/photos/tn2rBnvIl9I',
    helper: '@null',
    minimum: 5
  },
  {
    name: 'thirsty thursday',
    value: 113,
    logoURL: 'https://unsplash.com/photos/yEOCA6oiVqg',
    helper: '@void',
    minimum: 2
  },
  {
    name: 'une image vaut mille mots',
    value: 154,
    logoURL: 'https://unsplash.com/photos/rMmibFe4czY',
    helper: '@oat',
    minimum: 1
  },
  {
    name: 'warts and all',
    value: 192,
    logoURL: 'https://unsplash.com/photos/mWRR1xj95hg',
    helper: '@opera',
    minimum: 3
  },
  {
    name: 'blaze a trail',
    value: 110,
    logoURL: 'https://unsplash.com/photos/Ixp4YhCKZkI',
    helper: '@shoot',
    minimum: 3
  },
  {
    name: 'bloom is off the rose',
    value: 104,
    logoURL: 'https://unsplash.com/photos/USOu_Ob9rxo',
    helper: '@em',
    minimum: 5
  },
  {
    name: 'fiddle while Rome burns',
    value: 112,
    logoURL: 'https://unsplash.com/photos/bIQiMWxX_WU',
    helper: '@sword',
    minimum: 6
  },
  {
    name: 'monster mash',
    value: 173,
    logoURL: 'https://unsplash.com/photos/b5POxb2aL9o',
    helper: '@sorcery',
    minimum: 6
  },
  {
    name: 'neuvième art',
    value: 158,
    logoURL: 'https://unsplash.com/photos/Sd8O2SgKDJA',
    helper: '@there',
    minimum: 2
  },
  {
    name: 'novela gráfica',
    value: 146,
    logoURL: 'https://unsplash.com/photos/xcC5ozHk_N8',
    helper: '@nothing',
    minimum: 2
  },
  {
    name: 'null and void',
    value: 195,
    logoURL: 'https://unsplash.com/photos/HkTMcmlMOUQ',
    helper: '@new',
    minimum: 3
  },
  {
    name: 'oat opera',
    value: 156,
    logoURL: 'https://unsplash.com/photos/x8R2oSWZRSE',
    helper: '@under',
    minimum: 2
  },
  {
    name: "shoot 'em up",
    value: 179,
    logoURL: 'https://unsplash.com/photos/x7HJdJZqplo',
    helper: '@libro',
    minimum: 4
  },
  {
    name: 'sword and sorcery',
    value: 198,
    logoURL: 'https://unsplash.com/photos/B1amIgaNkwA',
    helper: '@abierto',
    minimum: 3
  },
  {
    name: 'there is nothing new under the sun',
    value: 154,
    logoURL: 'https://unsplash.com/photos/12rzbJhQ89E',
    helper: '@à',
    minimum: 5
  },
  {
    name: 'a libro abierto',
    value: 126,
    logoURL: 'https://unsplash.com/photos/SIoHky3TPeo',
    helper: '@méchant',
    minimum: 3
  },
  {
    name: 'à méchant ouvrier, point de bon outil',
    value: 192,
    logoURL: 'https://unsplash.com/photos/_SmZSuZwkHg',
    helper: '@ouvrier,',
    minimum: 1
  },
  {
    name: 'ad effectum videndi et probandi',
    value: 114,
    logoURL: 'https://unsplash.com/photos/DDp-gC81V0w',
    helper: '@point',
    minimum: 5
  },
  {
    name: 'ad litteram',
    value: 118,
    logoURL: 'https://unsplash.com/photos/vC-GqGbakJo',
    helper: '@bon',
    minimum: 6
  },
  {
    name: 'aparato crítico',
    value: 146,
    logoURL: 'https://unsplash.com/photos/YnfGtpt2gf4',
    helper: '@outil',
    minimum: 5
  },
  {
    name: "Appendix:Snowclones/if that's not X, I don't know what is",
    value: 197,
    logoURL: 'https://unsplash.com/photos/TYIzeCiZ_60',
    helper: '@ad',
    minimum: 5
  },
  {
    name: 'arrayán chileno',
    value: 189,
    logoURL: 'https://unsplash.com/photos/Kc7xqFTtcc4',
    helper: '@effectum',
    minimum: 2
  },
  {
    name: 'arrayán rojo',
    value: 165,
    logoURL: 'https://unsplash.com/photos/2Ts5HnA67k8',
    helper: '@videndi',
    minimum: 4
  },
  {
    name: 'avoir le cafard',
    value: 175,
    logoURL: 'https://unsplash.com/photos/sai-x7brics',
    helper: '@et',
    minimum: 1
  },
  {
    name: 'banco de datos',
    value: 138,
    logoURL: 'https://unsplash.com/photos/iIg4F2IWbTM',
    helper: '@probandi',
    minimum: 1
  },
  {
    name: "blow up someone's phone",
    value: 132,
    logoURL: 'https://unsplash.com/photos/Uax2bg5EizU',
    helper: '@litteram',
    minimum: 5
  },
  {
    name: 'bright line',
    value: 133,
    logoURL: 'https://unsplash.com/photos/Bi4szXGcCAM',
    helper: '@aparato',
    minimum: 5
  },
  {
    name: 'caerse de las manos',
    value: 121,
    logoURL: 'https://unsplash.com/photos/-icmOdYWXuQ',
    helper: '@crítico',
    minimum: 2
  },
  {
    name: 'cargo-200',
    value: 129,
    logoURL: 'https://unsplash.com/photos/iNmouRApXYM',
    helper: '@Appendix:Snowcl',
    minimum: 6
  },
  {
    name: 'carry forward',
    value: 179,
    logoURL: 'https://unsplash.com/photos/wpTWYBll4_w',
    helper: '@thats',
    minimum: 1
  },
  {
    name: 'carry over',
    value: 141,
    logoURL: 'https://unsplash.com/photos/9VWOr22LhVI',
    helper: '@not',
    minimum: 3
  },
  {
    name: 'causam idoneam nancisci',
    value: 180,
    logoURL: 'https://unsplash.com/photos/3I5j50pIXvU',
    helper: '@X,',
    minimum: 6
  },
  {
    name: 'citation needed',
    value: 170,
    logoURL: 'https://unsplash.com/photos/uzBiLWpjQEQ',
    helper: '@I',
    minimum: 5
  },
  {
    name: 'company',
    value: 200,
    logoURL: 'https://unsplash.com/photos/5Qwz2KyfIBE',
    helper: '@dont',
    minimum: 2
  },
  {
    name: 'contextus orationis (not nexus, conexus sententiarum)',
    value: 169,
    logoURL: 'https://unsplash.com/photos/Oaqk7qqNh_c',
    helper: '@know',
    minimum: 6
  },
  {
    name: 'continued page 94',
    value: 168,
    logoURL: 'https://unsplash.com/photos/sseiVD2XsOk',
    helper: '@what',
    minimum: 5
  },
  {
    name: 'cooked',
    value: 200,
    logoURL: 'https://unsplash.com/photos/dccIfU1V1VU',
    helper: '@arrayán',
    minimum: 2
  },
  {
    name: 'créditos de apertura',
    value: 164,
    logoURL: 'https://unsplash.com/photos/WlD3vixTVUg',
    helper: '@chileno',
    minimum: 6
  },
  {
    name: 'cuento del tío',
    value: 188,
    logoURL: 'https://unsplash.com/photos/SJWPKMb9u-k',
    helper: '@rojo',
    minimum: 3
  },
  {
    name: 'cut swathes',
    value: 115,
    logoURL: 'https://unsplash.com/photos/KBX9XHk266s',
    helper: '@avoir',
    minimum: 2
  },
  {
    name: 'dictated but not read',
    value: 134,
    logoURL: 'https://unsplash.com/photos/ISL7czxIP-k',
    helper: '@cafard',
    minimum: 6
  },
  {
    name: 'die',
    value: 114,
    logoURL: 'https://unsplash.com/photos/t1mqA3V3-7g',
    helper: '@banco',
    minimum: 1
  },
  {
    name: 'dig out',
    value: 108,
    logoURL: 'https://unsplash.com/photos/OJJIaFZOeX4',
    helper: '@datos',
    minimum: 2
  },
  {
    name: "don't feed the troll",
    value: 154,
    logoURL: 'https://unsplash.com/photos/688Fna1pwOQ',
    helper: '@blow',
    minimum: 1
  },
  {
    name: 'drive-by media',
    value: 185,
    logoURL: 'https://unsplash.com/photos/JzkgpML_8XI',
    helper: '@someones',
    minimum: 5
  },
  {
    name: 'et alibi',
    value: 149,
    logoURL: 'https://unsplash.com/photos/fwsvUxNgLRs',
    helper: '@phone',
    minimum: 1
  },
  {
    name: 'et uxor',
    value: 178,
    logoURL: 'https://unsplash.com/photos/h13Y8vyIXNU',
    helper: '@bright',
    minimum: 6
  },
  {
    name: 'fiat lux',
    value: 136,
    logoURL: 'https://unsplash.com/photos/YvYBOSiBJE8',
    helper: '@line',
    minimum: 6
  },
  {
    name: 'fill in the blank',
    value: 165,
    logoURL: 'https://unsplash.com/photos/Cm7oKel-X2Q',
    helper: '@caerse',
    minimum: 3
  },
  {
    name: 'gather rosebuds',
    value: 161,
    logoURL: 'https://unsplash.com/photos/D76DklsG-5U',
    helper: '@las',
    minimum: 2
  },
  {
    name: 'give the lie',
    value: 125,
    logoURL: 'https://unsplash.com/photos/eLUegVAjN7s',
    helper: '@manos',
    minimum: 2
  },
  {
    name: 'goodbye, cruel world',
    value: 195,
    logoURL: 'https://unsplash.com/photos/kmF_Aq8gkp0',
    helper: '@cargo-200',
    minimum: 1
  },
  {
    name: 'hand on a plate',
    value: 199,
    logoURL: 'https://unsplash.com/photos/yZf1quatKCA',
    helper: '@carry',
    minimum: 6
  },
  {
    name: 'hit the nail on the head!',
    value: 162,
    logoURL: 'https://unsplash.com/photos/llYg8Ni43fc',
    helper: '@forward',
    minimum: 1
  },
  {
    name: 'I beg your pardon',
    value: 103,
    logoURL: 'https://unsplash.com/photos/A6S-q3D67Ss',
    helper: '@over',
    minimum: 3
  },
  {
    name: 'i go batty for you!',
    value: 183,
    logoURL: 'https://unsplash.com/photos/YcfCXxo7rpc',
    helper: '@causam',
    minimum: 6
  }
];

const seed = () => {
  return db.sync({ force: true })
  .then(() => {
    return Bundles.bulkCreate(seeds, {
      fields: ['name', 'value', 'logoURL', 'helper', 'minimum'],
    });
  })
  .then(() => {
    db.close();
  })
  .then(() => {
    console.log('db closed');
  })
  .catch((err) => {
    console.log('your err: ', err);
  });
};

seed()
.then(() => {
  console.log('seeded');
})
.catch((err) => {
  console.log('your err: ', err);
});

module.exports = {
  seed,
  seeds,
};
