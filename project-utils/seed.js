const db = require('../db/index');
const Bundles = require('../db/models/bundles.model');

const seeds = [
  {
    name: 'bale up',
    value: 120,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/IMG_0900.JPG',
    helper: '@amplificare',
    minimum: 5
  },
  {
    name: 'break out',
    value: 104,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/adam-jang-8pOTAtyd_Mc-unsplash.jpg',
    helper: '@aliquid',
    minimum: 1
  },
  {
    name: 'bundle of energy',
    value: 152,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/aigul-taimetova-zAdGHu5XNJ8-unsplash.jpg',
    helper: '@(opp.',
    minimum: 5
  },
  {
    name: 'bundle of joy',
    value: 166,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/alex-block-mmWFY27jjlU-unsplash.jpg',
    helper: '@extenuare',
    minimum: 4
  },
  {
    name: 'bundle of laughs',
    value: 134,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/anne-nygard-lDr_pVB-bh8-unsplash.jpg',
    helper: '@aliquid)',
    minimum: 4
  },
  {
    name: 'bundle of nerves',
    value: 132,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ansie-potgieter-PVXA8wSI6Cs-unsplash.jpg',
    helper: '@elegantia',
    minimum: 2
  },
  {
    name: 'bundle off',
    value: 166,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/antevasin-nguyen-yna0FXQKVEQ-unsplash.jpg',
    helper: '@orationis',
    minimum: 3
  },
  {
    name: 'bundle up',
    value: 144,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/artem-beliaikin-IkkzHou_1Bs-unsplash.jpg',
    helper: '@on',
    minimum: 2
  },
  {
    name: 'chercher une aiguille dans une botte de foin',
    value: 173,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/bantersnaps-3mWxKnqET3E-unsplash.jpg',
    helper: '@one',
    minimum: 2
  },
  {
    name: 'make a bundle',
    value: 167,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/boris-tarnopolskiy-wIDl9G22Cdk-unsplash.jpg',
    helper: '@if',
    minimum: 2
  },
  {
    name: 'sleep tight',
    value: 173,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/brigitte-tohm-OmCUSp8o7a4-unsplash.jpg',
    helper: '@shoe',
    minimum: 4
  },
  {
    name: 'wrap up',
    value: 119,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/britt-gaiser-5sHNgVUbQJo-unsplash.jpg',
    helper: '@fits,',
    minimum: 6
  },
  {
    name: 'born in a barn',
    value: 167,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/brittany-colette-hjfanYmPzG4-unsplash.jpg',
    helper: '@wear',
    minimum: 6
  },
  {
    name: 'cap in hand',
    value: 108,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/caleb-woods-fpmV3dQPUvU-unsplash.jpg',
    helper: '@it',
    minimum: 6
  },
  {
    name: 'early bath',
    value: 138,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/carl-raw-8Gdayy2Lhi0-unsplash.jpg',
    helper: '@meat',
    minimum: 6
  },
  {
    name: 'eat humble pie',
    value: 188,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/celpax-1Lf5Adh9SCg-unsplash.jpg',
    helper: '@potatoes',
    minimum: 3
  },
  {
    name: 'go far',
    value: 164,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/clem-onojeghuo-dTCs5xMszt4-unsplash.jpg',
    helper: '@baloney',
    minimum: 1
  },
  {
    name: 'Hat in Hand',
    value: 102,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/daniel-cheung-cPF2nlWcMY4-unsplash.jpg',
    helper: '@smoke',
    minimum: 1
  },
  {
    name: 'humble pie',
    value: 115,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/david-clode-SF4Gj1xvqk0-unsplash.jpg',
    helper: '@mirrors',
    minimum: 3
  },
  {
    name: 'humili, obscuro loco natus',
    value: 156,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/david-lezcano-zwCE12DucBo-unsplash.jpg',
    helper: '@take',
    minimum: 5
  },
  {
    name: 'humilibus (obscuris) parentibus natus',
    value: 137,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/davies-designs-studio-MDZOGRtfuAg-unsplash.jpg',
    helper: '@dirt',
    minimum: 1
  },
  {
    name: "i'm a lone wolf",
    value: 168,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/diego-jimenez-A-NVHPka9Rk-unsplash.jpg',
    helper: '@nap',
    minimum: 6
  },
  {
    name: 'il n’y a pas de petit chez soi',
    value: 142,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/element5-digital-dwcC-OJ-bRs-unsplash.jpg',
    helper: '@thirsty',
    minimum: 1
  },
  {
    name: 'il n’y a si petit buisson qui ne porte ombre',
    value: 170,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ellicia-rMm0dChKUaI-unsplash.jpg',
    helper: '@thursday',
    minimum: 3
  },
  {
    name: 'IMHO',
    value: 120,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eric-muhr-Visn_MtNX-s-unsplash.jpg',
    helper: '@image',
    minimum: 2
  },
  {
    name: 'meek as a lamb',
    value: 183,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/erik-mclean-C3T8KTZxTFM-unsplash.jpg',
    helper: '@vaut',
    minimum: 2
  },
  {
    name: 'moment in the sun',
    value: 199,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-7Jjd7K2Tsvw-unsplash.jpg',
    helper: '@mille',
    minimum: 6
  },
  {
    name: 'pucker up',
    value: 105,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-Akv_UswYdjw-unsplash.jpg',
    helper: '@mots',
    minimum: 3
  },
  {
    name: 'pudding and tame',
    value: 178,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-CosOyntfICc-unsplash.jpg',
    helper: '@warts',
    minimum: 5
  },
  {
    name: 'pull the wool',
    value: 125,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-FSLE1Bd3hXk-unsplash.jpg',
    helper: '@blaze',
    minimum: 1
  },
  {
    name: "swallow one's pride",
    value: 166,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-IoU9yPIN6HU-unsplash.jpg',
    helper: '@trail',
    minimum: 1
  },
  {
    name: "a 'lotta baloney'",
    value: 185,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-T7MYme97QRY-unsplash.jpg',
    helper: '@bloom',
    minimum: 6
  },
  {
    name: 'a picture paints a thousand words',
    value: 100,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-hLhN-gj2w2g-unsplash.jpg',
    helper: '@is',
    minimum: 3
  },
  {
    name: 'all sizzle and no steak',
    value: 133,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-lOqiavPjUJg-unsplash.jpg',
    helper: '@rose',
    minimum: 2
  },
  {
    name: 'blink of an eye',
    value: 114,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-wGbiZEO7J4s-unsplash.jpg',
    helper: '@fiddle',
    minimum: 3
  },
  {
    name: 'broad strokes',
    value: 135,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-znpWUaVjVvI-unsplash.jpg',
    helper: '@while',
    minimum: 5
  },
  {
    name: 'ce sont des descriptions prises sur le vif',
    value: 198,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/fukayamamo-cHP9WBFKm9o-unsplash.jpg',
    helper: '@Rome',
    minimum: 5
  },
  {
    name: 'dicendo augere, amplificare aliquid (opp. dicendo extenuare aliquid)',
    value: 184,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/gabby-orcutt-Nu4u9g7Sgdw-unsplash.jpg',
    helper: '@burns',
    minimum: 6
  },
  {
    name: 'elegantia orationis',
    value: 135,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/gabby-orcutt-crbxjQ4xisQ-unsplash.jpg',
    helper: '@monster',
    minimum: 3
  },
  {
    name: 'go off on one',
    value: 116,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/hello-i-m-nik-qXakibuQiPU-unsplash.jpg',
    helper: '@mash',
    minimum: 3
  },
  {
    name: 'if the shoe fits, wear it',
    value: 166,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/henry-doe-85Cv18FAvEk-unsplash.jpg',
    helper: '@neuvième',
    minimum: 5
  },
  {
    name: 'meat and potatoes',
    value: 128,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ikhlas-ilmy--7nQTU-X41E-unsplash.jpg',
    helper: '@art',
    minimum: 3
  },
  {
    name: 'pen picture',
    value: 104,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/isaac-caffeina-WlTDg-afhaQ-unsplash.jpg',
    helper: '@novela',
    minimum: 1
  },
  {
    name: 'smoke and mirrors',
    value: 181,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ivo-daskalov-3a7vJCrL7FI-unsplash.jpg',
    helper: '@gráfica',
    minimum: 1
  },
  {
    name: 'take a dirt nap',
    value: 106,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jack-hamilton-9SewS6lowEU-unsplash.jpg',
    helper: '@null',
    minimum: 5
  },
  {
    name: 'thirsty thursday',
    value: 113,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jerry-wang-F6lHEP87YGc-unsplash.jpg',
    helper: '@void',
    minimum: 2
  },
  {
    name: 'une image vaut mille mots',
    value: 154,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jeshoots-com-fzOITuS1DIQ-unsplash.jpg',
    helper: '@oat',
    minimum: 1
  },
  {
    name: 'warts and all',
    value: 192,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jesse-belleque-knK9r-TUhjw-unsplash.jpg',
    helper: '@opera',
    minimum: 3
  },
  {
    name: 'blaze a trail',
    value: 110,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jessica-lee-o5GGlwHfff8-unsplash.jpg',
    helper: '@shoot',
    minimum: 3
  },
  {
    name: 'bloom is off the rose',
    value: 104,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jessica-ruscello-sTp4hghr4F4-unsplash.jpg',
    helper: '@em',
    minimum: 5
  },
  {
    name: 'fiddle while Rome burns',
    value: 112,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jonathan-petersson-W8V3G-Nk8FE-unsplash.jpg',
    helper: '@sword',
    minimum: 6
  },
  {
    name: 'monster mash',
    value: 173,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/joshua-j-cotten-VCzNXhMoyBw-unsplash.jpg',
    helper: '@sorcery',
    minimum: 6
  },
  {
    name: 'neuvième art',
    value: 158,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/joshua-newton-egK73XCwN8I-unsplash.jpg',
    helper: '@there',
    minimum: 2
  },
  {
    name: 'novela gráfica',
    value: 146,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/joshua-rawson-harris-N58H0FtcenQ-unsplash.jpg',
    helper: '@nothing',
    minimum: 2
  },
  {
    name: 'null and void',
    value: 195,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/karthik-balakrishnan-NrS53eUKgiE-unsplash.jpg',
    helper: '@new',
    minimum: 3
  },
  {
    name: 'oat opera',
    value: 156,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/keenan-loo-dqlxphCcA2g-unsplash.jpg',
    helper: '@under',
    minimum: 2
  },
  {
    name: "shoot 'em up",
    value: 179,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/kelly-sikkema-VBeRWuy7sCU-unsplash.jpg',
    helper: '@libro',
    minimum: 4
  },
  {
    name: 'sword and sorcery',
    value: 198,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/kelly-sikkema-qf3qwi98er4-unsplash.jpg',
    helper: '@abierto',
    minimum: 3
  },
  {
    name: 'there is nothing new under the sun',
    value: 154,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/kovah-MVjTry-e8MQ-unsplash.jpg',
    helper: '@à',
    minimum: 5
  },
  {
    name: 'a libro abierto',
    value: 126,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/lars-blankers-B0s3Xndk6tw-unsplash.jpg',
    helper: '@méchant',
    minimum: 3
  },
  {
    name: 'à méchant ouvrier, point de bon outil',
    value: 192,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/levi-ventura-wkJE9xs4X3A-unsplash.jpg',
    helper: '@ouvrier,',
    minimum: 1
  },
  {
    name: 'ad effectum videndi et probandi',
    value: 114,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/logan-clark-04gl0-kFn4o-unsplash.jpg',
    helper: '@point',
    minimum: 5
  },
  {
    name: 'ad litteram',
    value: 118,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/mae-mu-dzSQv1vWjAg-unsplash.jpg',
    helper: '@bon',
    minimum: 6
  },
  {
    name: 'aparato crítico',
    value: 146,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/mae-mu-eNfR6MUyjBI-unsplash.jpg',
    helper: '@outil',
    minimum: 5
  },
  {
    name: "Appendix:Snowclones/if that's not X, I don't know what is",
    value: 197,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/marc-sendra-martorell-2BrdNFxW0UY-unsplash.jpg',
    helper: '@ad',
    minimum: 5
  },
  {
    name: 'arrayán chileno',
    value: 189,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/marko-hankkila-IdSo_K38KtA-unsplash.jpg',
    helper: '@effectum',
    minimum: 2
  },
  {
    name: 'arrayán rojo',
    value: 165,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/miikka-luotio-i3WlrO7oAHA-unsplash.jpg',
    helper: '@videndi',
    minimum: 4
  },
  {
    name: 'avoir le cafard',
    value: 175,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/mitchell-johnson-CZRNxAIYLzI-unsplash.jpg',
    helper: '@et',
    minimum: 1
  },
  {
    name: 'banco de datos',
    value: 138,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/monika-grabkowska-sLLmJrFSh1o-unsplash.jpg',
    helper: '@probandi',
    minimum: 1
  },
  {
    name: "blow up someone's phone",
    value: 132,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/nassim-all-ot-HSrLNTP0-unsplash.jpg',
    helper: '@litteram',
    minimum: 5
  },
  {
    name: 'bright line',
    value: 133,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/nine-koepfer-oAAE80J0dRk-unsplash.jpg',
    helper: '@aparato',
    minimum: 5
  },
  {
    name: 'caerse de las manos',
    value: 121,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/obinna-valentine-9SEhc-MBJvA-unsplash.jpg',
    helper: '@crítico',
    minimum: 2
  },
  {
    name: 'cargo-200',
    value: 129,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/pat-whelen-7iTdh7Qg2MY-unsplash.jpg',
    helper: '@Appendix:Snowcl',
    minimum: 6
  },
  {
    name: 'carry forward',
    value: 179,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/peter-feghali-RmCSbd4O_Qo-unsplash.jpg',
    helper: '@thats',
    minimum: 1
  },
  {
    name: 'carry over',
    value: 141,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/peter-keller-UdUEcCoDRsI-unsplash.jpg',
    helper: '@not',
    minimum: 3
  },
  {
    name: 'causam idoneam nancisci',
    value: 180,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/peter-scholten-9MhwXl_PUSY-unsplash.jpg',
    helper: '@X,',
    minimum: 6
  },
  {
    name: 'citation needed',
    value: 170,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/priscilla-du-preez-9zhYtoUTyrY-unsplash.jpg',
    helper: '@I',
    minimum: 5
  },
  {
    name: 'company',
    value: 200,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/priscilla-du-preez-J92KHCO_vlA-unsplash.jpg',
    helper: '@dont',
    minimum: 2
  },
  {
    name: 'contextus orationis (not nexus, conexus sententiarum)',
    value: 169,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/priscilla-du-preez-gDrtALgE2pA-unsplash.jpg',
    helper: '@know',
    minimum: 6
  },
  {
    name: 'continued page 94',
    value: 168,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/priscilla-du-preez-zcJ5lyvN_tw-unsplash.jpg',
    helper: '@what',
    minimum: 5
  },
  {
    name: 'cooked',
    value: 200,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/rad-pozniakov-LDTQDN0F3as-unsplash.jpg',
    helper: '@arrayán',
    minimum: 2
  },
  {
    name: 'créditos de apertura',
    value: 164,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/rajdeep-mitra-kJGBh-GYpWI-unsplash.jpg',
    helper: '@chileno',
    minimum: 6
  },
  {
    name: 'cuento del tío',
    value: 188,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/randy-fath-KJMz5Tmbw0k-unsplash.jpg',
    helper: '@rojo',
    minimum: 3
  },
  {
    name: 'cut swathes',
    value: 115,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/riho-kroll-m4sGYaHYN5o-unsplash.jpg',
    helper: '@avoir',
    minimum: 2
  },
  {
    name: 'dictated but not read',
    value: 134,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/robert-coelho-laNNTAth9vs-unsplash.jpg',
    helper: '@cafard',
    minimum: 6
  },
  {
    name: 'die',
    value: 114,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/robert-koorenny-yFMXw18njgw-unsplash.jpg',
    helper: '@banco',
    minimum: 1
  },
  {
    name: 'dig out',
    value: 108,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ross-sneddon-sWlDOWk0Jp8-unsplash.jpg',
    helper: '@datos',
    minimum: 2
  },
  {
    name: "don't feed the troll",
    value: 154,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ryan-quintal-W4JT4MOhbRw-unsplash.jpg',
    helper: '@blow',
    minimum: 1
  },
  {
    name: 'drive-by media',
    value: 185,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/sarah-evans-6CeaZoT4tLc-unsplash.jpg',
    helper: '@someones',
    minimum: 5
  },
  {
    name: 'et alibi',
    value: 149,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/sean-do-EHLd2utEf68-unsplash.jpg',
    helper: '@phone',
    minimum: 1
  },
  {
    name: 'et uxor',
    value: 178,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/sebastiaan-stam-5hBREM-5mnQ-unsplash.jpg',
    helper: '@bright',
    minimum: 6
  },
  {
    name: 'fiat lux',
    value: 136,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/selin-sahin-5DB3cYe7Nxk-unsplash.jpg',
    helper: '@line',
    minimum: 6
  },
  {
    name: 'fill in the blank',
    value: 165,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/simon-berger-twukN12EN7c-unsplash.jpg',
    helper: '@caerse',
    minimum: 3
  },
  {
    name: 'gather rosebuds',
    value: 161,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/sock-club-PzRsKs6D5vw-unsplash.jpg',
    helper: '@las',
    minimum: 2
  },
  {
    name: 'give the lie',
    value: 125,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/stephanie-leblanc-CSk00i5sA1o-unsplash.jpg',
    helper: '@manos',
    minimum: 2
  },
  {
    name: 'goodbye, cruel world',
    value: 195,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/stephen-r7Yng8F_XJ4-unsplash.jpg',
    helper: '@cargo-200',
    minimum: 1
  },
  {
    name: 'hand on a plate',
    value: 199,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/tatiana-rodriguez-JXr51Nc5lBU-unsplash.jpg',
    helper: '@carry',
    minimum: 6
  },
  {
    name: 'hit the nail on the head!',
    value: 162,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/timothy-dykes-lnonFSMXYLI-unsplash.jpg',
    helper: '@forward',
    minimum: 1
  },
  {
    name: 'I beg your pardon',
    value: 103,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/will-van-wingerden-cZVthlrnlnQ-unsplash.jpg',
    helper: '@over',
    minimum: 3
  },
  {
    name: 'i go batty for you!',
    value: 183,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/wynand-van-poortvliet-4AmyOdXZAQc-unsplash.jpg',
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
});

module.exports = {
  seed,
  seeds,
};
