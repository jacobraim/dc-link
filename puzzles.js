/*
 * DC Link daily puzzle data
 *
 * Add each new puzzle using its Washington, DC publication date.
 * The game changes puzzles at 6:00 AM Eastern Time and falls back to the
 * most recent available puzzle if today's date has not yet been added.
 */

const DC_LINK_PUZZLES = {

  '2026-09-08': {
    number: 1,
    groups: [
      {
        id: 'green',
        label: 'Places beginning with “Union”',
        color: 'blue',
        items: [
          'STATION',
          'MARKET',
          'STAGE',
          'PUB'
        ]
      },
      {
        id: 'yellow',
        label: 'DC traffic circles',
        color: 'yellow',
        items: [
          'DUPONT',
          'LOGAN',
          'THOMAS',
          'SCOTT'
        ]
      },
      {
        id: 'blue',
        label: 'DC music venues',
        color: 'green',
        items: [
          '9:30',
          'BLACK CAT',
          'ANTHEM',
          'HOWARD'
        ]
      },
      {
        id: 'purple',
        label: 'Green Line stations',
        color: 'purple',
        items: [
          'WATERFRONT',
          'U STREET',
          'SHAW',
          'NAVY YARD'
        ]
      }
    ]
  },

  '2026-09-09': {
    number: 2,
    groups: [
      {
        id: 'green',
        label: 'DC universities',
        color: 'green',
        items: [
          'HOWARD',
          'AMERICAN',
          'CATHOLIC',
          'GALLAUDET'
        ]
      },
      {
        id: 'yellow',
        label: 'Historic DC hotels',
        color: 'yellow',
        items: [
          'MAYFLOWER',
          'WILLARD',
          'JEFFERSON',
          'HAY-ADAMS'
        ]
      },
      {
        id: 'blue',
        label: 'Washington publications',
        color: 'blue',
        items: [
          'WASHINGTONIAN',
          'POLITICO',
          'HILL',
          'ROLL CALL'
        ]
      },
      {
        id: 'purple',
        label: '___ Park neighborhoods',
        color: 'purple',
        items: [
          'CLEVELAND',
          'WOODLEY',
          'GLOVER',
          'TAKOMA'
        ]
      }
    ]
  },

 '2026-09-10': {
  number: 3,
  groups: [
    {
      id: 'green',
      label: 'Single-letter DC streets',
      color: 'green',
      items: [
        'H',
        'K',
        'M',
        'U'
      ]
    },
    {
      id: 'yellow',
      label: 'First words of classic DC restaurants',
      color: 'yellow',
      items: [
        'OLD',
        "BEN'S",
        "MARTIN'S",
        "DUKE'S"
      ]
    },
    {
      id: 'blue',
      label: 'DC pro team names that don’t end in S',
      color: 'blue',
      items: [
        'UNITED',
        'SPIRIT',
        'POWER',
        'GLORY'
      ]
    },
    {
      id: 'purple',
      label: 'Washington ___',
      color: 'purple',
      items: [
        'POST',
        'BALLET',
        'MONUMENT',
        'NATIONALS'
      ]
    }
  ]
},

  '2026-09-11': {
    number: 4,
    groups: [
      {
        id: 'green',
        label: 'Metro lines',
        color: 'green',
        items: [
          'RED',
          'BLUE',
          'GREEN',
          'SILVER'
        ]
      },
      {
        id: 'yellow',
        label: 'DC universities',
        color: 'yellow',
        items: [
          'HOWARD',
          'AMERICAN',
          'CATHOLIC',
          'GALLAUDET'
        ]
      },
      {
        id: 'blue',
        label: '___ House',
        color: 'blue',
        items: [
          'WHITE',
          'BLAIR',
          'OCTAGON',
          'DUMBARTON'
        ]
      },
      {
        id: 'purple',
        label: 'Washington ___',
        color: 'purple',
        items: [
          'POST',
          'BALLET',
          'NATIONALS',
          'MONUMENT'
        ]
      }
    ]
  },

  '2026-09-05': {
    number: 5,
    groups: [
      {
        id: 'green',
        label: 'Smithsonian museums',
        color: 'green',
        items: [
          'HIRSHHORN',
          'RENWICK',
          'PORTRAIT',
          'ANACOSTIA'
        ]
      },
      {
        id: 'yellow',
        label: 'DC neighborhoods',
        color: 'yellow',
        items: [
          'BLOOMINGDALE',
          'TRUXTON',
          'ECKINGTON',
          'LEDROIT'
        ]
      },
      {
        id: 'blue',
        label: 'DC theaters',
        color: 'blue',
        items: [
          'FORD’S',
          'WOOLLY',
          'ARENA',
          'STUDIO'
        ]
      },
      {
        id: 'purple',
        label: 'Words that can precede “Stage”',
        color: 'purple',
        items: [
          'UNION',
          'CENTER',
          'MAIN',
          'SECOND'
        ]
      }
    ]
  },

  '2026-09-06': {
    number: 6,
    groups: [
      {
        id: 'green',
        label: 'DC restaurant names',
        color: 'green',
        items: [
          'ALBI',
          'MAYDĀN',
          'ROOSTER',
          'IMPERFECTO'
        ]
      },
      {
        id: 'yellow',
        label: 'Places on the National Mall',
        color: 'yellow',
        items: [
          'LINCOLN',
          'JEFFERSON',
          'HIRSHHORN',
          'CASTLE'
        ]
      },
      {
        id: 'blue',
        label: 'DC neighborhoods with “Heights”',
        color: 'blue',
        items: [
          'COLUMBIA',
          'CONGRESS',
          'WASHINGTON',
          'LINCOLN'
        ]
      },
      {
        id: 'purple',
        label: 'Presidential surnames',
        color: 'purple',
        items: [
          'ADAMS',
          'MONROE',
          'GARFIELD',
          'CLEVELAND'
        ]
      }
    ]
  },

'2026-09-04': {
  number: 4,
  groups: [
    {
      id: 'green',
      label: 'Metro lines',
      color: 'green',
      items: [
        'RED',
        'BLUE',
        'GREEN',
        'SILVER'
      ]
    },
    {
      id: 'yellow',
      label: 'DC universities',
      color: 'yellow',
      items: [
        'HOWARD',
        'AMERICAN',
        'CATHOLIC',
        'GALLAUDET'
      ]
    },
    {
      id: 'blue',
      label: '___ House',
      color: 'blue',
      items: [
        'WHITE',
        'BLAIR',
        'OCTAGON',
        'DUMBARTON'
      ]
    },
 {
  id: 'purple',
  label: 'DC squares',
  color: 'purple',
  items: [
    'FARRAGUT',
    'MCPHERSON',
    'MOUNT VERNON',
    'JUDICIARY'
      ]
    }
  ]
},
    '2026-09-14': {
  number: 5,
  groups: [
    {
      id: 'green',
      label: 'DC neighborhoods',
      color: 'green',
      items: [
        'PETWORTH',
        'KALORAMA',
        'BURLEITH',
        'CRESTWOOD'
      ]
    },
    {
      id: 'yellow',
      label: 'DC museums not part of the Smithsonian',
      color: 'yellow',
      items: [
        'PHILLIPS',
        'RUBELL',
        'SPY',
        'BIBLE'
      ]
    },
    {
      id: 'blue',
      label: 'DC bookstores',
      color: 'blue',
      items: [
        'LOYALTY',
        'SOLID STATE',
        'LOST CITY',
        'SECOND STORY'
      ]
    },
    {
      id: 'purple',
      label: 'Words that can precede “Museum”',
      color: 'purple',
      items: [
        'ART',
        'HISTORY',
        'SCIENCE',
        'WAX'
      ]
    }
  ]
},

'2026-09-15': {
  number: 6,
  groups: [
    {
      id: 'green',
      label: 'DC bridges',
      color: 'green',
      items: [
        'KEY',
        'CHAIN',
        'TAFT',
        'FREDERICK DOUGLASS'
      ]
    },
    {
      id: 'yellow',
      label: 'DC hotels',
      color: 'yellow',
      items: [
        'RIGGS',
        'CONRAD',
        'WATERGATE',
        'LINE'
      ]
    },
    {
      id: 'blue',
      label: 'DC cocktail bars',
      color: 'blue',
      items: [
        'ALLEGORY',
        'OKPB',
        'LEFT DOOR',
        'MIRROR'
      ]
    },
    {
      id: 'purple',
      label: 'Things that can have a “Key”',
      color: 'purple',
      items: [
        'MAP',
        'PIANO',
        'LOCK',
        'KEYBOARD'
      ]
    }
  ]
},

'2026-09-16': {
  number: 7,
  groups: [
    {
      id: 'green',
      label: 'DC parks',
      color: 'green',
      items: [
        'FORT RENO',
        'KENILWORTH',
        'THE YARDS',
        'KINGMAN'
      ]
    },
    {
      id: 'yellow',
      label: 'DC theaters',
      color: 'yellow',
      items: [
        'ARENA',
        'WOOLLY MAMMOTH',
        'KEEGAN',
        'MOSAIC'
      ]
    },
    {
      id: 'blue',
      label: 'First words of DC restaurants',
      color: 'blue',
      items: [
        'MOON',
        "ROSE'S",
        'PINEAPPLE',
        'PASTIS'
      ]
    },
    {
      id: 'purple',
      label: 'Things associated with navigation',
      color: 'purple',
      items: [
        'NORTH',
        'BEARING',
        'HEADING',
        'CHART'
      ]
    }
  ]
},

'2026-09-17': {
  number: 8,
  groups: [
    {
      id: 'green',
      label: 'DC-area airports',
      color: 'green',
      items: [
        'DULLES',
        'REAGAN',
        'BALTIMORE WASHINGTON INTERNATIONAL',
        'MANASSAS'
      ]
    },
    {
      id: 'yellow',
      label: 'DC monuments or memorials',
      color: 'yellow',
      items: [
        'EINSTEIN',
        'MLK',
        'FDR',
        'KOREAN WAR'
      ]
    },
    {
      id: 'blue',
      label: 'DC restaurant names',
      color: 'blue',
      items: [
        'LUTÈCE',
        'JÔNT',
        'MAYDĀN',
        'IMPERFECTO'
      ]
    },
    {
      id: 'purple',
      label: 'Initialisms commonly heard around Washington',
      color: 'purple',
      items: [
        'DCA',
        'WMATA',
        'OMB',
        'NPR'
      ]
    }
  ]
},

'2026-09-18': {
  number: 9,
  groups: [
    {
      id: 'green',
      label: 'DC neighborhood names with two words',
      color: 'green',
      items: [
        'MOUNT PLEASANT',
        'IVY CITY',
        'FORT LINCOLN',
        'SPRING VALLEY'
      ]
    },
    {
      id: 'yellow',
      label: 'DC markets',
      color: 'yellow',
      items: [
        'EASTERN',
        'FISH',
        'MT. PLEASANT',
        'CAPITAL HARVEST'
      ]
    },
    {
      id: 'blue',
      label: 'DC restaurant names involving animals',
      color: 'blue',
      items: [
        'MOON RABBIT',
        'RED HEN',
        'ROOSTER & OWL',
        'DUCK & PEACH'
      ]
    },
    {
      id: 'purple',
      label: 'Animals in the Chinese zodiac',
      color: 'purple',
      items: [
        'TIGER',
        'HORSE',
        'SNAKE',
        'MONKEY'
      ]
    }
  ]
},
  '2026-09-21': {
  number: 10,
  groups: [
    {
      id: 'green',
      label: 'DC public high schools',
      color: 'green',
      items: [
        'JACKSON-REED',
        'DUNBAR',
        'CARDOZO',
        'BALLOU'
      ]
    },
    {
      id: 'yellow',
      label: 'State-named avenues in DC',
      color: 'yellow',
      items: [
        'CONNECTICUT',
        'WISCONSIN',
        'MASSACHUSETTS',
        'PENNSYLVANIA'
      ]
    },
    {
      id: 'blue',
      label: 'DC Public Library branches',
      color: 'blue',
      items: [
        'TENLEY-FRIENDSHIP',
        'WOODRIDGE',
        'SOUTHWEST',
        'WEST END'
      ]
    },
    {
      id: 'purple',
      label: '___ card',
      color: 'purple',
      items: [
        'LIBRARY',
        'CREDIT',
        'REPORT',
        'WILD'
      ]
    }
  ]
},
  '2026-09-22': {
  number: 11,
  groups: [
    {
      id: 'green',
      label: 'DC waterways',
      color: 'green',
      items: [
        'POTOMAC',
        'ANACOSTIA',
        'ROCK CREEK',
        'C&O CANAL'
      ]
    },
    {
      id: 'yellow',
      label: 'DC college team names',
      color: 'yellow',
      items: [
        'HOYAS',
        'REVOLUTIONARIES',
        'EAGLES',
        'BISON'
      ]
    },
    {
      id: 'blue',
      label: 'Rock ___',
      color: 'blue',
      items: [
        'MUSIC',
        'SALT',
        'BOTTOM',
        'CLIMBING'
      ]
    },
{
  id: 'purple',
  label: 'DC radio stations',
  color: 'purple',
  items: [
    'WAMU',
    'WTOP',
    'WHUR',
    'WPGC'
  ]
    }
  ]
},
'2026-09-23': {
  number: 12,
  groups: [
    {
      id: 'green',
      label: 'TV series centered on Washington',
      color: 'green',
      items: [
        'VEEP',
        'SCANDAL',
        'HOMELAND',
        'THE WEST WING'
      ]
    },
    {
      id: 'yellow',
      label: 'DC go-go bands',
      color: 'yellow',
      items: [
        'RARE ESSENCE',
        'TROUBLE FUNK',
        'EXPERIENCE UNLIMITED',
        'BACKYARD BAND'
      ]
    },
    {
      id: 'blue',
      label: 'Federal agencies headquartered in DC',
      color: 'blue',
      items: [
        'EPA',
        'HUD',
        'NASA',
        'SEC'
      ]
    },
    {
      id: 'purple',
      label: '___ Court',
      color: 'purple',
      items: [
        'SUPREME',
        'DISTRICT',
        'TENNIS',
        'FOOD'
      ]
    }
  ]
},
'2026-09-24': {
  number: 13,
  groups: [
    {
      id: 'green',
      label: 'National ___ in DC',
      color: 'green',
      items: [
        'CATHEDRAL',
        'ARBORETUM',
        'ZOO',
        'GALLERY'
      ]
    },
    {
      id: 'yellow',
      label: 'Countries with embassies on Massachusetts Avenue',
      color: 'yellow',
      items: [
        'JAPAN',
        'INDIA',
        'BRAZIL',
        'TURKEY'
      ]
    },
    {
      id: 'blue',
      label: 'Former Washington Wizards stars',
      color: 'blue',
      items: [
        'JORDAN',
        'WALL',
        'ARENAS',
        'BEAL'
      ]
    },
    {
      id: 'purple',
      label: '___ Wright',
      color: 'purple',
      items: [
        'FRANK LLOYD',
        'ORVILLE',
        'ROBIN',
        'RICHARD'
      ]
    }
  ]
},
  '2026-09-25': {
  number: 14,
  groups: [
    {
      id: 'green',
      label: 'DC food touchstones',
      color: 'green',
      items: [
        'HALF-SMOKE',
        'MUMBO SAUCE',
        'JUMBO SLICE',
        'PUPUSA'
      ]
    },
    {
      id: 'yellow',
      label: 'Annual DC festivals',
      color: 'yellow',
      items: [
        'CHERRY BLOSSOM',
        'FOLKLIFE',
        'DC JAZZ',
        'FIESTA DC'
      ]
    },
    {
      id: 'blue',
      label: 'Half ___',
      color: 'blue',
      items: [
        'NOTE',
        'PINT',
        'TRUTH',
        'LIFE'
      ]
    },
    {
      id: 'purple',
      label: 'Official DC symbols',
      color: 'purple',
      items: [
        'WOOD THRUSH',
        'SCARLET OAK',
        'CHERRY',
        'CAPITALSAURUS'
      ]
    }
  ]
},
  '2026-09-28': {
  number: 15,
  groups: [
    {
      id: 'green',
      label: 'Smithsonian museums on the National Mall',
      color: 'green',
      items: [
        'AIR & SPACE',
        'NATURAL HISTORY',
        'AMERICAN INDIAN',
        'ASIAN ART'
      ]
    },
    {
      id: 'yellow',
      label: 'Capitol Hill parks',
      color: 'yellow',
      items: [
        'FOLGER',
        'MARION',
        'STANTON',
        'SEWARD'
      ]
    },
    {
      id: 'blue',
      label: '___ art',
      color: 'blue',
      items: [
        'POP',
        'FINE',
        'MARTIAL',
        'CLIP'
      ]
    },
    {
      id: 'purple',
      label: 'Hispanic liberators with statues in DC',
      color: 'purple',
      items: [
        'ARTIGAS',
        'BOLÍVAR',
        'SAN MARTÍN',
        'GÁLVEZ'
      ]
    }
  ]
},

'2026-09-29': {
  number: 16,
  groups: [
    {
      id: 'green',
      label: 'DC sports venues',
      color: 'green',
      items: [
        'AUDI FIELD',
        'NATIONALS PARK',
        'CAPITAL ONE ARENA',
        'CAREFIRST ARENA'
      ]
    },
    {
      id: 'yellow',
      label: 'Northern Virginia jurisdictions',
      color: 'yellow',
      items: [
        'ARLINGTON',
        'ALEXANDRIA',
        'FAIRFAX',
        'LOUDOUN'
      ]
    },
    {
      id: 'blue',
      label: '___ field',
      color: 'blue',
      items: [
        'MAGNETIC',
        'OIL',
        'PLAYING',
        'CORN'
      ]
    },
    {
      id: 'purple',
      label: 'DC neighborhoods east of the Anacostia',
      color: 'purple',
      items: [
        'DEANWOOD',
        'HILLCREST',
        'PENN BRANCH',
        'FAIRFAX VILLAGE'
      ]
    }
  ]
},

'2026-09-30': {
  number: 17,
  groups: [
    {
      id: 'green',
      label: 'DC movie theaters',
      color: 'green',
      items: [
        'AVALON',
        'SUNS',
        'ALAMO',
        'E STREET'
      ]
    },
{
  id: 'yellow',
  label: 'DC food halls',
  color: 'yellow',
  items: [
    'THE ROOST',
    'LA COSECHA',
    'WESTERN MARKET',
    'THE SQUARE'
  ]
},
    {
      id: 'blue',
      label: '___ place',
      color: 'blue',
      items: [
        'BIRTH',
        'HIDING',
        'FIRST',
        'RESTING'
      ]
    },
    {
      id: 'purple',
      label: 'Historic DC homes you can tour',
      color: 'purple',
      items: [
        'TUDOR PLACE',
        'HILLWOOD',
        'HEURICH HOUSE',
        'ANDERSON HOUSE'
      ]
    }
  ]
},

'2026-10-01': {
  number: 18,
  groups: [
    {
      id: 'green',
      label: 'DC waterfront destinations',
      color: 'green',
      items: [
        'THE WHARF',
        'WASHINGTON HARBOUR',
        'BUZZARD POINT',
        'CAPITOL RIVERFRONT'
      ]
    },
    {
      id: 'yellow',
      label: 'One-star Michelin restaurants in DC',
      color: 'yellow',
      items: [
        'BRESCA',
        'CAUSA',
        'OYSTER OYSTER',
        'XIQET'
      ]
    },
    {
      id: 'blue',
      label: '___ Alley',
      color: 'blue',
      items: [
        'BOWLING',
        'TIN PAN',
        'BLIND',
        'BACK'
      ]
    },
    {
      id: 'purple',
      label: 'DC alleys and courts',
      color: 'purple',
      items: [
        'BLAGDEN ALLEY',
        'NAYLOR COURT',
        "CADY'S ALLEY",
        'BLUES ALLEY'
      ]
    }
  ]
},

'2026-10-02': {
  number: 19,
  groups: [
    {
      id: 'green',
      label: 'Japanese carmakers',
      color: 'green',
      items: [
        'TOYOTA',
        'HONDA',
        'NISSAN',
        'SUBARU'
      ]
    },
    {
      id: 'yellow',
      label: 'House office buildings in DC',
      color: 'yellow',
      items: [
        'CANNON',
        'LONGWORTH',
        'RAYBURN',
        'FORD'
      ]
    },
    {
      id: 'blue',
      label: '___ Jackson',
      color: 'blue',
      items: [
        'MICHAEL',
        'JANET',
        'BO',
        'PETER'
      ]
    },
    {
      id: 'purple',
      label: 'Actors born in DC',
      color: 'purple',
      items: [
        'SAMUEL L. JACKSON',
        'JON BERNTHAL',
        'KATHERINE HEIGL',
        'ALYSON HANNIGAN'
      ]
    }
  ]
},
  '2026-10-05': {
  number: 20,
  groups: [
    {
      id: 'green',
      label: 'DC breweries',
      color: 'green',
      items: [
        'ATLAS',
        'DC BRAU',
        'BLUEJACKET',
        'RIGHT PROPER'
      ]
    },
    {
      id: 'yellow',
      label: 'DC bagel shops',
      color: 'yellow',
      items: [
        'CALL YOUR MOTHER',
        'BULLFROG',
        "PEARL'S",
        'BAGELS ETC.'
      ]
    },
    {
      id: 'blue',
      label: 'Original Greek Titans',
      color: 'blue',
      items: [
        'CRONUS',
        'RHEA',
        'OCEANUS',
        'HYPERION'
      ]
    },
    {
      id: 'purple',
      label: 'Amphibians that aren’t frogs',
      color: 'purple',
      items: [
        'NEWT',
        'SALAMANDER',
        'CAECILIAN',
        'AXOLOTL'
      ]
    }
  ]
},
  '2026-10-06': {
  number: 21,
  groups: [
    {
      id: 'green',
      label: 'Mario franchise characters',
      color: 'green',
      items: [
        'BOWSER',
        'MARIO',
        'LUIGI',
        'YOSHI'
      ]
    },
    {
      id: 'yellow',
      label: 'Former DC mayors',
      color: 'yellow',
      items: [
        'BARRY',
        'WILLIAMS',
        'FENTY',
        'GRAY'
      ]
    },
    {
      id: 'blue',
      label: 'DC TV stations affiliated with the Big Four networks',
      color: 'blue',
      items: [
        'WRC',
        'WJLA',
        'WUSA',
        'WTTG'
      ]
    },
    {
      id: 'purple',
      label: 'PBS member stations',
      color: 'purple',
      items: [
        'WETA',
        'WNET',
        'WHYY',
        'KQED'
      ]
    }
  ]
},

'2026-10-07': {
  number: 22,
  groups: [
    {
      id: 'green',
      label: 'DC pro teams that play home games indoors',
      color: 'green',
      items: [
        'WIZARDS',
        'CAPITALS',
        'MYSTICS',
        'GO-GO'
      ]
    },
    {
      id: 'yellow',
      label: 'NFL team names ending in “-ers”',
      color: 'yellow',
      items: [
        'COMMANDERS',
        'PACKERS',
        'STEELERS',
        'RAIDERS'
      ]
    },
    {
      id: 'blue',
      label: 'DC ramen shops',
      color: 'blue',
      items: [
        'DAIKAYA',
        'MENYA HOSAKI',
        'SAKURAMEN',
        'BANTAM KING'
      ]
    },
    {
      id: 'purple',
      label: 'Types of Japanese noodles',
      color: 'purple',
      items: [
        'UDON',
        'SOBA',
        'SOMEN',
        'SHIRATAKI'
      ]
    }
  ]
},

'2026-10-08': {
  number: 23,
  groups: [
    {
      id: 'green',
      label: 'Military ranks',
      color: 'green',
      items: [
        'MAJOR',
        'CAPTAIN',
        'COLONEL',
        'GENERAL'
      ]
    },
    {
      id: 'yellow',
      label: 'Things found in a museum',
      color: 'yellow',
      items: [
        'DOCENT',
        'ARTIFACT',
        'EXHIBIT',
        'CURATOR'
      ]
    },
    {
      id: 'blue',
      label: 'Metro transfer stations',
      color: 'blue',
      items: [
        'METRO CENTER',
        'GALLERY PLACE',
        "L'ENFANT PLAZA",
        'FORT TOTTEN'
      ]
    },
    {
      id: 'purple',
      label: 'DC sports mascots',
      color: 'purple',
      items: [
        'SCREECH',
        'SLAPSHOT',
        'MAJOR TUDDY',
        'TALON'
      ]
    }
  ]
},

'2026-10-09': {
  number: 24,
  groups: [
    {
      id: 'green',
      label: 'Flowers',
      color: 'green',
      items: [
        'TULIP',
        'DAISY',
        'LILY',
        'IRIS'
      ]
    },
    {
      id: 'yellow',
      label: 'Tree species commonly used as wood',
      color: 'yellow',
      items: [
        'OAK',
        'MAPLE',
        'WALNUT',
        'MAHOGANY'
      ]
    },
    {
      id: 'blue',
      label: 'DC pizza spots',
      color: 'blue',
      items: [
        '2 AMYS',
        "ANDY'S",
        'MENOMALE',
        'TIMBER'
      ]
    },
    {
      id: 'purple',
      label: 'DC bakeries',
      color: 'purple',
      items: [
        'BREAD FURST',
        'BAKED & WIRED',
        'SEYLOU',
        'ROSE AVE'
      ]
    }
  ]
},

'2026-10-12': {
  number: 25,
  groups: [
    {
      id: 'green',
      label: 'Fish anatomy',
      color: 'green',
      items: [
        'GILL',
        'FIN',
        'SCALE',
        'TAIL'
      ]
    },
    {
      id: 'yellow',
      label: 'Things commonly kept in a vault',
      color: 'yellow',
      items: [
        'CASH',
        'GOLD',
        'JEWELS',
        'DOCUMENTS'
      ]
    },
    {
      id: 'blue',
      label: 'Cabinet departments headquartered in DC',
      color: 'blue',
      items: [
        'STATE',
        'JUSTICE',
        'TREASURY',
        'COMMERCE'
      ]
    },
    {
      id: 'purple',
      label: 'Musicians born in DC',
      color: 'purple',
      items: [
        'DUKE ELLINGTON',
        'MARVIN GAYE',
        'JOHNNY GILL',
        'GINUWINE'
      ]
    }
  ]
},
  '2026-10-13': {
  number: 26,
  groups: [
    {
      id: 'green',
      label: 'Foreign Revolutionary War figures with statues in Lafayette Square',
      color: 'green',
      items: [
        'LAFAYETTE',
        'ROCHAMBEAU',
        'KOSCIUSZKO',
        'VON STEUBEN'
      ]
    },
    {
      id: 'yellow',
      label: 'Coffee companies founded in DC',
      color: 'yellow',
      items: [
        'COMPASS',
        "SWING'S",
        'PEREGRINE',
        'VIGILANTE'
      ]
    },
    {
      id: 'blue',
      label: 'U.S. state capitals',
      color: 'blue',
      items: [
        'JACKSON',
        'AUSTIN',
        'DENVER',
        'PHOENIX'
      ]
    },
    {
      id: 'purple',
      label: 'Companies founded in Seattle',
      color: 'purple',
      items: [
        'STARBUCKS',
        'BOEING',
        'NORDSTROM',
        'COSTCO'
      ]
    }
  ]
},
  '2026-10-14': {
  number: 27,
  groups: [
    {
      id: 'green',
      label: 'Outdoor pools in Northwest DC',
      color: 'green',
      items: [
        'BANNEKER',
        'FRANCIS',
        'HEARST',
        'UPSHUR'
      ]
    },
    {
      id: 'yellow',
      label: 'Ethiopian restaurants in Northwest DC',
      color: 'yellow',
      items: [
        'DUKEM',
        'CHERCHER',
        'TSEHAY',
        'ELFEGNE'
      ]
    },
    {
      id: 'blue',
      label: '20th-century U.S. presidents',
      color: 'blue',
      items: [
        'WILSON',
        'TRUMAN',
        'HOOVER',
        'CARTER'
      ]
    },
    {
      id: 'purple',
      label: 'Writing scripts',
      color: 'purple',
      items: [
        'ETHIOPIC',
        'CYRILLIC',
        'LATIN',
        'GREEK'
      ]
    }
  ]
},
  '2026-10-15': {
  number: 28,
  groups: [
    {
      id: 'green',
      label: 'Fast-casual brands that started in DC',
      color: 'green',
      items: [
        'SWEETGREEN',
        '&PIZZA',
        'RASA',
        'LITTLE SESAME'
      ]
    },
    {
      id: 'yellow',
      label: 'Washington QBs drafted in the first round',
      color: 'yellow',
      items: [
        'SHULER',
        'RAMSEY',
        'CAMPBELL',
        'GRIFFIN'
      ]
    },
    {
      id: 'blue',
      label: 'Sparkling wines',
      color: 'blue',
      items: [
        'CAVA',
        'PROSECCO',
        'CHAMPAGNE',
        'SEKT'
      ]
    },
    {
      id: 'purple',
      label: 'Family relationships',
      color: 'purple',
      items: [
        'COUSINS',
        'SIBLINGS',
        'PARENTS',
        'IN-LAWS'
      ]
    }
  ]
},
  '2026-10-16': {
  number: 29,
  groups: [
    {
      id: 'green',
      label: 'Civil War forts in DC',
      color: 'green',
      items: [
        'STEVENS',
        'DERUSSY',
        'MAHAN',
        'CHAPLIN'
      ]
    },
{
  id: 'yellow',
  label: 'Prince George’s County Metro stations',
  color: 'yellow',
  items: [
    'HYATTSVILLE CROSSING',
    'GREENBELT',
    'DOWNTOWN LARGO',
    'SUITLAND'
  ]
},
    {
      id: 'blue',
      label: 'Plants',
      color: 'blue',
      items: [
        'LAUREL',
        'IVY',
        'HOLLY',
        'FERN'
      ]
    },
    {
      id: 'purple',
      label: 'Types of jackets',
      color: 'purple',
      items: [
        'BOMBER',
        'DENIM',
        'VARSITY',
        'PUFFER'
      ]
    }
  ]
},
'2026-10-19': {
  number: 30,
  groups: [
    {
      id: 'green',
      label: 'DC neighborhoods beginning with B',
      color: 'green',
      items: [
        'BRIGHTWOOD',
        'BROOKLAND',
        'BRENTWOOD',
        'BELLEVUE'
      ]
    },
    {
      id: 'yellow',
      label: 'Maryland county seats',
      color: 'yellow',
      items: [
        'ROCKVILLE',
        'UPPER MARLBORO',
        'FREDERICK',
        'ANNAPOLIS'
      ]
    },
    {
      id: 'blue',
      label: 'College towns',
      color: 'blue',
      items: [
        'COLLEGE PARK',
        'ANN ARBOR',
        'BERKELEY',
        'ATHENS'
      ]
    },
    {
      id: 'purple',
      label: 'Video game companies',
      color: 'purple',
      items: [
        'BETHESDA',
        'NINTENDO',
        'SEGA',
        'CAPCOM'
      ]
    }
  ]
},
  '2026-10-20': {
  number: 31,
  groups: [
    {
      id: 'green',
      label: 'Independent DC sandwich shops',
      color: 'green',
      items: [
        "BUB AND POP'S",
        "STACHOWSKI'S",
        "MANGIALARDO'S",
        'A. LITTERI'
      ]
    },
    {
      id: 'yellow',
      label: 'Current DC Public Library branches named for people',
      color: 'yellow',
      items: [
        'DOROTHY I. HEIGHT',
        'FRANCIS A. GREGORY',
        'JUANITA E. THORNTON',
        'WATHA T. DANIEL'
      ]
    },
    {
      id: 'blue',
      label: 'Terms for urban rail',
      color: 'blue',
      items: [
        'SUBWAY',
        'METRO',
        'TUBE',
        'EL'
      ]
    },
    {
      id: 'purple',
      label: 'Gilded Age tycoons',
      color: 'purple',
      items: [
        'CARNEGIE',
        'ROCKEFELLER',
        'VANDERBILT',
        'ASTOR'
      ]
    }
  ]
}, 
  '2026-10-21': {
  number: 32,
  groups: [
    {
      id: 'green',
      label: 'DC avenues named for states west of the Mississippi',
      color: 'green',
      items: [
        'ALASKA',
        'COLORADO',
        'KANSAS',
        'OREGON'
      ]
    },
    {
      id: 'yellow',
      label: 'Local DC record stores',
      color: 'yellow',
      items: [
        'JOINT CUSTODY',
        'SMASH',
        'SOM',
        'BYRDLAND'
      ]
    },
    {
      id: 'blue',
      label: 'Former Soviet republics',
      color: 'blue',
      items: [
        'GEORGIA',
        'ARMENIA',
        'ESTONIA',
        'LATVIA'
      ]
    },
    {
      id: 'purple',
      label: 'Castle features',
      color: 'purple',
      items: [
        'TOWER',
        'TURRET',
        'MOAT',
        'DRAWBRIDGE'
      ]
    }
  ]
}
};
