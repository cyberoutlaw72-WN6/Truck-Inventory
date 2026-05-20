window.firetruckAppData = {
  appName: 'Firetruck Inventory',
  subtitle: 'Select any compartment on the truck to review the inventory stored there.',
  views: [
    {
      id: 'driver',
      name: 'Driver Side',
      description: 'Cab storage, pump-side tools, and access compartments on the driver side.',
      layout: 'driver',
      compartments: [
        {
          id: 'driver-cab',
          name: 'Inside Cab & Center Console',
          buttonLabel: 'Cab',
          layout: 'driver-cab',
          items: [
            'Work gloves -QTY 1', 'Flashlight -QTY 2', 'Access key church, landfill & FD key box -QTY 1', 'CP200 portable radio -QTY 3', 'HT750 portable radio -QTY 2', 'ERG 2024 -QTY 1', 'Property release forms -QTY 1', 'Witness statement & incident form binder -QTY 1', 'Driver logbook -QTY 1', 'Draeger CO type MOG S/N 8327611 -QTY 1', 'Narcan EXP March 2028 -QTY 1', 'Pry axe -QTY 1', 'Window punch belt cutter -QTY 1', 'N95 mask -QTY 8', 'Biohazard bag -QTY 4', 'SCBA 2216 -QTY 3', 'SCBA masks -QTY 6', 'Roll garbage bag -QTY 1', 'Rescue wipe box -QTY 2', 'Spare balaclava -QTY 4', 'Safety glasses -QTY 24', 'Fluke thermal mod TIS10 -QTY 1', 'Fluke infrared thermometer M61 -QTY 1', 'Blankets -QTY 5', 'First aid kit -QTY 1', 'Core cooldown kit -QTY 1', 'Respirator wipe -QTY 1', 'Nitrile gloves XL -QTY 1', 'Nitrile gloves medium -QTY 1', '20 lb class ABC extinguisher -QTY 1', 'Traffic vests -QTY 5', 'RIT pack -QTY 1', 'Battery-powered scene lights -QTY 4'
          ]
        },
        {
          id: 'driver-upper',
          name: 'Upper Storage Above Pump Compartment',
          buttonLabel: 'Pump Upper',
          layout: 'driver-upper',
          items: ['Generator -QTY 1', 'Broom -QTY 1', 'Pump packs -QTY 2']
        },
        {
          id: 'driver-front',
          name: 'Driver Side #1 Compartment (Front)',
          buttonLabel: 'Front 1',
          layout: 'driver-front',
          items: [
            'Ear defender -QTY 1', 'Hose wrench -QTY 8', 'Hose straps -QTY 2', 'Traffic control wands -QTY 2', 'Head lamps -QTY 20', 'Multi wrench (folding hose wrench) -QTY 1', 'Wye 2.5" to forestry -QTY 1', 'Wye 2.5" -QTY 1', 'Siamese 2.5" -QTY 1', 'Spanner wrench -QTY 1', 'Command board -QTY 1', 'Barrel strainer 6" -QTY 1', 'Mallet -QTY 1', '1.5" x 25 ft hose -QTY 1', 'Traffic cones -QTY 4', '50 ft 1.5" hose -QTY 1', '50 ft forestry hose -QTY 1', '25 ft 1.5" hose -QTY 1', '1.5" nozzle -QTY 4', '2.5" nozzle -QTY 2', '6" to 4" Storz adapter -QTY 1', 'Low level strainer -QTY 1', '2.5" double male -QTY 1', '2.5" double female -QTY 1', '1.5" cellar nozzle -QTY 1', 'Forestry bag (in compartment 1 driver side)', 'Wye -QTY 1', 'Piercing nozzle -QTY 4', 'Variable nozzle -QTY 3', 'Strangler -QTY 3', 'Repair band -QTY 3', 'Pump tool kit -QTY 1', 'Forestry to female thread 1.5" -QTY 2', 'Forestry to male thread 1.5" -QTY 2'
          ]
        },
        {
          id: 'driver-middle',
          name: 'Driver Side #2 Compartment (Middle)',
          buttonLabel: 'Middle 2',
          layout: 'driver-middle',
          items: ['Generator -QTY 1', 'Broom -QTY 1', 'Pump packs -QTY 2', 'Halligan -QTY 1', 'Short pike pole -QTY 1', 'Axe -QTY 1', 'Pike axe -QTY 1', 'Pulaski axe -QTY 1', 'Spade shovel -QTY 1', 'Long sledge -QTY 1', 'Short sledge -QTY 1', '4 ft steel pry bar -QTY 1', 'Bolt cutters -QTY 1']
        },
        {
          id: 'driver-lower',
          name: 'Below Driver Side #2 Compartment (Middle)',
          buttonLabel: 'Lower 2',
          layout: 'driver-lower',
          items: ['SCBA cylinders on driver side above rear wheels -QTY 2', 'SCBA cylinder above rear wheel -QTY 2']
        },
        {
          id: 'driver-rear',
          name: 'Driver Side #3 Compartment (Rear)',
          buttonLabel: 'Rear 3',
          layout: 'driver-rear',
          items: ['Forestry hose pack -QTY 2', 'Collapsible pump pack -QTY 2', 'Crates of cribbing -QTY 2', 'Extension cord -QTY 1', 'Cooler with water -QTY 1']
        },
        {
          id: 'driver-step',
          name: 'Driver Side Step Compartment',
          buttonLabel: 'Step',
          layout: 'driver-step',
          items: ['Tool kit -QTY 1', 'Tool kit for positive pressure fan & saws -QTY 1', 'Assortment of wrench metric -QTY 1', 'Assortment of wrench standard -QTY 1', 'Spill kit -QTY 1']
        }
      ]
    },
    {
      id: 'passenger',
      name: 'Passenger Side',
      description: 'Rescue tools, SCBA storage, saws, and step-compartment extrication gear.',
      layout: 'passenger',
      compartments: [
        {
          id: 'passenger-front',
          name: 'Passenger Side #1 Compartment (Front)',
          buttonLabel: 'Front 1',
          layout: 'passenger-front',
          items: ['Quick strut kits (2 struts per kit) -QTY 2', 'Makita 18V reciprocating saw S/N 1367902 -QTY 1', 'Makita 18V battery -QTY 2', 'Pack of blades for reciprocating saw -QTY 1', 'Window punch belt cutter -QTY 1', 'Power pack Holmatro S/N DPV3101404 -QTY 1', 'High pressure hoses -QTY 2']
        },
        {
          id: 'passenger-middle',
          name: 'Passenger Side #2 Compartment (Middle)',
          buttonLabel: 'Middle 2',
          layout: 'passenger-middle',
          items: ['Draeger 2216 SCBA -QTY 3']
        },
        {
          id: 'passenger-rear',
          name: 'Passenger Side #3 Compartment (Rear)',
          buttonLabel: 'Rear 3',
          layout: 'passenger-rear',
          items: ['Husqvarna chainsaw 351 -QTY 1', 'Chainsaw chaps -QTY 1', 'Spare chains -QTY 2', 'Bar tool -QTY 1', 'Can of 50:1 premix -QTY 1', 'Jug bar oil -QTY 1', '10 L gas can, not mixed -QTY 1', 'Positive pressure fan S/N 2765 model PGB21-4H0 -QTY 1', 'Ear defender -QTY 1', 'Large diameter hose clamp -QTY 1', 'Utility tarp -QTY 1', '5-gal ash bucket -QTY 1', 'Road flare -QTY 6', 'Steel chain -QTY 1', 'Makita circular saw EK7301 -QTY 1']
        },
        {
          id: 'passenger-step',
          name: 'Passenger Side Step Compartment',
          buttonLabel: 'Step',
          layout: 'passenger-step',
          items: ['Holmatro cutter -QTY 1', 'Holmatro spreader -QTY 1', 'Holmatro ram -QTY 1', 'Ogura S/N RPV7008 cutter spreader -QTY 1', 'Makita 18V battery (on Ogura tool) -QTY 1']
        }
      ]
    },
    {
      id: 'rear',
      name: 'Rear View',
      description: 'Rear-facing hose, ladder, and cross-lay storage.',
      layout: 'rear',
      compartments: [
        {
          id: 'rear-bay',
          name: 'Rear Compartment',
          buttonLabel: 'Rear Bay',
          layout: 'rear-bay',
          items: ['Husky plug-in scene light -QTY 1', '1.5" hose 2 lengths 100 ft', 'Wye 4" Storz to dual 2.5" -QTY 1', 'Rope bag utility -QTY 1', 'High rise kit 100 ft with nozzle 1.5 -QTY 2', '2216 air cylinders -QTY 8', 'Hydrant bag (in rear compartment)', 'Gate valve 2.5" to 4" Storz -QTY 1', '2.5" gate valve -QTY 1', 'Hydrant wrench -QTY 1', 'Hose wrench -QTY 2', 'Spanner wrench -QTY 1']
        },
        {
          id: 'rear-crosslay',
          name: 'Cross Lay & Trash Line',
          buttonLabel: 'Cross Lay',
          layout: 'rear-crosslay',
          items: ['Crosslay #1 1.5" 4 lengths 200 ft', 'Crosslay #2 1.5" 4 lengths 200 ft', 'Trashline 1.5" soft rubber hose 2 lengths 100 ft', '1.5" soft rubber line as spares 2 lengths 100 ft', 'Crosslay #1 1.5" variable nozzle -QTY 1', 'Crosslay #2 1.5" variable nozzle -QTY 1', 'Trash line 1.5" variable nozzle -QTY 1']
        },
        {
          id: 'rear-hosebed',
          name: 'Hose Bed',
          buttonLabel: 'Hose Bed',
          layout: 'rear-hosebed',
          items: ['4" high vol hose 5 lengths 500 ft', '2.5" forward lay 16 lengths 800 ft', '2.5" reverse lay 4 lengths 200 ft']
        },
        {
          id: 'rear-ladders',
          name: 'Ladder Storage Compartment',
          buttonLabel: 'Ladder Bay',
          layout: 'rear-ladders',
          items: ['Traffic control signs -QTY 2', 'Roof ladder -QTY 1', '24 ft extension ladder -QTY 1', 'Attic ladder -QTY 1', '8 ft fiberglass pike pole -QTY 1', '8 ft wood pike pole -QTY 1']
        }
      ]
    }
  ]
};
