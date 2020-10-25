const db = require('../db/index');
const Bundles = require('../db/models/bundles.model');

const seeds = [
  {
    name: 'bale up',
    value: 120,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/IMG_0900.JPG',
    helper: '@amplificare',
    minimum: 5,
    timesUp: '2020-11-13 12:59:55'
  },
  {
    name: 'break out',
    value: 104,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/adam-jang-8pOTAtyd_Mc-unsplash.jpg',
    helper: '@aliquid',
    minimum: 1,
    timesUp: '2020-11-11 11:58:13'
  },
  {
    name: 'bundle of energy',
    value: 152,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/aigul-taimetova-zAdGHu5XNJ8-unsplash.jpg',
    helper: '@(opp.',
    minimum: 5,
    timesUp: '2020-11-12 9:11:22'
  },
  {
    name: 'bundle of joy',
    value: 166,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/alex-block-mmWFY27jjlU-unsplash.jpg',
    helper: '@extenuare',
    minimum: 4,
    timesUp: '2020-11-12 12:16:24'
  },
  {
    name: 'bundle of laughs',
    value: 134,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/anne-nygard-lDr_pVB-bh8-unsplash.jpg',
    helper: '@aliquid)',
    minimum: 4,
    timesUp: '2020-11-10 16:54:12'
  },
  {
    name: 'bundle of nerves',
    value: 132,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ansie-potgieter-PVXA8wSI6Cs-unsplash.jpg',
    helper: '@elegantia',
    minimum: 2,
    timesUp: '2020-11-19 13:40:31'
  },
  {
    name: 'bundle off',
    value: 166,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/antevasin-nguyen-yna0FXQKVEQ-unsplash.jpg',
    helper: '@orationis',
    minimum: 3,
    timesUp: '2020-11-15 11:32:39'
  },
  {
    name: 'bundle up',
    value: 144,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/artem-beliaikin-IkkzHou_1Bs-unsplash.jpg',
    helper: '@on',
    minimum: 2,
    timesUp: '2020-11-13 13:57:51'
  },
  {
    name: 'chercher une aiguille dans une botte de foin',
    value: 173,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/bantersnaps-3mWxKnqET3E-unsplash.jpg',
    helper: '@one',
    minimum: 2,
    timesUp: '2020-11-17 20:37:14'
  },
  {
    name: 'make a bundle',
    value: 167,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/boris-tarnopolskiy-wIDl9G22Cdk-unsplash.jpg',
    helper: '@if',
    minimum: 2,
    timesUp: '2020-11-11 10:57:45'
  },
  {
    name: 'sleep tight',
    value: 173,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/brigitte-tohm-OmCUSp8o7a4-unsplash.jpg',
    helper: '@shoe',
    minimum: 4,
    timesUp: '2020-11-11 9:32:54'
  },
  {
    name: 'wrap up',
    value: 119,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/britt-gaiser-5sHNgVUbQJo-unsplash.jpg',
    helper: '@fits,',
    minimum: 6,
    timesUp: '2020-11-12 16:37:22'
  },
  {
    name: 'born in a barn',
    value: 167,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/brittany-colette-hjfanYmPzG4-unsplash.jpg',
    helper: '@wear',
    minimum: 6,
    timesUp: '2020-11-19 18:51:24'
  },
  {
    name: 'cap in hand',
    value: 108,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/caleb-woods-fpmV3dQPUvU-unsplash.jpg',
    helper: '@it',
    minimum: 6,
    timesUp: '2020-11-10 9:47:19'
  },
  {
    name: 'early bath',
    value: 138,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/carl-raw-8Gdayy2Lhi0-unsplash.jpg',
    helper: '@meat',
    minimum: 6,
    timesUp: '2020-11-15 13:44:20'
  },
  {
    name: 'eat humble pie',
    value: 188,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/celpax-1Lf5Adh9SCg-unsplash.jpg',
    helper: '@potatoes',
    minimum: 3,
    timesUp: '2020-11-19 9:20:30'
  },
  {
    name: 'go far',
    value: 164,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/clem-onojeghuo-dTCs5xMszt4-unsplash.jpg',
    helper: '@baloney',
    minimum: 1,
    timesUp: '2020-11-12 17:53:39'
  },
  {
    name: 'Hat in Hand',
    value: 102,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/daniel-cheung-cPF2nlWcMY4-unsplash.jpg',
    helper: '@smoke',
    minimum: 1,
    timesUp: '2020-11-11 16:56:21'
  },
  {
    name: 'humble pie',
    value: 115,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/david-clode-SF4Gj1xvqk0-unsplash.jpg',
    helper: '@mirrors',
    minimum: 3,
    timesUp: '2020-11-17 11:37:40'
  },
  {
    name: 'humili, obscuro loco natus',
    value: 156,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/david-lezcano-zwCE12DucBo-unsplash.jpg',
    helper: '@take',
    minimum: 5,
    timesUp: '2020-11-13 15:25:36'
  },
  {
    name: 'humilibus (obscuris) parentibus natus',
    value: 137,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/davies-designs-studio-MDZOGRtfuAg-unsplash.jpg',
    helper: '@dirt',
    minimum: 1,
    timesUp: '2020-11-18 9:42:49'
  },
  {
    name: "i'm a lone wolf",
    value: 168,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/diego-jimenez-A-NVHPka9Rk-unsplash.jpg',
    helper: '@nap',
    minimum: 6,
    timesUp: '2020-11-17 19:15:58'
  },
  {
    name: 'il n’y a pas de petit chez soi',
    value: 142,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/element5-digital-dwcC-OJ-bRs-unsplash.jpg',
    helper: '@thirsty',
    minimum: 1,
    timesUp: '2020-11-13 10:14:42'
  },
  {
    name: 'il n’y a si petit buisson qui ne porte ombre',
    value: 170,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ellicia-rMm0dChKUaI-unsplash.jpg',
    helper: '@thursday',
    minimum: 3,
    timesUp: '2020-11-13 13:26:19'
  },
  {
    name: 'IMHO',
    value: 120,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eric-muhr-Visn_MtNX-s-unsplash.jpg',
    helper: '@image',
    minimum: 2,
    timesUp: '2020-11-18 10:26:37'
  },
  {
    name: 'meek as a lamb',
    value: 183,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/erik-mclean-C3T8KTZxTFM-unsplash.jpg',
    helper: '@vaut',
    minimum: 2,
    timesUp: '2020-11-11 17:46:11'
  },
  {
    name: 'moment in the sun',
    value: 199,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-7Jjd7K2Tsvw-unsplash.jpg',
    helper: '@mille',
    minimum: 6,
    timesUp: '2020-11-10 17:13:34'
  },
  {
    name: 'pucker up',
    value: 105,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-Akv_UswYdjw-unsplash.jpg',
    helper: '@mots',
    minimum: 3,
    timesUp: '2020-11-19 18:32:11'
  },
  {
    name: 'pudding and tame',
    value: 178,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-CosOyntfICc-unsplash.jpg',
    helper: '@warts',
    minimum: 5,
    timesUp: '2020-11-11 19:38:17'
  },
  {
    name: 'pull the wool',
    value: 125,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-FSLE1Bd3hXk-unsplash.jpg',
    helper: '@blaze',
    minimum: 1,
    timesUp: '2020-11-11 10:40:16'
  },
  {
    name: "swallow one's pride",
    value: 166,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-IoU9yPIN6HU-unsplash.jpg',
    helper: '@trail',
    minimum: 1,
    timesUp: '2020-11-18 13:21:45'
  },
  {
    name: "a 'lotta baloney'",
    value: 185,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-T7MYme97QRY-unsplash.jpg',
    helper: '@bloom',
    minimum: 6,
    timesUp: '2020-11-10 13:14:49'
  },
  {
    name: 'a picture paints a thousand words',
    value: 100,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-hLhN-gj2w2g-unsplash.jpg',
    helper: '@is',
    minimum: 3,
    timesUp: '2020-11-15 9:12:51'
  },
  {
    name: 'all sizzle and no steak',
    value: 133,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-lOqiavPjUJg-unsplash.jpg',
    helper: '@rose',
    minimum: 2,
    timesUp: '2020-11-19 9:35:30'
  },
  {
    name: 'blink of an eye',
    value: 114,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-wGbiZEO7J4s-unsplash.jpg',
    helper: '@fiddle',
    minimum: 3,
    timesUp: '2020-11-19 17:31:11'
  },
  {
    name: 'broad strokes',
    value: 135,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/eugene-golovesov-znpWUaVjVvI-unsplash.jpg',
    helper: '@while',
    minimum: 5,
    timesUp: '2020-11-19 11:47:10'
  },
  {
    name: 'ce sont des descriptions prises sur le vif',
    value: 198,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/fukayamamo-cHP9WBFKm9o-unsplash.jpg',
    helper: '@Rome',
    minimum: 5,
    timesUp: '2020-11-14 18:13:32'
  },
  {
    name: 'dicendo augere, amplificare aliquid (opp. dicendo extenuare aliquid)',
    value: 184,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/gabby-orcutt-Nu4u9g7Sgdw-unsplash.jpg',
    helper: '@burns',
    minimum: 6,
    timesUp: '2020-11-14 19:53:56'
  },
  {
    name: 'elegantia orationis',
    value: 135,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/gabby-orcutt-crbxjQ4xisQ-unsplash.jpg',
    helper: '@monster',
    minimum: 3,
    timesUp: '2020-11-14 11:11:13'
  },
  {
    name: 'go off on one',
    value: 116,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/hello-i-m-nik-qXakibuQiPU-unsplash.jpg',
    helper: '@mash',
    minimum: 3,
    timesUp: '2020-11-18 19:40:49'
  },
  {
    name: 'if the shoe fits, wear it',
    value: 166,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/henry-doe-85Cv18FAvEk-unsplash.jpg',
    helper: '@neuvième',
    minimum: 5,
    timesUp: '2020-11-15 11:39:37'
  },
  {
    name: 'meat and potatoes',
    value: 128,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ikhlas-ilmy--7nQTU-X41E-unsplash.jpg',
    helper: '@art',
    minimum: 3,
    timesUp: '2020-11-18 17:12:11'
  },
  {
    name: 'pen picture',
    value: 104,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/isaac-caffeina-WlTDg-afhaQ-unsplash.jpg',
    helper: '@novela',
    minimum: 1,
    timesUp: '2020-11-10 15:54:27'
  },
  {
    name: 'smoke and mirrors',
    value: 181,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ivo-daskalov-3a7vJCrL7FI-unsplash.jpg',
    helper: '@gráfica',
    minimum: 1,
    timesUp: '2020-11-16 19:22:20'
  },
  {
    name: 'take a dirt nap',
    value: 106,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jack-hamilton-9SewS6lowEU-unsplash.jpg',
    helper: '@null',
    minimum: 5,
    timesUp: '2020-11-13 10:50:27'
  },
  {
    name: 'thirsty thursday',
    value: 113,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jerry-wang-F6lHEP87YGc-unsplash.jpg',
    helper: '@void',
    minimum: 2,
    timesUp: '2020-11-13 17:15:37'
  },
  {
    name: 'une image vaut mille mots',
    value: 154,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jeshoots-com-fzOITuS1DIQ-unsplash.jpg',
    helper: '@oat',
    minimum: 1,
    timesUp: '2020-11-13 10:13:18'
  },
  {
    name: 'warts and all',
    value: 192,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jesse-belleque-knK9r-TUhjw-unsplash.jpg',
    helper: '@opera',
    minimum: 3,
    timesUp: '2020-11-11 15:36:12'
  },
  {
    name: 'blaze a trail',
    value: 110,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jessica-lee-o5GGlwHfff8-unsplash.jpg',
    helper: '@shoot',
    minimum: 3,
    timesUp: '2020-11-14 12:47:43'
  },
  {
    name: 'bloom is off the rose',
    value: 104,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jessica-ruscello-sTp4hghr4F4-unsplash.jpg',
    helper: '@em',
    minimum: 5,
    timesUp: '2020-11-18 19:11:43'
  },
  {
    name: 'fiddle while Rome burns',
    value: 112,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/jonathan-petersson-W8V3G-Nk8FE-unsplash.jpg',
    helper: '@sword',
    minimum: 6,
    timesUp: '2020-11-14 9:56:20'
  },
  {
    name: 'monster mash',
    value: 173,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/joshua-j-cotten-VCzNXhMoyBw-unsplash.jpg',
    helper: '@sorcery',
    minimum: 6,
    timesUp: '2020-11-17 9:52:46'
  },
  {
    name: 'neuvième art',
    value: 158,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/joshua-newton-egK73XCwN8I-unsplash.jpg',
    helper: '@there',
    minimum: 2,
    timesUp: '2020-11-15 12:45:55'
  },
  {
    name: 'novela gráfica',
    value: 146,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/joshua-rawson-harris-N58H0FtcenQ-unsplash.jpg',
    helper: '@nothing',
    minimum: 2,
    timesUp: '2020-11-15 20:41:46'
  },
  {
    name: 'null and void',
    value: 195,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/karthik-balakrishnan-NrS53eUKgiE-unsplash.jpg',
    helper: '@new',
    minimum: 3,
    timesUp: '2020-11-18 14:25:56'
  },
  {
    name: 'oat opera',
    value: 156,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/keenan-loo-dqlxphCcA2g-unsplash.jpg',
    helper: '@under',
    minimum: 2,
    timesUp: '2020-11-13 19:51:29'
  },
  {
    name: "shoot 'em up",
    value: 179,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/kelly-sikkema-VBeRWuy7sCU-unsplash.jpg',
    helper: '@libro',
    minimum: 4,
    timesUp: '2020-11-11 18:56:37'
  },
  {
    name: 'sword and sorcery',
    value: 198,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/kelly-sikkema-qf3qwi98er4-unsplash.jpg',
    helper: '@abierto',
    minimum: 3,
    timesUp: '2020-11-18 10:56:42'
  },
  {
    name: 'there is nothing new under the sun',
    value: 154,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/kovah-MVjTry-e8MQ-unsplash.jpg',
    helper: '@à',
    minimum: 5,
    timesUp: '2020-11-11 10:15:23'
  },
  {
    name: 'a libro abierto',
    value: 126,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/lars-blankers-B0s3Xndk6tw-unsplash.jpg',
    helper: '@méchant',
    minimum: 3,
    timesUp: '2020-11-14 18:49:48'
  },
  {
    name: 'à méchant ouvrier, point de bon outil',
    value: 192,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/levi-ventura-wkJE9xs4X3A-unsplash.jpg',
    helper: '@ouvrier,',
    minimum: 1,
    timesUp: '2020-11-12 14:59:12'
  },
  {
    name: 'ad effectum videndi et probandi',
    value: 114,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/logan-clark-04gl0-kFn4o-unsplash.jpg',
    helper: '@point',
    minimum: 5,
    timesUp: '2020-11-18 19:12:54'
  },
  {
    name: 'ad litteram',
    value: 118,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/mae-mu-dzSQv1vWjAg-unsplash.jpg',
    helper: '@bon',
    minimum: 6,
    timesUp: '2020-11-14 9:58:22'
  },
  {
    name: 'aparato crítico',
    value: 146,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/mae-mu-eNfR6MUyjBI-unsplash.jpg',
    helper: '@outil',
    minimum: 5,
    timesUp: '2020-11-14 15:15:56'
  },
  {
    name: "Appendix:Snowclones/if that's not X, I don't know what is",
    value: 197,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/marc-sendra-martorell-2BrdNFxW0UY-unsplash.jpg',
    helper: '@ad',
    minimum: 5,
    timesUp: '2020-11-17 18:31:30'
  },
  {
    name: 'arrayán chileno',
    value: 189,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/marko-hankkila-IdSo_K38KtA-unsplash.jpg',
    helper: '@effectum',
    minimum: 2,
    timesUp: '2020-11-10 10:26:37'
  },
  {
    name: 'arrayán rojo',
    value: 165,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/miikka-luotio-i3WlrO7oAHA-unsplash.jpg',
    helper: '@videndi',
    minimum: 4,
    timesUp: '2020-11-11 13:57:22'
  },
  {
    name: 'avoir le cafard',
    value: 175,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/mitchell-johnson-CZRNxAIYLzI-unsplash.jpg',
    helper: '@et',
    minimum: 1,
    timesUp: '2020-11-16 16:56:49'
  },
  {
    name: 'banco de datos',
    value: 138,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/monika-grabkowska-sLLmJrFSh1o-unsplash.jpg',
    helper: '@probandi',
    minimum: 1,
    timesUp: '2020-11-19 18:30:13'
  },
  {
    name: "blow up someone's phone",
    value: 132,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/nassim-all-ot-HSrLNTP0-unsplash.jpg',
    helper: '@litteram',
    minimum: 5,
    timesUp: '2020-11-17 13:40:50'
  },
  {
    name: 'bright line',
    value: 133,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/nine-koepfer-oAAE80J0dRk-unsplash.jpg',
    helper: '@aparato',
    minimum: 5,
    timesUp: '2020-11-14 18:18:23'
  },
  {
    name: 'caerse de las manos',
    value: 121,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/obinna-valentine-9SEhc-MBJvA-unsplash.jpg',
    helper: '@crítico',
    minimum: 2,
    timesUp: '2020-11-10 20:26:57'
  },
  {
    name: 'cargo-200',
    value: 129,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/pat-whelen-7iTdh7Qg2MY-unsplash.jpg',
    helper: '@Appendix:Snowcl',
    minimum: 6,
    timesUp: '2020-11-14 17:51:36'
  },
  {
    name: 'carry forward',
    value: 179,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/peter-feghali-RmCSbd4O_Qo-unsplash.jpg',
    helper: '@thats',
    minimum: 1,
    timesUp: '2020-11-11 18:10:16'
  },
  {
    name: 'carry over',
    value: 141,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/peter-keller-UdUEcCoDRsI-unsplash.jpg',
    helper: '@not',
    minimum: 3,
    timesUp: '2020-11-12 9:29:27'
  },
  {
    name: 'causam idoneam nancisci',
    value: 180,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/peter-scholten-9MhwXl_PUSY-unsplash.jpg',
    helper: '@X,',
    minimum: 6,
    timesUp: '2020-11-10 13:37:25'
  },
  {
    name: 'citation needed',
    value: 170,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/priscilla-du-preez-9zhYtoUTyrY-unsplash.jpg',
    helper: '@I',
    minimum: 5,
    timesUp: '2020-11-11 13:40:50'
  },
  {
    name: 'company',
    value: 200,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/priscilla-du-preez-J92KHCO_vlA-unsplash.jpg',
    helper: '@dont',
    minimum: 2,
    timesUp: '2020-11-13 13:27:41'
  },
  {
    name: 'contextus orationis (not nexus, conexus sententiarum)',
    value: 169,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/priscilla-du-preez-gDrtALgE2pA-unsplash.jpg',
    helper: '@know',
    minimum: 6,
    timesUp: '2020-11-18 12:28:58'
  },
  {
    name: 'continued page 94',
    value: 168,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/priscilla-du-preez-zcJ5lyvN_tw-unsplash.jpg',
    helper: '@what',
    minimum: 5,
    timesUp: '2020-11-14 10:48:25'
  },
  {
    name: 'cooked',
    value: 200,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/rad-pozniakov-LDTQDN0F3as-unsplash.jpg',
    helper: '@arrayán',
    minimum: 2,
    timesUp: '2020-11-17 13:45:39'
  },
  {
    name: 'créditos de apertura',
    value: 164,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/rajdeep-mitra-kJGBh-GYpWI-unsplash.jpg',
    helper: '@chileno',
    minimum: 6,
    timesUp: '2020-11-17 13:10:40'
  },
  {
    name: 'cuento del tío',
    value: 188,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/randy-fath-KJMz5Tmbw0k-unsplash.jpg',
    helper: '@rojo',
    minimum: 3,
    timesUp: '2020-11-10 14:26:53'
  },
  {
    name: 'cut swathes',
    value: 115,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/riho-kroll-m4sGYaHYN5o-unsplash.jpg',
    helper: '@avoir',
    minimum: 2,
    timesUp: '2020-11-18 14:42:37'
  },
  {
    name: 'dictated but not read',
    value: 134,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/robert-coelho-laNNTAth9vs-unsplash.jpg',
    helper: '@cafard',
    minimum: 6,
    timesUp: '2020-11-19 19:39:18'
  },
  {
    name: 'die',
    value: 114,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/robert-koorenny-yFMXw18njgw-unsplash.jpg',
    helper: '@banco',
    minimum: 1,
    timesUp: '2020-11-15 10:48:50'
  },
  {
    name: 'dig out',
    value: 108,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ross-sneddon-sWlDOWk0Jp8-unsplash.jpg',
    helper: '@datos',
    minimum: 2,
    timesUp: '2020-11-18 18:26:45'
  },
  {
    name: "don't feed the troll",
    value: 154,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/ryan-quintal-W4JT4MOhbRw-unsplash.jpg',
    helper: '@blow',
    minimum: 1,
    timesUp: '2020-11-14 9:35:25'
  },
  {
    name: 'drive-by media',
    value: 185,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/sarah-evans-6CeaZoT4tLc-unsplash.jpg',
    helper: '@someones',
    minimum: 5,
    timesUp: '2020-11-13 15:42:32'
  },
  {
    name: 'et alibi',
    value: 149,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/sean-do-EHLd2utEf68-unsplash.jpg',
    helper: '@phone',
    minimum: 1,
    timesUp: '2020-11-19 19:33:20'
  },
  {
    name: 'et uxor',
    value: 178,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/sebastiaan-stam-5hBREM-5mnQ-unsplash.jpg',
    helper: '@bright',
    minimum: 6,
    timesUp: '2020-11-12 15:38:36'
  },
  {
    name: 'fiat lux',
    value: 136,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/selin-sahin-5DB3cYe7Nxk-unsplash.jpg',
    helper: '@line',
    minimum: 6,
    timesUp: '2020-11-10 18:35:11'
  },
  {
    name: 'fill in the blank',
    value: 165,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/simon-berger-twukN12EN7c-unsplash.jpg',
    helper: '@caerse',
    minimum: 3,
    timesUp: '2020-11-14 16:32:10'
  },
  {
    name: 'gather rosebuds',
    value: 161,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/sock-club-PzRsKs6D5vw-unsplash.jpg',
    helper: '@las',
    minimum: 2,
    timesUp: '2020-11-10 16:20:38'
  },
  {
    name: 'give the lie',
    value: 125,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/stephanie-leblanc-CSk00i5sA1o-unsplash.jpg',
    helper: '@manos',
    minimum: 2,
    timesUp: '2020-11-14 15:40:51'
  },
  {
    name: 'goodbye, cruel world',
    value: 195,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/stephen-r7Yng8F_XJ4-unsplash.jpg',
    helper: '@cargo-200',
    minimum: 1,
    timesUp: '2020-11-15 13:22:18'
  },
  {
    name: 'hand on a plate',
    value: 199,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/tatiana-rodriguez-JXr51Nc5lBU-unsplash.jpg',
    helper: '@carry',
    minimum: 6,
    timesUp: '2020-11-15 10:38:26'
  },
  {
    name: 'hit the nail on the head!',
    value: 162,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/timothy-dykes-lnonFSMXYLI-unsplash.jpg',
    helper: '@forward',
    minimum: 1,
    timesUp: '2020-11-17 11:53:41'
  },
  {
    name: 'I beg your pardon',
    value: 103,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/will-van-wingerden-cZVthlrnlnQ-unsplash.jpg',
    helper: '@over',
    minimum: 3,
    timesUp: '2020-11-17 16:39:52'
  },
  {
    name: 'i go batty for you!',
    value: 183,
    logoURL: 'https://mg-fec-desc-images.s3-us-west-1.amazonaws.com/wynand-van-poortvliet-4AmyOdXZAQc-unsplash.jpg',
    helper: '@causam',
    minimum: 6,
    timesUp: '2020-11-13 14:56:13'
  }
]

const seed = () => {
  return db.sync({ force: true })
  .then(() => {
    return Bundles.bulkCreate(seeds, {
      fields: ['name', 'value', 'logoURL', 'helper', 'minimum', 'timesUp'],
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
