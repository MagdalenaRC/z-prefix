/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE item CASCADE')
  await knex('item').del()
  await knex('item').insert([
    {
      user_account_id: 1, 
      itemname: 'Craig Tube', 
      description: 'consists of a stout-walled test-tube and loosely-fitting cylindrical stopper; purifies/separates a compound through crystallization by using the difference in solubility between compounds', 
      quantity: 2
    },
    {
      user_account_id: 1, 
      itemname: 'Separatory Funnel', 
      description: 'conical funnel with a hemispherical end; used for liquid-liquid extraction which uses the solubility within different solvents to separate compounds', 
      quantity: 3
    },
    {
      user_account_id: 1,
      itemname: 'Condenser',
      description: 'consists of an inner tube and outer tube; is used to condense vapors', 
      quantity: 4
    },
    {
      user_account_id: 1,
      itemname: 'Hot Plate',
      description: 'portable electric appliance used to heat glassware and its contents', 
      quantity: 5
    },
    {
      user_account_id: 1,
      itemname: 'Serological Pipet',
      description: 'graduated pipet used to transfer liquids measured in volume by ml', 
      quantity: 8
    },
    {
      user_account_id: 1,
      itemname: 'Pasteur Pipet',
      description: 'also called dropper; is used to transfer small quanities of liquids', 
      quantity: 6
    },
    {
      user_account_id: 1,
      itemname: 'Test Tube Rack',
      description: 'holds multiple test tubes upright at the same time, often used in fractional distillation', 
      quantity: 5
    },
    {
      user_account_id: 2,
      itemname: 'Claisen Flask',
      description: 'special type of distillation flask used for reduced-pressure distillation', 
      quantity: 2
    },
    {
      user_account_id: 2,
      itemname: 'Volumetric Flask',
      description: 'type of flask calibrated to contain a percise volume at a certain temperature; used for precise dilutions and preparation of standard solutions', 
      quantity: 7
    },
    {
      user_account_id: 2,
      itemname: 'Chromatography Column',
      description: 'glass column with a tappered end; used in chromatography for the separation of chemical compounds', 
      quantity: 2
    },
    {
      user_account_id: 2,
      itemname: 'Erlenmeyer Flask',
      description: 'a conical flask with a flat bottom; used for storing, swirling, and heating liquids', 
      quantity: 9
    },
    {
      user_account_id: 2,
      itemname: 'Burette',
      description: 'graduated glass tube with a tap on one end; used for delivering known volumes of liquid, especially in titrations', 
      quantity: 4
    },
    {
      user_account_id: 2,
      itemname: 'Fractioning Column',
      description: 'straight column packed with glass beads or metal peices; used in the distillation of liquid mixtures', 
      quantity: 2
    },
    {
      user_account_id: 2,
      itemname: 'Desiccator',
      description: 'sealable enclosure containing dessicants; used to manipulate air-sensitive compounds or protect chemicals which are hygroscopic', 
      quantity: 1
    },
    {
      user_account_id: 3,
      itemname: 'Thin Layer Chromatography Plate',
      description: 'plate with a non-reactive solid coated with a thin layer of absorbent material; used to separate compounds in non-volatile mixtures', 
      quantity: 12
    },
    {
      user_account_id: 3,
      itemname: 'Vacuum Manifold',
      description: 'glass tube with several ports along its length; used in Schlenk lines to provide a means of manipulating air and water-sensitive materials and reactions', 
      quantity: 1
    },
    {
      user_account_id: 3,
      itemname: 'Quartz Cuvette',
      description: 'a 1 dm long sample cell; used for polarimetry', 
      quantity: 1
    },
    {
      user_account_id: 3,
      itemname: 'Buchner Funnel',
      description: 'cylinder with a fritted glass disc/perforated plate separating it from the funnel; used to collect a desired solid from a volume of liquid, often through vacuum filtration', 
      quantity: 2
    },
    {
      user_account_id: 3,
      itemname: 'Glass Funnel',
      description: 'borosilicate glass funnel with stem; used for gravity filtration using regular filter paper', 
      quantity: 2
    },
    {
      user_account_id: 3,
      itemname: 'Bunsen Burner',
      description: 'ambient air gas burner that produces a sign open gas flame; used for heating, sterilization, and combustion', 
      quantity: 1
    },
    {
      user_account_id: 3,
      itemname: 'Magnetic Stirrer',
      description: 'stir bar that employs a rotating magnetic field; used to stir small volumes of liquid', 
      quantity: 4
    },
  ]);
};
