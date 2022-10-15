export const ATTACKS_LIST = [

    // Attaque vide
    {
        'id'           : '00',
        'name'         : '-',
        'type'         : '',
        'class'        : '',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 0,
        'pokemon_list' : []
    },



    // CS
    {
        'id'           : 'CS01',
        'name'         : 'Coupe',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 50,
        'accuracy'     : 95,
        'pp_total'     : 30,
        'pokemon_list' : [
            '001', // Bulbizarre
            '002', // Herbizarre
            '003', // Florizarre
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '015', // Dardargnan
            '027', // Sabelette
            '028', // Sablaireau
            '043', // Mystherbe
            '044', // Ortide
            '045', // Rafflesia
            '046', // Paras
            '047', // Parasect
            '050', // Taupiqueur
            '051', // Triopikeur
            '069', // Chétiflor
            '070', // Boustiflor
            '071', // Empiflor
            '072', // Tentacool
            '073', // Tentacruel
            '083', // Canarticho
            '098', // Krabby
            '099', // Krabboss
            '108', // Excelangue
            '114', // Saquedeneu
            '123', // Insécateur
            '127', // Scarabrute
            '141', // Kabutops
            '151'  // Mew
        ]
    },
    {
        'id'           : 'CS02',
        'name'         : 'Vol',
        'type'         : 'Vol',
        'class'        : 'Physique',
        'power'        : 70,
        'accuracy'     : 95,
        'pp_total'     : 15,
        'pokemon_list' : [
            '006', // Dracaufeu
            '016', // Roucool
            '017', // Roucoups
            '018', // Roucarnage
            '021', // Piafabec
            '022', // Rapasdepic
            '083', // Canarticho
            '084', // Doduo
            '085', // Dodrio
            '142', // Ptéra
            '144', // Artikodin
            '145', // Électhor
            '146', // Sulfura
            '151'  // Mew
        ]
    },
    {
        'id'           : 'CS03',
        'name'         : 'Surf',
        'type'         : 'Eau',
        'class'        : 'Spéciale',
        'power'        : 95,
        'accuracy'     : 100,
        'pp_total'     : 15,
        'pokemon_list' : [
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '031', // Nidoqueen
            '034', // Nidoking
            '054', // Psykokwak
            '055', // Akwakwak
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '072', // Tentacool
            '073', // Tentacruel
            '079', // Ramoloss
            '080', // Flagadoss
            '086', // Otaria
            '087', // Lamantine
            '090', // Kokiyas
            '091', // Crustabri
            '098', // Krabby
            '099', // Krabboss
            '108', // Excelangue
            '112', // Rhinoféros
            '115', // Kangourex
            '116', // Hypotrempe
            '117', // Hypocéan
            '118', // Poissirène
            '119', // Poissoroy
            '120', // Stari
            '121', // Staross
            '130', // Léviator
            '131', // Lokhlass
            '134', // Aquali
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '143', // Ronflex
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '151'  // Mew
        ]
    },
    {
        'id'           : 'CS04',
        'name'         : 'Force',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 80,
        'accuracy'     : 100,
        'pp_total'     : 15,
        'pokemon_list' : [
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '023', // Abo
            '024', // Arbok
            '027', // Sabelette
            '028', // Sablaireau
            '031', // Nidoqueen
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '039', // Rondoudou
            '040', // Grodoudou
            '054', // Psykokwak
            '055', // Akwakwak
            '056', // Férosinge
            '057', // Colossinge
            '061', // Têtarte
            '062', // Tartard
            '066', // Machoc
            '067', // Machopeur
            '068', // Mackogneur
            '074', // Racaillou
            '075', // Gravalanch
            '076', // Grolem
            '079', // Ramoloss
            '080', // Flagadoss
            '086', // Otaria
            '087', // Lamantine
            '094', // Ectoplasma
            '095', // Onix
            '098', // Krabby
            '099', // Krabboss
            '103', // Noadkoko
            '104', // Osselait
            '105', // Ossatueur
            '106', // Kicklee
            '107', // Tygnon
            '108', // Excelangue
            '112', // Rhinoféros
            '113', // Leveinard
            '115', // Kangourex
            '125', // Élektek
            '126', // Magmar
            '128', // Tauros
            '130', // Léviator
            '131', // Lokhlass
            '143', // Ronflex
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
    {
        'id'           : 'CS05',
        'name'         : 'Flash',
        'type'         : 'Normal',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 70,
        'pp_total'     : 20,
        'pokemon_list' : [
            '012', // Papilusion
            '025', // Pikachu
            '026', // Raichu
            '035', // Mélofée
            '036', // Mélodelfe
            '039', // Rondoudou
            '040', // Grodoudou
            '063', // Abra
            '064', // Kadabra
            '065', // Alakazam
            '079', // Ramoloss
            '080', // Flagadoss
            '081', // Magnéti
            '096', // Soporifik
            '097', // Hypnomade
            '100', // Voltorbe
            '101', // Électrode
            '113', // Leveinard
            '120', // Stari
            '121', // Staross
            '122', // M. Mime
            '125', // Élektek
            '135', // Voltali
            '137', // Porygon
            '145', // Électhor
            '150', // Mewtwo
            '151'  // Mew
        ]
    },



    // CT
    {
        'id'           : 'CT01',
        'name'         : 'Ultimapoing',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 80,
        'accuracy'     : 85,
        'pp_total'     : 20,
        'pokemon_list' : [
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '025', // Pikachu
            '026', // Raichu
            '031', // Nidoqueen
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '039', // Rondoudou
            '040', // Grodoudou
            '054', // Psykokwak
            '055', // Akwakwak
            '056', // Férosinge
            '057', // Colossinge
            '061', // Têtarte
            '062', // Tartard
            '063', // Abra
            '064', // Kadabra
            '065', // Alakazam
            '066', // Machoc
            '067', // Machopeur
            '068', // Mackogneur
            '074', // Racaillou
            '075', // Gravalanch
            '076', // Grolem
            '080', // Flagadoss
            '094', // Ectoplasma
            '096', // Soporifik
            '097', // Hypnomade
            '104', // Osselait
            '105', // Ossatueur
            '106', // Kicklee
            '107', // Tygnon
            '108', // Excelangue
            '112', // Rhinoféros
            '113', // Leveinard
            '115', // Kangourex
            '122', // M. Mime
            '124', // Lippoutou
            '125', // Élektek
            '126', // Magmar
            '143', // Ronflex
            '150', // Mewtwo
            '151'  // Mew
        ]
      },
      {
        'id'           : 'CT02',
        'name'         : 'Coupe-Vent',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 80,
        'accuracy'     : 75,
        'pp_total'     : 10,
        'pokemon_list' : [
            '012', // Papilusion
            '016', // Roucool
            '017', // Roucoups
            '018', // Roucarnage
            '021', // Piafabec
            '022', // Rapasdepic
            '041', // Nosferapti
            '042', // Nosferalto
            '049', // Aéromite
            '083', // Canarticho
            '141', // Kabutops
            '142', // Ptéra
            '144', // Artikodin
            '145', // Électhor
            '146', // Sulfura
            '149', // Dracolosse
            '151'  // Mew
        ]
      },
      {
        'id'           : 'CT03',
        'name'         : 'Danse-Lames',
        'type'         : 'Normal',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 30,
        'pokemon_list' : [
            '001', // Bulbizarre
            '002', // Herbizarre
            '003', // Florizarre
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '015', // Dardargnan
            '027', // Sabelette
            '028', // Sablaireau
            '043', // Mystherbe
            '044', // Ortide
            '045', // Rafflesia
            '046', // Paras
            '047', // Parasect
            '069', // Chétiflor
            '070', // Boustiflor
            '071', // Empiflor
            '072', // Tentacool
            '073', // Tentacruel
            '083', // Canarticho
            '098', // Krabby
            '099', // Krabboss
            '104', // Osselait
            '105', // Ossatueur
            '114', // Saquedeneu
            '123', // Insécateur
            '127', // Scarabrute
            '140', // Kabuto
            '141', // Kabutops
            '151'  // Mew
        ]
      },
      {
        'id'           : 'CT04',
        'name'         : 'Cyclone',
        'type'         : 'Normal',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 85,
        'pp_total'     : 20,
        'pokemon_list' : [
            '012', // Papilusion
            '016', // Roucool
            '017', // Roucoups
            '018', // Roucarnage
            '021', // Piafabec
            '022', // Rapasdepic
            '041', // Nosferapti
            '042', // Nosferalto
            '049', // Aéromite
            '083', // Canarticho
            '084', // Doduo
            '085', // Dodrio
            '142', // Ptéra
            '144', // Artikodin
            '145', // Électhor
            '146', // Sulfura
            '151'  // Mew
        ]
      },
      {
        'id'           : 'CT05',
        'name'         : 'Ultimawashi',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 120,
        'accuracy'     : 75,
        'pp_total'     : 5,
        'pokemon_list' : [
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '025', // Pikachu
            '026', // Raichu
            '031', // Nidoqueen
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '039', // Rondoudou
            '040', // Grodoudou
            '054', // Psykokwak
            '055', // Akwakwak
            '056', // Férosinge
            '057', // Colossinge
            '061', // Têtarte
            '062', // Tartard
            '063', // Abra
            '064', // Kadabra
            '065', // Alakazam
            '066', // Machoc
            '067', // Machopeur
            '068', // Mackogneur
            '074', // Racaillou
            '075', // Gravalanch
            '076', // Grolem
            '080', // Flagadoss
            '094', // Ectoplasma
            '096', // Soporifik
            '097', // Hypnomade
            '104', // Osselait
            '105', // Ossatueur
            '106', // Kicklee
            '107', // Tygnon
            '108', // Excelangue
            '112', // Rhinoféros
            '113', // Leveinard
            '115', // Kangourex
            '122', // M. Mime
            '124', // Lippoutou
            '125', // Élektek
            '126', // Magmar
            '140', // Kabuto
            '141', // Kabutops
            '143', // Ronflex
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT06',
        'name'         : 'Toxik',
        'type'         : 'Poison',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 85,
        'pp_total'     : 10,
        'pokemon_list' : [
            '001', // Bulbizarre
            '002', // Herbizarre
            '003', // Florizarre
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '010', // Chenipan
            '011', // Chrysacier
            '012', // Papilusion
            '013', // Aspicot
            '014', // Coconfort
            '015', // Dardargnan
            '016', // Roucool
            '017', // Roucoups
            '018', // Roucarnage
            '019', // Rattata
            '020', // Rattatac
            '021', // Piafabec
            '022', // Rapasdepic
            '023', // Abo
            '024', // Arbok
            '025', // Pikachu
            '026', // Raichu
            '027', // Sabelette
            '028', // Sablaireau
            '029', // Nidoran ♀
            '030', // Nidorina
            '031', // Nidoqueen
            '032', // Nidoran ♂
            '033', // Nidorino
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '037', // Goupix
            '038', // Feunard
            '039', // Rondoudou
            '040', // Grodoudou
            '041', // Nosferapti
            '042', // Nosferalto
            '043', // Mystherbe
            '044', // Ortide
            '045', // Rafflesia
            '046', // Paras
            '047', // Parasect
            '048', // Mimitoss
            '049', // Aéromite
            '050', // Taupiqueur
            '051', // Triopikeur
            '052', // Miaouss
            '053', // Persian
            '054', // Psykokwak
            '055', // Akwakwak
            '056', // Férosinge
            '057', // Colossinge
            '058', // Caninos
            '059', // Arcanin
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '063', // Abra
            '064', // Kadabra
            '065', // Alakazam
            '066', // Machoc
            '067', // Machopeur
            '068', // Mackogneur
            '069', // Chétiflor
            '070', // Boustiflor
            '071', // Empiflor
            '072', // Tentacool
            '073', // Tentacruel
            '074', // Racaillou
            '075', // Gravalanch
            '076', // Grolem
            '077', // Ponyta
            '078', // Galopa
            '079', // Ramoloss
            '080', // Flagadoss
            '081', // Magnéti
            '082', // Magnéton
            '083', // Canarticho
            '084', // Doduo
            '085', // Dodrio
            '086', // Otaria
            '087', // Lamantine
            '088', // Tadmorv
            '089', // Grotadmorv
            '090', // Kokiyas
            '091', // Crustabri
            '092', // Fantominus
            '093', // Spectrum
            '094', // Ectoplasma
            '095', // Onix
            '096', // Soporifik
            '097', // Hypnomade
            '098', // Krabby
            '099', // Krabboss
            '100', // Voltorbe
            '101', // Électrode
            '102', // Noeunoeuf
            '103', // Noadkoko
            '104', // Osselait
            '105', // Ossatueur
            '106', // Kicklee
            '107', // Tygnon
            '108', // Excelangue
            '109', // Smogo
            '110', // Smogogo
            '111', // Rhinocorne
            '112', // Rhinoféros
            '113', // Leveinard
            '114', // Saquedeneu
            '115', // Kangourex
            '116', // Hypotrempe
            '117', // Hypocéan
            '118', // Poissirène
            '119', // Poissoroy
            '120', // Stari
            '121', // Staross
            '122', // M. Mime
            '123', // Insécateur
            '124', // Lippoutou
            '125', // Élektek
            '126', // Magmar
            '127', // Scarabrute
            '128', // Tauros
            '129', // Magicarpe
            '130', // Léviator
            '131', // Lokhlass
            '132', // Métamorph
            '133', // Évoli
            '134', // Aquali
            '135', // Voltali
            '136', // Pyroli
            '137', // Porygon
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '142', // Ptéra
            '143', // Ronflex
            '144', // Artikodin
            '145', // Électhor
            '146', // Sulfura
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT07',
        'name'         : 'Empal\'Korne',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 0,
        'accuracy'     : 30,
        'pp_total'     : 5,
        'pokemon_list' : [
            '030', // Nidorina
            '031', // Nidoqueen
            '032', // Nidoran ♂
            '033', // Nidorino
            '034', // Nidoking
            '077', // Ponyta
            '078', // Galopa
            '087', // Lamantine
            '111', // Rhinocorne
            '112', // Rhinoféros
            '118', // Poissirène
            '119', // Poissoroy
            '128', // Tauros
            '131', // Lokhlass
            '139', // Amonistar
            '148', // Draco
            '149', // Dracolosse
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT08',
        'name'         : 'Plaquage',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 85,
        'accuracy'     : 100,
        'pp_total'     : 15,
        'pokemon_list' : [
            '001', // Bulbizarre
            '002', // Herbizarre
            '003', // Florizarre
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '019', // Rattata
            '020', // Rattatac
            '023', // Abo
            '024', // Arbok
            '025', // Pikachu
            '026', // Raichu
            '027', // Sabelette
            '028', // Sablaireau
            '029', // Nidoran ♀
            '030', // Nidorina
            '031', // Nidoqueen
            '032', // Nidoran ♂
            '033', // Nidorino
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '037', // Goupix
            '038', // Feunard
            '039', // Rondoudou
            '040', // Grodoudou
            '045', // Rafflesia
            '046', // Paras
            '047', // Parasect
            '050', // Taupiqueur
            '051', // Triopikeur
            '052', // Miaouss
            '053', // Persian
            '054', // Psykokwak
            '055', // Akwakwak
            '056', // Férosinge
            '057', // Colossinge
            '058', // Caninos
            '059', // Arcanin
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '063', // Abra
            '064', // Kadabra
            '065', // Alakazam
            '066', // Machoc
            '067', // Machopeur
            '068', // Mackogneur
            '071', // Empiflor
            '074', // Racaillou
            '075', // Gravalanch
            '076', // Grolem
            '077', // Ponyta
            '078', // Galopa
            '079', // Ramoloss
            '080', // Flagadoss
            '083', // Canarticho
            '084', // Doduo
            '085', // Dodrio
            '086', // Otaria
            '087', // Lamantine
            '088', // Tadmorv
            '089', // Grotadmorv
            '094', // Ectoplasma
            '095', // Onix
            '096', // Soporifik
            '097', // Hypnomade
            '098', // Krabby
            '099', // Krabboss
            '104', // Osselait
            '105', // Ossatueur
            '106', // Kicklee
            '107', // Tygnon
            '108', // Excelangue
            '112', // Rhinoféros
            '113', // Leveinard
            '114', // Saquedeneu
            '115', // Kangourex
            '122', // M. Mime
            '124', // Lippoutou
            '125', // Élektek
            '126', // Magmar
            '127', // Scarabrute
            '128', // Tauros
            '130', // Léviator
            '131', // Lokhlass
            '133', // Évoli
            '134', // Aquali
            '135', // Voltali
            '136', // Pyroli
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '143', // Ronflex
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT09',
        'name'         : 'Bélier',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 90,
        'accuracy'     : 85,
        'pp_total'     : 20,
        'pokemon_list' : [
            '001', // Bulbizarre
            '002', // Herbizarre
            '003', // Florizarre
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '012', // Papilusion
            '015', // Dardargnan
            '016', // Roucool
            '017', // Roucoups
            '018', // Roucarnage
            '019', // Rattata
            '020', // Rattatac
            '021', // Piafabec
            '022', // Rapasdepic
            '023', // Abo
            '024', // Arbok
            '025', // Pikachu
            '026', // Raichu
            '027', // Sabelette
            '028', // Sablaireau
            '029', // Nidoran ♀
            '030', // Nidorina
            '031', // Nidoqueen
            '032', // Nidoran ♂
            '033', // Nidorino
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '037', // Goupix
            '038', // Feunard
            '039', // Rondoudou
            '040', // Grodoudou
            '041', // Nosferapti
            '042', // Nosferalto
            '043', // Mystherbe
            '044', // Ortide
            '045', // Rafflesia
            '046', // Paras
            '047', // Parasect
            '048', // Mimitoss
            '049', // Aéromite
            '050', // Taupiqueur
            '051', // Triopikeur
            '052', // Miaouss
            '053', // Persian
            '054', // Psykokwak
            '055', // Akwakwak
            '056', // Férosinge
            '057', // Colossinge
            '058', // Caninos
            '059', // Arcanin
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '063', // Abra
            '064', // Kadabra
            '065', // Alakazam
            '066', // Machoc
            '067', // Machopeur
            '068', // Mackogneur
            '069', // Chétiflor
            '070', // Boustiflor
            '071', // Empiflor
            '072', // Tentacool
            '073', // Tentacruel
            '074', // Racaillou
            '075', // Gravalanch
            '076', // Grolem
            '077', // Ponyta
            '078', // Galopa
            '079', // Ramoloss
            '080', // Flagadoss
            '081', // Magnéti
            '082', // Magnéton
            '083', // Canarticho
            '084', // Doduo
            '085', // Dodrio
            '086', // Otaria
            '087', // Lamantine
            '090', // Kokiyas
            '091', // Crustabri
            '094', // Ectoplasma
            '095', // Onix
            '096', // Soporifik
            '097', // Hypnomade
            '098', // Krabby
            '099', // Krabboss
            '100', // Voltorbe
            '101', // Électrode
            '102', // Noeunoeuf
            '103', // Noadkoko
            '104', // Osselait
            '105', // Ossatueur
            '106', // Kicklee
            '107', // Tygnon
            '108', // Excelangue
            '111', // Rhinocorne
            '112', // Rhinoféros
            '113', // Leveinard
            '114', // Saquedeneu
            '115', // Kangourex
            '116', // Hypotrempe
            '117', // Hypocéan
            '118', // Poissirène
            '119', // Poissoroy
            '120', // Stari
            '121', // Staross
            '122', // M. Mime
            '123', // Insécateur
            '124', // Lippoutou
            '125', // Élektek
            '126', // Magmar
            '127', // Scarabrute
            '128', // Tauros
            '130', // Léviator
            '131', // Lokhlass
            '133', // Évoli
            '134', // Aquali
            '135', // Voltali
            '136', // Pyroli
            '137', // Porygon
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '142', // Ptéra
            '143', // Ronflex
            '144', // Artikodin
            '145', // Électhor
            '146', // Sulfura
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT10',
        'name'         : 'Damoclès',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 100,
        'accuracy'     : 100,
        'pp_total'     : 15,
        'pokemon_list' : [
            '001', // Bulbizarre
            '002', // Herbizarre
            '003', // Florizarre
            '004', // Salamèche
            '005', // Reptincel
            '006', // Dracaufeu
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '010', // Chenipan
            '011', // Chrysacier
            '012', // Papilusion
            '013', // Aspicot
            '014', // Coconfort
            '015', // Dardargnan
            '016', // Roucool
            '017', // Roucoups
            '018', // Roucarnage
            '019', // Rattata
            '020', // Rattatac
            '021', // Piafabec
            '022', // Rapasdepic
            '023', // Abo
            '024', // Arbok
            '025', // Pikachu
            '026', // Raichu
            '027', // Sabelette
            '028', // Sablaireau
            '029', // Nidoran ♀
            '030', // Nidorina
            '031', // Nidoqueen
            '032', // Nidoran ♂
            '033', // Nidorino
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '037', // Goupix
            '038', // Feunard
            '039', // Rondoudou
            '040', // Grodoudou
            '041', // Nosferapti
            '042', // Nosferalto
            '043', // Mystherbe
            '044', // Ortide
            '045', // Rafflesia
            '046', // Paras
            '047', // Parasect
            '048', // Mimitoss
            '049', // Aéromite
            '050', // Taupiqueur
            '051', // Triopikeur
            '052', // Miaouss
            '053', // Persian
            '054', // Psykokwak
            '055', // Akwakwak
            '056', // Férosinge
            '057', // Colossinge
            '058', // Caninos
            '059', // Arcanin
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '063', // Abra
            '064', // Kadabra
            '065', // Alakazam
            '066', // Machoc
            '067', // Machopeur
            '068', // Mackogneur
            '069', // Chétiflor
            '070', // Boustiflor
            '071', // Empiflor
            '072', // Tentacool
            '073', // Tentacruel
            '074', // Racaillou
            '075', // Gravalanch
            '076', // Grolem
            '077', // Ponyta
            '078', // Galopa
            '079', // Ramoloss
            '080', // Flagadoss
            '081', // Magnéti
            '082', // Magnéton
            '083', // Canarticho
            '084', // Doduo
            '085', // Dodrio
            '086', // Otaria
            '087', // Lamantine
            '090', // Kokiyas
            '091', // Crustabri
            '094', // Ectoplasma
            '095', // Onix
            '096', // Soporifik
            '097', // Hypnomade
            '098', // Krabby
            '099', // Krabboss
            '102', // Noeunoeuf
            '103', // Noadkoko
            '104', // Osselait
            '105', // Ossatueur
            '106', // Kicklee
            '107', // Tygnon
            '108', // Excelangue
            '111', // Rhinocorne
            '112', // Rhinoféros
            '113', // Leveinard
            '114', // Saquedeneu
            '115', // Kangourex
            '116', // Hypotrempe
            '117', // Hypocéan
            '118', // Poissirène
            '119', // Poissoroy
            '120', // Stari
            '121', // Staross
            '122', // M. Mime
            '123', // Insécateur
            '124', // Lippoutou
            '125', // Élektek
            '126', // Magmar
            '127', // Scarabrute
            '128', // Tauros
            '129', // Magicarpe
            '130', // Léviator
            '131', // Lokhlass
            '132', // Métamorph
            '133', // Évoli
            '134', // Aquali
            '135', // Voltali
            '136', // Pyroli
            '137', // Porygon
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '142', // Ptéra
            '143', // Ronflex
            '144', // Artikodin
            '145', // Électhor
            '146', // Sulfura
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT11',
        'name'         : 'Bulles d\'O',
        'type'         : 'Eau',
        'class'        : 'Spéciale',
        'power'        : 65,
        'accuracy'     : 100,
        'pp_total'     : 20,
        'pokemon_list' : [
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '019', // Rattata
            '020', // Rattatac
            '030', // Nidorina
            '031', // Nidoqueen
            '033', // Nidorino
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '039', // Rondoudou
            '040', // Grodoudou
            '052', // Miaouss
            '053', // Persian
            '054', // Psykokwak
            '055', // Akwakwak
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '072', // Tentacool
            '073', // Tentacruel
            '079', // Ramoloss
            '080', // Flagadoss
            '086', // Otaria
            '087', // Lamantine
            '090', // Kokiyas
            '091', // Crustabri
            '098', // Krabby
            '099', // Krabboss
            '104', // Osselait
            '105', // Ossatueur
            '108', // Excelangue
            '112', // Rhinoféros
            '113', // Leveinard
            '115', // Kangourex
            '116', // Hypotrempe
            '117', // Hypocéan
            '118', // Poissirène
            '119', // Poissoroy
            '120', // Stari
            '121', // Staross
            '124', // Lippoutou
            '130', // Léviator
            '131', // Lokhlass
            '134', // Aquali
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '143', // Ronflex
            '144', // Artikodin
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT12',
        'name'         : 'Pistolet à O',
        'type'         : 'Eau',
        'class'        : 'Spéciale',
        'power'        : 40,
        'accuracy'     : 100,
        'pp_total'     : 25,
        'pokemon_list' : [
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '019', // Rattata
            '020', // Rattatac
            '030', // Nidorina
            '031', // Nidoqueen
            '033', // Nidorino
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '039', // Rondoudou
            '040', // Grodoudou
            '052', // Miaouss
            '053', // Persian
            '054', // Psykokwak
            '055', // Akwakwak
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '072', // Tentacool
            '073', // Tentacruel
            '079', // Ramoloss
            '080', // Flagadoss
            '086', // Otaria
            '087', // Lamantine
            '090', // Kokiyas
            '091', // Crustabri
            '098', // Krabby
            '099', // Krabboss
            '104', // Osselait
            '105', // Ossatueur
            '108', // Excelangue
            '112', // Rhinoféros
            '113', // Leveinard
            '115', // Kangourex
            '116', // Hypotrempe
            '117', // Hypocéan
            '118', // Poissirène
            '119', // Poissoroy
            '120', // Stari
            '121', // Staross
            '124', // Lippoutou
            '130', // Léviator
            '131', // Lokhlass
            '134', // Aquali
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '143', // Ronflex
            '144', // Artikodin
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT13',
        'name'         : 'Laser Glace',
        'type'         : 'Glace',
        'class'        : 'Spéciale',
        'power'        : 95,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : [
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '019', // Rattata
            '020', // Rattatac
            '030', // Nidorina
            '031', // Nidoqueen
            '033', // Nidorino
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '039', // Rondoudou
            '040', // Grodoudou
            '054', // Psykokwak
            '055', // Akwakwak
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '072', // Tentacool
            '073', // Tentacruel
            '079', // Ramoloss
            '080', // Flagadoss
            '086', // Otaria
            '087', // Lamantine
            '090', // Kokiyas
            '091', // Crustabri
            '098', // Krabby
            '099', // Krabboss
            '104', // Osselait
            '105', // Ossatueur
            '108', // Excelangue
            '111', // Rhinocorne
            '112', // Rhinoféros
            '113', // Leveinard
            '115', // Kangourex
            '116', // Hypotrempe
            '117', // Hypocéan
            '118', // Poissirène
            '119', // Poissoroy
            '120', // Stari
            '121', // Staross
            '124', // Lippoutou
            '128', // Tauros
            '130', // Léviator
            '131', // Lokhlass
            '134', // Aquali
            '137', // Porygon
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '143', // Ronflex
            '144', // Artikodin
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT14',
        'name'         : 'Blizzard',
        'type'         : 'Glace',
        'class'        : 'Spéciale',
        'power'        : 120,
        'accuracy'     : 90,
        'pp_total'     : 5,
        'pokemon_list' : [
            '007', // Carapuce
            '008', // Carabaffe
            '009', // Tortank
            '019', // Rattata
            '020', // Rattatac
            '029', // Nidoran ♀
            '030', // Nidorina
            '031', // Nidoqueen
            '032', // Nidoran ♂
            '033', // Nidorino
            '034', // Nidoking
            '035', // Mélofée
            '036', // Mélodelfe
            '039', // Rondoudou
            '040', // Grodoudou
            '054', // Psykokwak
            '055', // Akwakwak
            '060', // Ptitard
            '061', // Têtarte
            '062', // Tartard
            '072', // Tentacool
            '073', // Tentacruel
            '079', // Ramoloss
            '080', // Flagadoss
            '086', // Otaria
            '087', // Lamantine
            '090', // Kokiyas
            '091', // Crustabri
            '098', // Krabby
            '099', // Krabboss
            '104', // Osselait
            '105', // Ossatueur
            '108', // Excelangue
            '112', // Rhinoféros
            '113', // Leveinard
            '115', // Kangourex
            '116', // Hypotrempe
            '117', // Hypocéan
            '118', // Poissirène
            '119', // Poissoroy
            '120', // Stari
            '121', // Staross
            '124', // Lippoutou
            '128', // Tauros
            '130', // Léviator
            '131', // Lokhlass
            '134', // Aquali
            '137', // Porygon
            '138', // Amonita
            '139', // Amonistar
            '140', // Kabuto
            '141', // Kabutops
            '143', // Ronflex
            '144', // Artikodin
            '147', // Minidraco
            '148', // Draco
            '149', // Dracolosse
            '150', // Mewtwo
            '151'  // Mew
        ]
    },
      {
        'id'           : 'CT15',
        'name'         : 'Ultralaser',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 150,
        'accuracy'     : 90,
        'pp_total'     : 5,
        'pokemon_list' : [
          '003', // Florizarre
          '006', // Dracaufeu
          '009', // Tortank
          '012', // Papilusion
          '015', // Dardargnan
          '018', // Roucarnage
          '020', // Rattatac
          '022', // Rapasdepic
          '024', // Arbok
          '026', // Raichu
          '028', // Sablaireau
          '031', // Nidoqueen
          '034', // Nidoking
          '038', // Feunard
          '040', // Grodoudou
          '042', // Nosferalto
          '045', // Rafflesia
          '047', // Parasect
          '049', // Aéromite
          '051', // Triopikeur
          '053', // Persian
          '055', // Akwakwak
          '057', // Colossinge
          '059', // Arcanin
          '062', // Tartard
          '065', // Alakazam
          '068', // Mackogneur
          '071', // Empiflor
          '073', // Tentacruel
          '076', // Grolem
          '078', // Galopa
          '080', // Flagadoss
          '082', // Magnéton
          '085', // Dodrio
          '087', // Lamantine
          '089', // Grotadmorv
          '091', // Crustabri
          '094', // Ectoplasma
          '097', // Hypnomade
          '099', // Krabboss
          '101', // Électrode
          '103', // Noadkoko
          '105', // Ossatueur
          '108', // Excelangue
          '110', // Smogogo
          '112', // Rhinoféros
          '113', // Leveinard
          '114', // Saquedeneu
          '115', // Kangourex
          '117', // Hypocéan
          '119', // Poissoroy
          '121', // Staross
          '122', // M. Mime
          '123', // Insécateur
          '124', // Lippoutou
          '125', // Élektek
          '126', // Magmar
          '127', // Scarabrute
          '128', // Tauros
          '130', // Léviator
          '131', // Lokhlass
          '134', // Aquali
          '135', // Voltali
          '136', // Pyroli
          '137', // Porygon
          '139', // Amonistar
          '141', // Kabutops
          '142', // Ptéra
          '143', // Ronflex
          '144', // Artikodin
          '145', // Électhor
          '146', // Sulfura
          '147', // Minidraco
          '148', // Draco
          '149', // Dracolosse
          '150', // Mewtwo
          '151'  // Mew
        ]
    },
      {
        'id'           : 'CT16',
        'name'         : 'Jackpot',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 40,
        'accuracy'     : 100,
        'pp_total'     : 20,
        'pokemon_list' : [
          '025', // Pikachu
          '026', // Raichu
          '031', // Nidoqueen
          '034', // Nidoking
          '052', // Miaouss
          '053', // Persian
          '054', // Psykokwak
          '055', // Akwakwak
          '056', // Férosinge
          '057', // Colossinge
          '079', // Ramoloss
          '080', // Flagadoss
          '086', // Otaria
          '087', // Lamantine
          '112', // Rhinoféros
          '143', // Ronflex
          '151'  // Mew
        ]
    },
      {
        'id'           : 'CT17',
        'name'         : 'Sacrifice',
        'type'         : 'Combat',
        'class'        : 'Physique',
        'power'        : 80,
        'accuracy'     : 80,
        'pp_total'     : 25,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT18',
        'name'         : 'Riposte',
        'type'         : 'Combat',
        'class'        : 'Physique',
        'power'        : 0,
        'accuracy'     : 100,
        'pp_total'     : 20,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT19',
        'name'         : 'Frappe Atlas',
        'type'         : 'Combat',
        'class'        : 'Physique',
        'power'        : 0,
        'accuracy'     : 100,
        'pp_total'     : 20,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT20',
        'name'         : 'Frénésie',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 20,
        'accuracy'     : 100,
        'pp_total'     : 20,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT21',
        'name'         : 'Méga-Sangsue',
        'type'         : 'Plante',
        'class'        : 'Spéciale',
        'power'        : 40,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT22',
        'name'         : 'Lance-Soleil',
        'type'         : 'Plante',
        'class'        : 'Spéciale',
        'power'        : 120,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT23',
        'name'         : 'Draco-Rage',
        'type'         : 'Dragon',
        'class'        : 'Spéciale',
        'power'        : 0,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT24',
        'name'         : 'Tonerre',
        'type'         : 'Électrik',
        'class'        : 'Spéciale',
        'power'        : 95,
        'accuracy'     : 100,
        'pp_total'     : 15,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT25',
        'name'         : 'Fatal-Foudre',
        'type'         : 'Électrik',
        'class'        : 'Spéciale',
        'power'        : 120,
        'accuracy'     : 70,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT26',
        'name'         : 'Séisme',
        'type'         : 'Sol',
        'class'        : 'Physique',
        'power'        : 100,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT27',
        'name'         : 'Abîme',
        'type'         : 'Sol',
        'class'        : 'Physique',
        'power'        : 0,
        'accuracy'     : 30,
        'pp_total'     : 5,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT28',
        'name'         : 'Tunnel',
        'type'         : 'Sol',
        'class'        : 'Physique',
        'power'        : 100,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT29',
        'name'         : 'Psyko',
        'type'         : 'Psy',
        'class'        : 'Spéciale',
        'power'        : 90,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT30',
        'name'         : 'Téléport',
        'type'         : 'Psy',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 20,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT31',
        'name'         : 'Copie',
        'type'         : 'Normal',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT32',
        'name'         : 'Reflet',
        'type'         : 'Normal',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 15,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT33',
        'name'         : 'Protection',
        'type'         : 'Psy',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 20,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT34',
        'name'         : 'Patience',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT35',
        'name'         : 'Métronome',
        'type'         : 'Normal',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT36',
        'name'         : 'Destruction',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 130,
        'accuracy'     : 100,
        'pp_total'     : 5,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT37',
        'name'         : 'Bomb\'Œuf',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 100,
        'accuracy'     : 75,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT38',
        'name'         : 'Déflagration',
        'type'         : 'Feu',
        'class'        : 'Spéciale',
        'power'        : 120,
        'accuracy'     : 85,
        'pp_total'     : 5,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT39',
        'name'         : 'Météores',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 60,
        'accuracy'     : 0,
        'pp_total'     : 20,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT40',
        'name'         : 'Coud\'Krâne',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 100,
        'accuracy'     : 100,
        'pp_total'     : 15,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT41',
        'name'         : 'E-Coque',
        'type'         : 'Normal',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT42',
        'name'         : 'Dévorêve',
        'type'         : 'Psy',
        'class'        : 'Spéciale',
        'power'        : 100,
        'accuracy'     : 100,
        'pp_total'     : 15,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT43',
        'name'         : 'Piqué',
        'type'         : 'Vol',
        'class'        : 'Physique',
        'power'        : 140,
        'accuracy'     : 90,
        'pp_total'     : 5,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT44',
        'name'         : 'Repos',
        'type'         : 'Psy',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT45',
        'name'         : 'Cage Éclair',
        'type'         : 'Électrik',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 100,
        'pp_total'     : 20,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT46',
        'name'         : 'Vague Psy',
        'type'         : 'Psy',
        'class'        : 'Spéciale',
        'power'        : 0,
        'accuracy'     : 80,
        'pp_total'     : 15,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT47',
        'name'         : 'Explosion',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 170,
        'accuracy'     : 100,
        'pp_total'     : 5,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT48',
        'name'         : 'Éboulement',
        'type'         : 'Roche',
        'class'        : 'Physique',
        'power'        : 75,
        'accuracy'     : 90,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT49',
        'name'         : 'Triplattaque',
        'type'         : 'Normal',
        'class'        : 'Physique',
        'power'        : 80,
        'accuracy'     : 100,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },
      {
        'id'           : 'CT50',
        'name'         : 'Clonage',
        'type'         : 'Normal',
        'class'        : 'Statut',
        'power'        : 0,
        'accuracy'     : 0,
        'pp_total'     : 10,
        'pokemon_list' : ['151']
    },



    // Basiques
        // Combat
        // Dragon
        // Eau
        {
            'id'           : 'BA13',
            'name'         : 'Pistolet à O',
            'type'         : 'Eau',
            'class'        : 'Spéciale',
            'power'        : 40,
            'accuracy'     : 100,
            'pp_total'     : 25,
            'pokemon_list' : ['151']
        },
        // Electrik
        // Feu
        {
            'id'           : 'BA25',
            'name'         : 'Flammèche',
            'type'         : 'Feu',
            'class'        : 'Spéciale',
            'power'        : 15,
            'accuracy'     : 70,
            'pp_total'     : 15,
            'pokemon_list' : ['151']
        },
        // Glace
        // Insect
        // Normal
        {
            'id'           : 'BA84',
            'name'         : 'Charge',
            'type'         : 'Normal',
            'class'        : 'Physique',
            'power'        : 35,
            'accuracy'     : 95,
            'pp_total'     : 35,
            'pokemon_list' : ['151']
        },
        {
            'id'           : 'BA87',
            'name'         : 'Griffe',
            'type'         : 'Normal',
            'class'        : 'Physique',
            'power'        : 40,
            'accuracy'     : 100,
            'pp_total'     : 35,
            'pokemon_list' : ['151']
        },
        // Plante
        {
            'id'           : 'BA122',
            'name'         : 'Fouet-Lianes',
            'type'         : 'Plante',
            'class'        : 'Spéciale',
            'power'        : 35,
            'accuracy'     : 100,
            'pp_total'     : 10,
            'pokemon_list' : ['151']
     }
        // Poison
        // Psy
        // Roche
        // Sol
        // Spectre
        // Vol
]