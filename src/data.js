export const colors = [
  { label: "Arancio Atlas", value: "#F77F21", price: 0 },
  { label: "Arancio Argos", value: "#FC4705", price: 1500 },
  { label: "Blu Cepheus", value: "#1b76bc", price: 1500 },
  { label: "Rosso Mars", value: "#BF0012", price: 1500 },
  { label: "Bianco Monocerus", value: "#F2F3F5", price: 2500 }
];

export const wheelColor = [
  { label: "Black", value: "#000000", price: 0 },
  { label: "Grey", value: "#4C5457", price: 1500 },
  { label: "Metalic", value: "#dddddd", price: 1500 }
];

export const interiorColors = [
  { label: "All black Figured Ash Wood Décor", value: "all_black", price: 0 },
  { label: "Black and white Dark Ash Wood Décor", value: "black_and_white", price: 1500 },
  { label: "Cream Oak Wood Décor", value: "cream", price: 1500 },
];

export const interiorLayouts = [
  { label: "Five seat interior", value: "five_seat", price: 0 },   
  { label: "Six seat interior", value: "six_seat", price: 6500 },
  { label: "Seven seat interior", value: "seven_seat", price: 3500 },
];

export const models = [
  {
    key: 's',
    name: "Model S",
    colors: colors,
    wheelColor: wheelColor,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/aventador/Render_Tyre_0A.png`,
        label: 'Obj_Rim_T0A',
        value: "Obj_Rim_T0A",
        price: 0
      },
      {
        src: `${process.env.PUBLIC_URL}/aventador/Render_Tyre_0B.png`,
        label: 'Obj_Rim_T0B',
        value: 'Obj_Rim_T0B',
        price: 4500
      }
    ],
    types: [
      {
        label: "Long Range Plus",
        value: "long_range_plus",
        specs: {
          range: 402,
          top_speed: 155,
          acceleration_time: 3.7,
        },
        price: 69420
      },
      {
        label: "Performance",
        value: "performance",
        specs: {
          range: 387,
          top_speed: 163,
          acceleration_time: 2.3,
        },
        price: 91990,
        benefits: [
          "Quicker acceleration: 0-60 mph in 2.3s",
          "Ludicrous Mode",
          "Enhanced Interior Styling",
          "Carbon fiber spoiler"
        ]
      },
      {
        label: "Plaid",
        value: "plaid",
        specs: {
          range: 520,
          top_speed: 200,
          acceleration_time: 2.0,
        },
        price: 139990,
        benefits: [
          "Quickest 0-60 mph and quarter mile acceleration of any production car ever",
          "Acceleration from 0-60 mph: <2.0s",
          "Quarter mile: <9.0s",
          "1,100+ horsepower",
          "Tri Motor All-Wheel Drive"
        ]
      },
    ],
    interiorColors: interiorColors
  },
  {
    key: 'x',
    name: "Model X",
    colors: colors,
    wheelColor: wheelColor,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/aventador/Render_Tyre_0A.png`,
        label: 'Obj_Rim_T0A',
        value: "Obj_Rim_T0A",
        price: 0
      },
      {
        src: `${process.env.PUBLIC_URL}/aventador/Render_Tyre_0B.png`,
        label: 'Obj_Rim_T0B',
        value: 'Obj_Rim_T0B',
        price: 4500
      }
    ],
    types: [
      {
        label: "Long Range Plus",
        value: "long_range_plus",
        specs: {
          range: 371,
          top_speed: 155,
          acceleration_time: 4.4
        },
        price: 79900
      },
      {
        label: "Performance",
        value: "performance",
        specs: {
          range: 341,
          top_speed: 163,
          acceleration_time: 2.6
        },
        price: 99990,
        benefits: [
          "Quicker acceleration: 0-60 mph in 2.6s",
          "Ludicrous Mode",
          "Enhanced Interior Styling"
        ]
      }
    ],
    interiorColors: interiorColors,
    interiorLayouts: interiorLayouts
  },
  {
    key: 'y',
    name: "Model Y",
    colors: colors,
    wheelColor: wheelColor,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/aventador/Render_Tyre_0A.png`,
        label: 'Obj_Rim_T0A',
        value: "Obj_Rim_T0A",
        price: 0
      },
      {
        src: `${process.env.PUBLIC_URL}/aventador/Render_Tyre_0B.png`,
        label: 'Obj_Rim_T0B',
        value: 'Obj_Rim_T0B',
        price: 4500
      }
    ],
    types: [
      {
        label: "Long Range",
        value: "long_range",
        specs: {
          range: 326,
          top_speed: 135,
          acceleration_time: 4.8
        },
        price: 45690
      },
      {
        label: "Performance",
        value: "performance",
        specs: {
          range: 303,
          top_speed: 155,
          acceleration_time: 3.5
        },
        price: 55690,
        benefits: [
          "Increased top speed from 135mph to 155mph",
          "21’’ Überturbine Wheels",
          "Performance Brakes",
          "Lowered suspension",
          "Aluminum alloy pedals"
        ]
      }
    ],
    interiorColors: interiorColors.slice(0,2),
    interiorLayouts: [interiorLayouts[0], interiorLayouts[2]]
  }
];

export const initialConfig = {
  's': {
    car_type: "long_range_plus",
    model: "s",
    color: "#1b76bc",
    wheels: 'Obj_Rim_T0A',
    wheelColor: '#000000',
    interior_color: "all_black"
  },
  'x': {
    car_type: "long_range_plus",
    model: "x",
    color: "#1b76bc",
    wheels: 'Obj_Rim_T0A',
    wheelColor: '#000000',
    interior_color: "all_black",
    interior_layout: "five_seat"
  },
  'y': {
    car_type: "long_range",
    model: "y",
    color: "#1b76bc",
    wheels: 'Obj_Rim_T0A',
    wheelColor: '#000000',
    interior_color: "all_black",
    interior_layout: "five_seat"
  }
};