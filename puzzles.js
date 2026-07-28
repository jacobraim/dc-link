/*
 * DC Link daily puzzle data
 *
 * Add each new puzzle using its Washington, DC publication date.
 * The game changes puzzles at 6:00 AM Eastern Time and falls back to the
 * most recent available puzzle if today's date has not yet been added.
 */

const DC_LINK_PUZZLES = {
  '2026-07-28': {
    number: 1,
    groups: [
      {
        id: 'green',
        label: 'Classic DC restaurants',
        color: 'green',
        items: ["Ben's Chili Bowl", 'Old Ebbitt Grill', "Martin's Tavern", 'The Monocle']
      },
      {
        id: 'yellow',
        label: 'Metro lines',
        color: 'yellow',
        items: ['Red Line', 'Blue Line', 'Green Line', 'Silver Line']
      },
      {
        id: 'blue',
        label: 'DC neighborhoods with circles',
        color: 'blue',
        items: ['Dupont Circle', 'Logan Circle', 'Thomas Circle', 'Sheridan Circle']
      },
      {
        id: 'purple',
        label: 'Smithsonian museums on the National Mall',
        color: 'purple',
        items: ['Hirshhorn', 'Air and Space', 'American History', 'Natural History']
      }
    ]
  }
};
