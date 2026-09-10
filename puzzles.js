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
}
};
