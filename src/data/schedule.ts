/**
 * Schedule content for AWS Student Community Day Mindanao.
 *
 * Transcribed from the exported frames (SCD '26 Website.pdf, pages 13/14/15) so the section
 * matches the approved design. This file is the single place to change the content.
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
   * The lines printed under this time. A line holds one session, or two when those sessions
   * run in parallel rooms — that is how the design shows Room 212 and Room 222 side by side.
   *
   * Each slot is one entry on the timeline with its own marker and connector, so sessions that
   * share a time are listed as separate slots rather than stacked under one marker.
   */
  rows: ScheduleSession[][];
}

/**
 * Registration currently points at the tickets section on this page, which is where the ticket
 * tiers will live. Swap for the real registration link once it exists.
 */
const REGISTER_URL = "#tickets";

/** The four sessions that all open at 09:30 keep the same label and range. */
const OPENING_LABEL = "09:30";
const OPENING_TIME = "09:30 AM - 10:30 AM";

export const schedule: ScheduleSlot[] = [
  {
    label: OPENING_LABEL,
    time: OPENING_TIME,
    rows: [[{ title: "Registration" }]],
  },
  {
    label: OPENING_LABEL,
    time: OPENING_TIME,
    rows: [
      [
        {
          type: "Workshop",
          title: "This Is The Longest Title I Can Think To Put Here.",
          registrationUrl: REGISTER_URL,
        },
      ],
    ],
  },
  {
    label: OPENING_LABEL,
    time: OPENING_TIME,
    rows: [[{ type: "Workshop", title: "AWS Kiro", registrationUrl: REGISTER_URL }]],
  },
  {
    label: OPENING_LABEL,
    time: OPENING_TIME,
    rows: [
      [
        {
          room: "Room 212",
          title: "Innovate With Cloud Tech",
          registrationUrl: REGISTER_URL,
        },
        {
          room: "Room 222",
          title: "Building Scalable Apps",
          registrationUrl: REGISTER_URL,
        },
      ],
    ],
  },
  {
    label: "11:00",
    time: "11:00 AM - 12:00 PM",
    rows: [
      [
        {
          type: "Panel",
          title: "Future Of AI In Business",
          registrationUrl: REGISTER_URL,
        },
      ],
    ],
  },
  {
    label: "12:15",
    time: "12:15 PM - 01:15 PM",
    rows: [
      [
        {
          type: "Networking",
          title: "Meet Industry Leaders Lunch",
          registrationUrl: REGISTER_URL,
        },
      ],
    ],
  },
];
