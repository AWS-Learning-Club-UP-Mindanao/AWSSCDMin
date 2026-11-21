export interface ScheduleSession {
  type?: string;
  room?: string;
  title: string;
  registrationUrl?: string;
}

export interface ScheduleSlot {
  label: string;
  time: string;
  rows: ScheduleSession[][];
}

const FINSTER = "Finster Auditorium";
const F711 = "F711-F712";
const F710 = "F710";
const FOYER = "Exhibition Foyer";

export const schedule: ScheduleSlot[] = [
  {
    label: "08:00",
    time: "08:00 AM - 09:00 AM",
    rows: [[{ room: FINSTER, title: "Registration" }]],
  },
  {
    label: "09:00",
    time: "09:00 AM - 09:15 AM",
    rows: [[{ room: FINSTER, type: "Feevol Intro", title: "Opening Remarks" }]],
  },
  {
    label: "09:15",
    time: "09:15 AM - 09:45 AM",
    rows: [[{ room: FINSTER, type: "Keynote Speaker", title: "Asi Guiang" }]],
  },
  {
    label: "09:45",
    time: "09:45 AM - 10:10 AM",
    rows: [[{ room: FINSTER, type: "Sponsor Talk", title: "Lougie Caminoy" }]],
  },
  {
    label: "10:10",
    time: "10:10 AM - 10:15 AM",
    rows: [
      [
        { room: FINSTER, title: "Transition to Breakout Rooms" },
        { room: F711, title: "Transition to Breakout Rooms" },
        { room: F710, title: "Transition to Breakout Rooms" },
      ],
    ],
  },
  {
    label: "10:15",
    time: "10:15 AM - 10:40 AM",
    rows: [
      [
        { room: FINSTER, type: "Track A", title: "The Confidence to Show Up" },
        {
          room: F711,
          type: "Track B",
          title: "Building Serverless APIs with Amazon DynamoDB (Workshop)",
        },
        { room: F710, type: "Track D", title: "Build Your Own Context (Workshop)" },
      ],
    ],
  },
  {
    label: "10:40",
    time: "10:40 AM - 10:45 AM",
    rows: [
      [
        { room: FINSTER, title: "Transition to Breakout Rooms" },
        { room: F711, title: "Transition to Breakout Rooms" },
      ],
    ],
  },
  {
    label: "10:45",
    time: "10:45 AM - 11:45 AM",
    rows: [
      [
        {
          room: FINSTER,
          type: "Facilitator: Joe Hanna Cantero",
          title: "Project Showcase",
        },
        { room: F711, type: "Track C", title: "AWS Rekognition (Workshop)" },
      ],
    ],
  },
  {
    label: "11:45",
    time: "11:45 AM - 12:45 PM",
    rows: [
      [
        { room: FINSTER, title: "Lunch" },
        { room: F711, title: "Lunch" },
      ],
    ],
  },
  {
    label: "12:45",
    time: "12:45 PM - 03:15 PM",
    rows: [
      [
        { room: FINSTER, type: "Track E", title: "Capture The Flag" },
        { room: F711, type: "Track F", title: "Beyond the Prompt with Kiro (Workshop)" },
        {
          room: F710,
          type: "Facilitator: Joe Hanna Cantero",
          title: "Builder Cards Tournament",
        },
        { room: FOYER, title: "Open Space" },
      ],
    ],
  },
  {
    label: "03:15",
    time: "03:15 PM - 03:20 PM",
    rows: [
      [
        { room: FINSTER, title: "Transition to Main Hall" },
        { room: F711, title: "Transition to Main Hall" },
        { room: F710, title: "Transition to Main Hall" },
        { room: FOYER, title: "Transition to Main Hall" },
      ],
    ],
  },
  {
    label: "03:20",
    time: "03:20 PM - 03:50 PM",
    rows: [
      [
        { room: FINSTER, title: "Panel Discussion" },
        { room: F711, title: "Clean up" },
        { room: F710, title: "Clean up" },
      ],
    ],
  },
  {
    label: "03:50",
    time: "03:50 PM - 04:15 PM",
    rows: [[{ room: FINSTER, title: "Lightning Talks" }]],
  },
  {
    label: "04:15",
    time: "04:15 PM - 04:35 PM",
    rows: [[{ room: FINSTER, title: "Raffle and Awarding of Certificates" }]],
  },
  {
    label: "04:35",
    time: "04:35 PM - 05:00 PM",
    rows: [[{ room: FINSTER, title: "Closing Remarks & Photo Opportunity" }]],
  },
  {
    label: "05:00",
    time: "05:00 PM - 05:30 PM",
    rows: [[{ room: FINSTER, title: "Egress" }]],
  },
];
