



export const Clients = [
  {
    id: 1,
    image: "/assets/images/bcbs.png",
    name: "BlueCross BlueShield",
    status: "active",
    group: "Tech event 1",
    brand: "BlueCross BlueShield",
  },
  {
    id: 2,
    image: "/assets/images/cvs.png",
    name: "CVS Specialty Health",
    status: "active",
    group: "Social event 1",
    brand: "CVS Specialty Health"
  },
  {
    id: 3,
    image: "/assets/images/ford.png",
    name: "Ford",
    status: "pending",
    group: "Tech event 1",
    brand: "Ford",
  },
  {
    id: 4,
    image: "/assets/images/foxstudios.png",
    name: "Fox Studios",
    status: "invited",
    group: "Social event 1",
    brand: "Fox Studios",
  },
  {
    id: 5,
    image: "/assets/images/leoburnett.png",
    name: "Leo Burnett",
    status: "invited",
    group: "Tech event 1",
    brand: "Leo Burnett",
  },
  {
    id: 6,
    image: "/assets/images/livenation.png",
    name: "Live Nation",
    status: "active",
    group: "Tech event 2",
    brand: "Live Nation",
  },
  {
    id: 7,
    image: "/assets/images/mparticle.png",
    name: "M Particle",
    status: "deactivated",
    group: "Social event 2",
    brand: "M Particle",
  },
  {
    id: 8,
    image: "/assets/images/snackmedia.png",
    name: "Snack Media",
    status: "deactivated",
    group: "Social event 2",
    brand: "Snack Media",
  },
  {
    id: 9,
    image: "/assets/images/touchjet.png",
    name: "Touchjet",
    status: "deactivated",
    group: "Tech event 2",
    brand: "Touchjet",
  },
];

export const InvitedClients = [

  {
    id: 4,
    image: "/assets/images/foxstudios.png",
    name: "Fox Studios",
    status: "invited",
    group: "Social event 1",
    brand: "Fox Studios",
    start: new Date(2024, 9, 2 ),
    end: new Date(2024, 10, 1 ),
  },
  {
    id: 5,
    image: "/assets/images/leoburnett.png",
    name: "Leo Burnett",
    status: "invited",
    group: "Tech event 1",
    brand: "Leo Burnett",
    start: new Date(2024, 9, 2 ),
    end: new Date(2024, 10, 1 ),
  },
];

export const DeactivatedClients = [
  {
    id: 7,
    image: "/assets/images/mparticle.png",
    name: "M Particle",
    status: "deactivated",
    group: "Social event 2",
    brand: "M Particle",
    start: new Date(2024, 9, 2 ),
    end: new Date(2024, 10, 1 ),
  },
  {
    id: 8,
    image: "/assets/images/snackmedia.png",
    name: "Snack Media",
    status: "deactivated",
    group: "Social event 2",
    brand: "Snack Media",
    start: new Date(2024, 9, 2 ),
    end: new Date(2024, 10, 1 ),
  },
  {
    id: 9,
    image: "/assets/images/touchjet.png",
    name: "Touchjet",
    status: "deactivated",
    group: "Tech event 2",
    brand: "Touchjet",
    start: new Date(2024, 9, 2 ),
    end: new Date(2024, 10, 1 ),
  },
];

export const PendingClients = [

  {
    id: 3,
    image: "/assets/images/ford.png",
    name: "Ford",
    status: "pending",
    group: "Tech event 1",
    brand: "Ford",
    start: new Date(2024, 10, 2 ),
    end: new Date(2024, 11, 1 ),
  },
];

export const ActiveClients = [
  {
    id: 1,
    image: "/assets/images/bcbs.png",
    name: "BlueCross BlueShield",
    status: "expiring",
    group: "Tech event 1",
    brand: "BlueCross BlueShield",
    start: new Date(2024, 10, 22 ),
    end: new Date(2024, 11, 21 ),
  },
  {
    id: 2,
    image: "/assets/images/cvs.png",
    name: "CVS Specialty Health",
    status: "active",
    group: "Social event 1",
    brand: "CVS Specialty Health",
    start: new Date(2024, 10, 22 ),
    end: new Date(2024, 11, 21 ),
  },
  {
    id: 6,
    image: "/assets/images/livenation.png",
    name: "Live Nation",
    status: "active",
    group: "Tech event 2",
    brand: "Live Nation",
    start: new Date(2024, 10, 22 ),
    end: new Date(2024, 11, 21 ),
  },
];

export const StatusIcon = {
  pending: "/assets/icons/pending-white.svg",
  invited: "/assets/icons/invited-white.svg",
  active: "/assets/icons/check-white.svg",
  expiring: "/assets/icons/exclamation.svg",
  deactivated: "/assets/icons/cancelled-white.svg",
};