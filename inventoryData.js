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
            'Work gloves 1', 'Flashlight 2', 'Access key church, landfill & FD key box 1', 'CP200 portable radio 3', 'HT750 portable radio 2', 'ERG 2024 1', 'Property release forms 1', 'Witness statement & incident form binder 1', 'Driver logbook 1', 'Draeger CO type MOG S/N 8327611 1', 'Narcan EXP March 2028 1', 'Pry axe 1', 'Window punch belt cutter 1', 'N95 mask 8', 'Biohazard bag 4', 'SCBA 2216 3', 'SCBA masks 6', 'Roll garbage bag 1', 'Rescue wipe box 2', 'Spare balaclava 4', 'Safety glasses 24', 'Fluke thermal mod TIS10 1', 'Fluke infrared thermometer M61 1', 'Blankets 5', 'First aid kit 1', 'Core cooldown kit 1', 'Respirator wipe 1', 'Nitrile gloves XL 1', 'Nitrile gloves medium 1', '20 lb class ABC extinguisher 1', 'Traffic vests 5', 'RIT pack 1', 'Battery-powered scene lights 4'
          ]
        },
        {
          id: 'driver-upper',
          name: 'Upper Storage Above Pump Compartment',
          buttonLabel: 'Pump Upper',
          layout: 'driver-upper',
          items: ['Generator 1', 'Broom 1', 'Pump packs 2']
        },
        {
          id: 'driver-front',
          name: 'Driver Side #1 Compartment (Front)',
          buttonLabel: 'Front 1',
          layout: 'driver-front',
          items: [
            'Ear defender 1', 'Hose wrench 8', 'Hose straps 2', 'Traffic control wands 2', 'Head lamps 20', 'Multi wrench (folding hose wrench) 1', 'Wye 2.5" to forestry 1', 'Wye 2.5" 1', 'Siamese 2.5" 1', 'Spanner wrench 1', 'Command board 1', 'Barrel strainer 6" 1', 'Mallet 1', '1.5" x 25 ft hose 1', 'Traffic cones 4', '50 ft 1.5" hose 1', '50 ft forestry hose 1', '25 ft 1.5" hose 1', '1.5" nozzle 4', '2.5" nozzle 2', '6" to 4" Storz adapter 1', 'Low level strainer 1', '2.5" double male 1', '2.5" double female 1', '1.5" cellar nozzle 1', 'Forestry bag (in compartment 1 driver side)', 'Wye 1', 'Piercing nozzle 4', 'Variable nozzle 3', 'Strangler 3', 'Repair band 3', 'Pump tool kit 1', 'Forestry to female thread 1.5" 2', 'Forestry to male thread 1.5" 2'
          ]
        },
        {
          id: 'driver-middle',
          name: 'Driver Side #2 Compartment (Middle)',
          buttonLabel: 'Middle 2',
          layout: 'driver-middle',
          items: ['Generator 1', 'Broom 1', 'Pump packs 2', 'Halligan 1', 'Short pike pole 1', 'Axe 1', 'Pike axe 1', 'Pulaski axe 1', 'Spade shovel 1', 'Long sledge 1', 'Short sledge 1', '4 ft steel pry bar 1', 'Bolt cutters 1']
        },
        {
          id: 'driver-lower',
          name: 'Below Driver Side #2 Compartment (Middle)',
          buttonLabel: 'Lower 2',
          layout: 'driver-lower',
          items: ['SCBA cylinders on driver side above rear wheels 2', 'SCBA cylinder above rear wheel 2']
        },
        {
          id: 'driver-rear',
          name: 'Driver Side #3 Compartment (Rear)',
          buttonLabel: 'Rear 3',
          layout: 'driver-rear',
          items: ['Forestry hose pack 2', 'Collapsible pump pack 2', 'Crates of cribbing 2', 'Extension cord 1', 'Cooler with water 1']
        },
        {
          id: 'driver-step',
          name: 'Driver Side Step Compartment',
          buttonLabel: 'Step',
          layout: 'driver-step',
          items: ['Tool kit 1', 'Tool kit for positive pressure fan & saws 1', 'Assortment of wrench metric 1', 'Assortment of wrench standard 1', 'Spill kit 1']
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
          items: ['Quick strut kits (2 struts per kit) 2', 'Makita 18V reciprocating saw S/N 1367902 1', 'Makita 18V battery 2', 'Pack of blades for reciprocating saw 1', 'Window punch belt cutter 1', 'Power pack Holmatro S/N DPV3101404 1', 'High pressure hoses 2']
        },
        {
          id: 'passenger-middle',
          name: 'Passenger Side #2 Compartment (Middle)',
          buttonLabel: 'Middle 2',
          layout: 'passenger-middle',
          items: ['Draeger 2216 SCBA 3']
        },
        {
          id: 'passenger-rear',
          name: 'Passenger Side #3 Compartment (Rear)',
          buttonLabel: 'Rear 3',
          layout: 'passenger-rear',
          items: ['Husqvarna chainsaw 351 1', 'Chainsaw chaps 1', 'Spare chains 2', 'Bar tool 1', 'Can of 50:1 premix 1', 'Jug bar oil 1', '10 L gas can, not mixed 1', 'Positive pressure fan S/N 2765 model PGB21-4H0 1', 'Ear defender 1', 'Large diameter hose clamp 1', 'Utility tarp 1', '5-gal ash bucket 1', 'Road flare 6', 'Steel chain 1', 'Makita circular saw EK7301 1']
        },
        {
          id: 'passenger-step',
          name: 'Passenger Side Step Compartment',
          buttonLabel: 'Step',
          layout: 'passenger-step',
          items: ['Holmatro cutter 1', 'Holmatro spreader 1', 'Holmatro ram 1', 'Ogura S/N RPV7008 cutter spreader 1', 'Makita 18V battery (on Ogura tool) 1']
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
          items: ['Husky plug-in scene light 1', '1.5" hose 2 lengths 100 ft', 'Wye 4" Storz to dual 2.5" 1', 'Rope bag utility 1', 'High rise kit 100 ft with nozzle 1.5 2', '2216 air cylinders 8', 'Hydrant bag (in rear compartment)', 'Gate valve 2.5" to 4" Storz 1', '2.5" gate valve 1', 'Hydrant wrench 1', 'Hose wrench 2', 'Spanner wrench 1']
        },
        {
          id: 'rear-crosslay',
          name: 'Cross Lay & Trash Line',
          buttonLabel: 'Cross Lay',
          layout: 'rear-crosslay',
          items: ['Crosslay #1 1.5" 4 lengths 200 ft', 'Crosslay #2 1.5" 4 lengths 200 ft', 'Trashline 1.5" soft rubber hose 2 lengths 100 ft', '1.5" soft rubber line as spares 2 lengths 100 ft', 'Crosslay #1 1.5" variable nozzle 1', 'Crosslay #2 1.5" variable nozzle 1', 'Trash line 1.5" variable nozzle 1']
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
          items: ['Traffic control signs 2', 'Roof ladder 1', '24 ft extension ladder 1', 'Attic ladder 1', '8 ft fiberglass pike pole 1', '8 ft wood pike pole 1']
        }
      ]
    }
  ]
};
