export const products = [
  {
    id: 'ac',
    title: 'Air Conditioners',
    desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    img: '/static/images/ac.png',
    detailedTitle:
      'CARRIER 2024 Model AI Flexicool Convertible 6-in-1 Cooling 1.5 Ton 3 Star Split Inverter Dual Filtration with HD & Auto Cleanser AC with PM 2.5 Filter - White  (18K ESTER NEO EXi+ INVERTER R32 SPLIT AC (CAI18ER3R34F0), Copper Condenser)',
    detailedDescription: [
      {
        title: 'AI 6-in-1 Flexicool Technology',
        desc: `At the heart of Carriers commitment to tailored cooling experiences
        lies the AI 6-IN-1 Flexicool Technology. Imagine a world where your
        air conditioner adapts to your preferences with a single click.
        Flexi Cool Inverter technology empowers you to choose from four
        different tonnage modes, optimising energy consumption based on
        weather conditions and your cooling preferences. Its not just
        cooling; its a personalised symphony of comfort orchestrated at your
        fingertips.`,
      },
      {
        title: 'Turbo Cool',
        desc: `When the scorching heat outside leaves you yearning for instant relief, Carrier's Turbo Cool Mode comes to the rescue. Picture a burst of cooling energy as the fan RPM skyrockets, delivering dramatically faster cooling and immediate comfort. It's not just relief; it's a swift embrace of coolness that transforms your home into an oasis of comfort.     `,
      },
      {
        title: 'High Ambient Cooling',
        desc: `As temperatures soar to unprecedented heights, Carrier's advanced outdoor units rise to the challenge. Envision a cooling experience that remains comfortable even in blistering conditions up to 52°C. It's not just cooling; it's resilience in the face of extreme weather, ensuring your comfort remains unwavering.`,
      },
    ],
    specifications: {
      general: {
        'In The Box':
          '1 Indoor Unit, 1 Outdoor Unit, Interconnecting Pipe, Interconnecting Wire, Remote Manual, 2 AAA Batteries',
        brand: 'CARRIER',
        'Model Name':
          '18K ESTER NEO EXi+ INVERTER R32 SPLIT AC (CAI18ER3R34F0)',
        type: 'Split',
        'Capacity In Tons': 1.5,
        'Star Rating': 3,
        'Bee Rating Year': 2024,
        color: 'White',
        'Cooling Capacity': 4800,
        compressor: 'High EER Rotary',
        dehumidification: true,
        'Remote Control': true,
        refrigerant: 'R-32',
        'Operating Modes': 'Auto Mode, Auto Swing Mode, Turbo Mode, Quiet Mode',
        'Condenser Coil': 'Copper',
      },
      dimensions: {
        'Indoor W x H x D': '85 cm x 27 cm x 22 cm',
        'Indoor Unit Weight': '10 kg',

        'Outdoor W x H x D': '79 cm x 54 cm x 28 cm',
        'Outdoor Unit Weight': '25.5 kg',
      },
      'Performance Features': {
        'Panel Display': 'LED',
        'indoor Temperature Indicator': true,
        'Turbo Mode': true,
      },
    },
  },
  {
    id: 'fridge',
    title: 'Fridge',
    desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    img: '/static/images/ac.png',
  },
  {
    id: 'ads',
    title: 'Air Conditioners',
    desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    img: '/static/images/ac.png',
  },
  {
    id: 'oij',
    title: 'Air Conditioners',
    desc: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    img: '/static/images/ac.png',
  },
]

export const getProductById = (productId) => {
  const product = products.find((p) => p.id === productId)
  return product
}
