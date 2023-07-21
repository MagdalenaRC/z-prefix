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
      quantity: 2,
      image: 'https://www.supplymylab.com/_resources/_global/media/resized/00744/ihwx.27e350d5-c028-4711-a5ff-9a5dbf7b7fd5.500.500.jpg'
    },
    {
      user_account_id: 1, 
      itemname: 'Separatory Funnel', 
      description: 'conical funnel with a hemispherical end; used for liquid-liquid extraction which uses the solubility within different solvents to separate compounds', 
      quantity: 3,
      image: 'https://www.sciencecompany.com/Assets/ProductImages/nc12908n-lg.jpg'
    },
    {
      user_account_id: 1,
      itemname: 'Condenser',
      description: 'consists of an inner tube and outer tube; is used to condense vapors', 
      quantity: 4,
      image: 'https://ids.si.edu/ids/deliveryService?id=NMAH-ET2015-06857&max=1000'
    },
    {
      user_account_id: 1,
      itemname: 'Hot Plate',
      description: 'portable electric appliance used to heat glassware and its contents', 
      quantity: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmOyh-j6YhDKUGUgyDzFEVLLZkwpm6Ui-dA&usqp=CAU'
    },
    {
      user_account_id: 1,
      itemname: 'Serological Pipet',
      description: 'graduated pipet used to transfer liquids measured in volume by ml', 
      quantity: 8,
      image: 'https://www.thermofisher.com/TFS-Assets/EPM/product-images/Serological-pipettes-group-650x600.jpg-650.jpg'
    },
    {
      user_account_id: 1,
      itemname: 'Pasteur Pipet',
      description: 'also called dropper; is used to transfer small quanities of liquids', 
      quantity: 6,
      image: 'https://images.dutscher.com/reference/hd/065422.webp'
    },
    {
      user_account_id: 1,
      itemname: 'Test Tube Rack',
      description: 'holds multiple test tubes upright at the same time, often used in fractional distillation', 
      quantity: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTevm0nqPKn7WPPRi1hFcGo8OQ4Xx00BJEqQ&usqp=CAU'
    },
    {
      user_account_id: 2,
      itemname: 'Claisen Flask',
      description: 'special type of distillation flask used for reduced-pressure distillation', 
      quantity: 2,
      image: 'https://www.shivsons.com/wp-content/uploads/2018/01/15.240.0100-2-low.jpg'
    },
    {
      user_account_id: 2,
      itemname: 'Volumetric Flask',
      description: 'type of flask calibrated to contain a percise volume at a certain temperature; used for precise dilutions and preparation of standard solutions', 
      quantity: 7,
      image: 'https://www.eiscoindustrial.com/cdn/shop/products/ezjjppxqkdj8bhah1qhu_2000x2000.jpg?v=1659444810'
    },
    {
      user_account_id: 2,
      itemname: 'Chromatography Column',
      description: 'glass column with a tappered end; used in chromatography for the separation of chemical compounds', 
      quantity: 2,
      image: 'https://m.media-amazon.com/images/I/51jjnRp+-qL.jpg'
    },
    {
      user_account_id: 2,
      itemname: 'Erlenmeyer Flask',
      description: 'a conical flask with a flat bottom; used for storing, swirling, and heating liquids', 
      quantity: 9,
      image: 'https://www.veegee.com/cdn/shop/products/10530-500ASIBATAGlassErlenmeyerFlask_500mL-Filled_1024x1024@2x.jpg?v=1655233220'
    },
    {
      user_account_id: 2,
      itemname: 'Burette',
      description: 'graduated glass tube with a tap on one end; used for delivering known volumes of liquid, especially in titrations', 
      quantity: 4,
      image: 'https://vinmetrica.com/wp-content/uploads/2015/03/DSC1777-scaled.jpg'
    },
    {
      user_account_id: 2,
      itemname: 'Fractioning Column',
      description: 'straight column packed with glass beads or metal peices; used in the distillation of liquid mixtures', 
      quantity: 2,
      image: 'https://www.orgchemboulder.com/Technique/Procedures/Distillation/Images/Fractcolumns.jpg'
    },
    {
      user_account_id: 2,
      itemname: 'Desiccator',
      description: 'sealable enclosure containing dessicants; used to manipulate air-sensitive compounds or protect chemicals which are hygroscopic', 
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/61E6rAmO5jL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      user_account_id: 3,
      itemname: 'Thin Layer Chromatography Plate',
      description: 'plate with a non-reactive solid coated with a thin layer of absorbent material; used to separate compounds in non-volatile mixtures', 
      quantity: 12,
      image: 'https://www.emdmillipore.com/INTERSHOP/static/WFS/Merck-Site/-/Merck/en_US/Freestyle/LE-Lab-Essentials/Chromatography/LE-TLC-Plates-800x479-09152015.jpg'
    },
    {
      user_account_id: 3,
      itemname: 'Vacuum Manifold',
      description: 'glass tube with several ports along its length; used in Schlenk lines to provide a means of manipulating air and water-sensitive materials and reactions', 
      quantity: 1,
      image: 'https://chemglass.com/images/thumbs/0005286_vacuum-manifolds-inert-gas-chem-vac-valves.jpeg'
    },
    {
      user_account_id: 3,
      itemname: 'Quartz Cuvette',
      description: 'a 1 dm long sample cell; used for polarimetry', 
      quantity: 1,
      image: 'https://www.lab-club.com/WebRoot/Store/Shops/mss/5BEE/D016/CEA7/C59B/2915/AC1E/2302/5E95/LC-34.jpg'
    },
    {
      user_account_id: 3,
      itemname: 'Buchner Funnel',
      description: 'cylinder with a fritted glass disc/perforated plate separating it from the funnel; used to collect a desired solid from a volume of liquid, often through vacuum filtration', 
      quantity: 2,
      image: 'https://www.sciencecompany.com/Assets/ProductImages/nc13193n-lg.jpg'
    },
    {
      user_account_id: 3,
      itemname: 'Glass Funnel',
      description: 'borosilicate glass funnel with stem; used for gravity filtration using regular filter paper', 
      quantity: 2,
      image: 'https://m.media-amazon.com/images/I/317mgQ9ivrL.jpg'
    },
    {
      user_account_id: 3,
      itemname: 'Bunsen Burner',
      description: 'ambient air gas burner that produces a sign open gas flame; used for heating, sterilization, and combustion', 
      quantity: 1,
      image: 'https://www.globalgilson.com/content/images/thumbs/0014332_laboratory-gas-burners.jpeg'
    },
    {
      user_account_id: 3,
      itemname: 'Magnetic Stirrer',
      description: 'stir bar that employs a rotating magnetic field; used to stir small volumes of liquid', 
      quantity: 4,
      image: 'https://marvel-b1-cdn.bc0a.com/f00000000170758/www.ysi.com/ProductImages//c12168b2-718c-4749-b8ce-accd00e6c0c1/images/285214232---TZ-1545_1a.jpg'
    },
  ]);
};
