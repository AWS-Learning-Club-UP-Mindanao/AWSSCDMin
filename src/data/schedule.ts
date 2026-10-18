/**
 * Schedule content for AWS Student Community Day Mindanao.
 *
 * Source: the organisers' run sheet. Talk titles for the parallel tracks are not confirmed yet,
 * so the workshops read as Workshop 1, Workshop 2 and so on.
 */

export interface ScheduleSession {
  /** "Workshop", "Panel", "Networking". Left out when a session has no type label. */
  type?: string;
  /** Room the session runs in. Left out when the session is not tied to one. */
  room?: string;
  title: string;
  /** Where "Register" points. Left out when there is nothing to register for. */
  registrationUrl?: string;
}

export interface ScheduleSlot {
  /** The short marker printed above the range, e.g. "09:30". */
  label: string;
  /** The full range, e.g. "09:30 AM - 10:30 AM". */
  time: string;
  /**
   * The lines printed under this time. A line holds one session, or two or more when those
   * sessions run in parallel rooms.
   */
  rows: ScheduleSession[][];
}

export const schedule: ScheduleSlot[] = [
  {
    label: "08:30",
    time: "08:30 AM - 09:00 AM",
    rows: [
      [{ room: "Registration Desk / Lobby", title: "Ingress & Delegate Registration" }],
    ],
  },
  {
    label: "09:00",
    time: "09:00 AM - 09:15 AM",
    rows: [[{ room: "Main Hall", title: "Grand Opening Ceremony & Opening Remarks" }]],
  },
  {
    label: "09:15",
    time: "09:15 AM - 09:45 AM",
    rows: [[{ room: "Main Hall", title: "Keynote Session" }]],
  },
  {
    label: "09:45",
    time: "09:45 AM - 10:10 AM",
    rows: [[{ room: "Main Hall", title: "Sponsor Talk" }]],
  },
  {
    label: "10:10",
    time: "10:10 AM - 10:40 AM",
    rows: [[{ room: "Main Hall", title: "Panel Discussion" }]],
  },
  {
    label: "10:40",
    time: "10:40 AM - 10:45 AM",
    rows: [[{ room: "Main Hall", title: "Transition to Breakout Rooms" }]],
  },
  {
    label: "10:45",
    time: "10:45 AM - 11:45 AM",
    rows: [
      [
        { room: "Main Hall", title: "Project Showcase" },
        { type: "Workshop", room: "Breakout Room 1", title: "Workshop 1" },
        { type: "Workshop", room: "Breakout Room 2", title: "Workshop 2" },
      ],
    ],
  },
  {
    label: "11:45",
    time: "11:45 AM - 12:45 PM",
    rows: [
      [{ room: "Main Hall & Exhibition Area", title: "Lunch Break & Community Showcase" }],
    ],
  },
  {
    label: "12:45",
    time: "12:45 PM - 03:15 PM",
    rows: [
      [
        { room: "Main Hall", title: "Builder Cards Tournament" },
        { type: "Workshop", room: "Breakout Room 1", title: "Workshop 3" },
        { type: "Workshop", room: "Breakout Room 2", title: "Workshop 4" },
        { room: "Exhibition Foyer", title: "Open Space" },
      ],
    ],
  },
  {
    label: "15:15",
    time: "03:15 PM - 03:45 PM",
    rows: [[{ room: "Main Hall", title: "Lightning Talks & Afternoon Snacks" }]],
  },
  {
    label: "15:45",
    time: "03:45 PM - 04:15 PM",
    rows: [
      [
        { room: "Main Hall & Exhibition Area", title: "Structured Networking & Community Session" },
      ],
    ],
  },
  {
    label: "16:15",
    time: "04:15 PM - 04:35 PM",
    rows: [[{ room: "Main Hall", title: "Raffle Session & CTF Tournament Awarding" }]],
  },
  {
    label: "16:35",
    time: "04:35 PM - 05:00 PM",
    rows: [[{ room: "Main Hall", title: "Closing Remarks & Grand Group Photo" }]],
  },
  {
    label: "17:00",
    time: "05:00 PM - 05:30 PM",
    rows: [[{ room: "All Venues", title: "Egress & Cleanup" }]],
  },
];
