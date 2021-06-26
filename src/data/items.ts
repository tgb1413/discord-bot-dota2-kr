export type Item = {
  id: number;
  name: string;
};

const items: Item[] = [
  { id: 1, name: "점멸단검" },
  { id: 2, name: "갈퀴발톱" },
  { id: 3, name: "장검" },
  { id: 4, name: "사슬갑옷" },
  { id: 5, name: "대검" },
  { id: 6, name: "굳은의지의투구" },
  { id: 7, name: "투창" },
  { id: 8, name: "미스릴망치" },
  { id: 9, name: "plate mail" },
  { id: 10, name: "quaterstaff" },
  { id: 11, name: "quelling blade" },
  { id: 12, name: "ring of protection" },
  { id: 182, name: "stout shield" },
  { id: 247, name: "moon shard" },
  { id: 13, name: "gauntlets" },
  { id: 14, name: "slipers" },
  { id: 15, name: "mantle" },
  { id: 16, name: "branches" },
  { id: 17, name: "belt of strength" },
  { id: 18, name: "boots of elves" },
  { id: 19, name: "robe" },
  { id: 20, name: "circlet" },
  { id: 21, name: "ogre axe" },
  { id: 22, name: "blade of alacrity" },
  { id: 23, name: "staff of wizadry" },
  { id: 24, name: "ultimate orb" },
  { id: 25, name: "gloves" },
  { id: 485, name: "blitz knuckles" },
  { id: 26, name: "lifesteal" },
  { id: 473, name: "voodoo mask" },
  { id: 27, name: "ring of regen" },
  { id: 279, name: "ring of tarrasque" },
  { id: 28, name: "sobi mask" },
  { id: 29, name: "boots" },
  { id: 30, name: "gem" },
  { id: 31, name: "cloak" },
  { id: 32, name: "talisman of evasion" },
  { id: 33, name: "cheese" },
  { id: 34, name: "magic stick" },
  { id: 35, name: "recipe magin wand" },
  { id: 36, name: "magic wand" },
  { id: 37, name: "ghost" },
  { id: 38, name: "clarity" },
  { id: 216, name: "enchanted mango" },
  { id: 39, name: "flask" },
  { id: 40, name: "dust" },
  { id: 41, name: "bottle" },
  { id: 42, name: "ward observer" },
  { id: 43, name: "ward sentry" },
  { id: 218, name: "ward dispenser" },
  { id: 44, name: "tango" },
  { id: 241, name: "tango single" },
  { id: 45, name: "courier" },
  { id: 286, name: "flying courier" },
  { id: 46, name: "tpscroll" },
  { id: 47, name: "recipe travel boots" },
  { id: 48, name: "travel boots" },
  { id: 220, name: "travel boots 2" },
  { id: 50, name: "phase boots" },
  { id: 51, name: "demon edge" },
  { id: 52, name: "eagle" },
  { id: 53, name: "reaver" },
  { id: 54, name: "relic" },
  { id: 55, name: "hyperstone" },
  { id: 56, name: "ring of health" },
  { id: 57, name: "void stone" },
  { id: 58, name: "mystic staff" },
  { id: 59, name: "energy booster" },
  { id: 60, name: "point booster" },
  { id: 61, name: "vitality booster" },
  { id: 593, name: "fluffy hat" },
  { id: 63, name: "power treads" },
  { id: 655, name: "grandmasters glaive" },
  { id: 64, name: "recipe hand of midas" },
  { id: 65, name: "hand of midas" },
  { id: 67, name: "oblivion staff" },
  { id: 533, name: "recipe witch blade" },
  { id: 534, name: "witch blade" },
  { id: 69, name: "pers" },
  { id: 71, name: "poor mans shield" },
  { id: 731, name: "satchel" },
  { id: 72, name: "recipe bracer" },
  { id: 73, name: "bracer" },
  { id: 74, name: "recipe wraith band" },
  { id: 75, name: "wraith band" },
  { id: 76, name: "recipe null talisman" },
  { id: 77, name: "null talisman" },
  { id: 78, name: "recipe mekansm" },
  { id: 79, name: "mekansm" },
  { id: 80, name: "recipe vladmir" },
  { id: 81, name: "vladmir" },
  { id: 85, name: "recipe buckler" },
  { id: 86, name: "buckler" },
  { id: 87, name: "recipe ring of basilius" },
  { id: 88, name: "ring of basilius" },
  { id: 268, name: "recipe holy locket" },
  { id: 269, name: "holy locket" },
  { id: 89, name: "recipe pipe" },
  { id: 90, name: "pipe" },
  { id: 91, name: "recipe urn of shadows" },
  { id: 92, name: "urn of shadows" },
  { id: 93, name: "recipe headdress" },
  { id: 94, name: "headdress" },
  { id: 96, name: "sheepstick" },
  { id: 97, name: "recipe orchid" },
  { id: 98, name: "orchid" },
  { id: 245, name: "recipe bloodthorn" },
  { id: 250, name: "bloodthorn" },
  { id: 252, name: "echo sabre" },
  { id: 99, name: "recipe cyclone" },
  { id: 100, name: "cyclone" },
  { id: 612, name: "recipe wind waker" },
  { id: 610, name: "wind waker" },
  { id: 233, name: "aether lens" },
  { id: 232, name: "aether lens" },
  { id: 101, name: "recipe force staff" },
  { id: 102, name: "force staff" },
  { id: 262, name: "recipe hurricane pike" },
  { id: 263, name: "hurricane pike" },
  { id: 103, name: "recipe dagon" },
  { id: 104, name: "dagon" },
  { id: 201, name: "dagon 2" },
  { id: 202, name: "dagon 3" },
  { id: 203, name: "dagon 4" },
  { id: 204, name: "dagon 5" },
  { id: 105, name: "recipe necronomicon" },
  { id: 106, name: "necronomicon" },
  { id: 193, name: "necronomicon 2" },
  { id: 194, name: "necronomicon3" },
  { id: 108, name: "ultimate scepter" },
  { id: 270, name: "recipe ultimate scepter 2" },
  { id: 271, name: "ultimate scepter 2" },
  { id: 727, name: "ultimate scepter roshan" },
  { id: 609, name: "aghanims shard" },
  { id: 725, name: "aghanims shard roshan" },
  { id: 109, name: "recipe refresher" },
  { id: 110, name: "refresher" },
  { id: 111, name: "recipe assault" },
  { id: 112, name: "assault" },
  { id: 113, name: "recipe heart" },
  { id: 114, name: "heart" },
  { id: 115, name: "recipe black king bar" },
  { id: 116, name: "black king bar" },
  { id: 117, name: "aegis" },
  { id: 118, name: "recipe shivas guard" },
  { id: 119, name: "shivas guard" },
  { id: 121, name: "blood stone" },
  { id: 122, name: "recipe sphere" },
  { id: 123, name: "sphere" },
  { id: 226, name: "lotus orb" },
  { id: 222, name: "recipe meteor hammer" },
  { id: 223, name: "meteor hammer" },
  { id: 225, name: "nullifier" },
  { id: 255, name: "recipe aeon disk" },
  { id: 256, name: "aeon disk" },
  { id: 258, name: "recipe kaya" },
  { id: 259, name: "kaya" },
  { id: 369, name: "trident" },
  { id: 276, name: "combo breaker" },
  { id: 260, name: "refresher shard" },
  { id: 266, name: "recipe spirit vessel" },
  { id: 267, name: "spirit vessel" },
  { id: 125, name: "vanguard" },
  { id: 242, name: "crimson guard" },
  { id: 243, name: "recipe crimson guard" },
  { id: 126, name: "recipe blade mail" },
  { id: 127, name: "blade mail" },
  { id: 129, name: "soul booster" },
  { id: 130, name: "recipe hood of defiance" },
  { id: 131, name: "hood of defiance" },
  { id: 691, name: "recipe eternal shroud" },
  { id: 692, name: "eternal shroud" },
  { id: 133, name: "rapier" },
  { id: 134, name: "recipe monkey king bar" },
  { id: 135, name: "monkey king bar" },
  { id: 136, name: "recipe radiance" },
  { id: 137, name: "radiance" },
  { id: 139, name: "butterfly" },
  { id: 140, name: "recipe greater crit" },
  { id: 141, name: "greater crit" },
  { id: 142, name: "recipe basher" },
  { id: 143, name: "basher" },
  { id: 145, name: "bfury" },
  { id: 146, name: "recipe manta" },
  { id: 147, name: "manta" },
  { id: 148, name: "recipe lesser crit" },
  { id: 149, name: "lesser crit" },
  { id: 236, name: "dragon lance" },
  { id: 150, name: "recipe armlet" },
  { id: 151, name: "armlet" },
  { id: 152, name: "invis sword" },
  { id: 248, name: "recipe silver edge" },
  { id: 249, name: "silver edge" },
  { id: 154, name: "sange and yasha" },
  { id: 273, name: "kaya and sange" },
  { id: 277, name: "yasha and kaya" },
  { id: 156, name: "satanic" },
  { id: 157, name: "recipe mjollnir" },
  { id: 158, name: "mjollnir" },
  { id: 160, name: "skadi" },
  { id: 161, name: "recipe sange" },
  { id: 162, name: "sange" },
  { id: 163, name: "recipe helm of the dominator" },
  { id: 164, name: "helm of the dominator" },
  { id: 633, name: "recipe helm of the overlord" },
  { id: 635, name: "helm of the overlord" },
  { id: 166, name: "maelstrom" },
  { id: 1565, name: "recipe gungir (gleipnir)" },
  { id: 1466, name: "gungir (gleipnir)" },
  { id: 168, name: "desolator" },
  { id: 169, name: "recipe yasha" },
  { id: 170, name: "yasha" },
  { id: 172, name: "mask of madness" },
  { id: 173, name: "recipe diffusal blade" },
  { id: 174, name: "diffusal blade" },
  { id: 176, name: "ethereal blade" },
  { id: 177, name: "recipe soul ring" },
  { id: 178, name: "soul ring" },
  { id: 180, name: "arcane boots" },
  { id: 235, name: "octarine core" },
  { id: 181, name: "orb of venom" },
  { id: 240, name: "blight stone" },
  { id: 640, name: "orb of corrosion" },
  { id: 569, name: "orb of corrosion" },
  { id: 599, name: "recipe falcon blade" },
  { id: 596, name: "falcon blade" },
  { id: 597, name: "recipe mage slayer" },
  { id: 598, name: "mage slayer" },
  { id: 184, name: "recipe ancient janggo" },
  { id: 185, name: "ancient janggo" },
  { id: 187, name: "medallion of courage" },
  { id: 227, name: "recipe solar crest" },
  { id: 229, name: "solar crest" },
  { id: 188, name: "smoke of deceit" },
  { id: 257, name: "tome of knowledge" },
  { id: 189, name: "recipe veil of discord" },
  { id: 190, name: "veil of dicord" },
  { id: 230, name: "recipe guardian greaves" },
  { id: 231, name: "guardian greaves" },
  { id: 205, name: "recipe rod of atos" },
  { id: 206, name: "rod of atos" },
  { id: 238, name: "recipe iron talon" },
  { id: 239, name: "iron talon" },
  { id: 207, name: "recipe abyssal blade" },
  { id: 208, name: "abyssal blade" },
  { id: 209, name: "recipe heavens halberd" },
  { id: 210, name: "heavens halberd" },
  { id: 212, name: "ring of aquila" },
  { id: 214, name: "tranquil boots" },
  { id: 215, name: "shadow amulet" },
  { id: 253, name: "recipe glimmer cape" },
  { id: 254, name: "glimmer cape" },
  { id: 287, name: "keen optic" },
  { id: 288, name: "grove bow" },
  { id: 289, name: "quickening charm" },
  { id: 290, name: "philosophers stone" },
  { id: 291, name: "force boots" },
  { id: 292, name: "desolator 2" },
  { id: 293, name: "pheonix ash" },
  { id: 294, name: "seer stone" },
  { id: 295, name: "greater mango" },
  { id: 302, name: "elixer" },
  { id: 297, name: "vampire fangs" },
  { id: 298, name: "craggy coat" },
  { id: 299, name: "greater faerie fire" },
  { id: 300, name: "timeless relic" },
  { id: 301, name: "mirror shield" },
  { id: 303, name: "recipe ironwood tree" },
  { id: 304, name: "ironwood tree" },
  { id: 328, name: "mango tree" },
  { id: 305, name: "royal jelly" },
  { id: 306, name: "pupils gift" },
  { id: 307, name: "tome of aghanim" },
  { id: 308, name: "repair kit" },
  { id: 309, name: "mind breaker" },
  { id: 310, name: "third eye" },
  { id: 311, name: "spell prism" },
  { id: 325, name: "princes knife" },
  { id: 330, name: "witless shako" },
  { id: 334, name: "imp claw" },
  { id: 335, name: "flicker" },
  { id: 336, name: "spy gadget" },
  { id: 326, name: "spider legs" },
  { id: 327, name: "helm of the undying" },
  { id: 331, name: "vambrace" },
  { id: 312, name: "horizon" },
  { id: 313, name: "fusion rune" },
  { id: 354, name: "ocean heart" },
  { id: 355, name: "broom handle" },
  { id: 356, name: "trusty shovel" },
  { id: 357, name: "nether shawl" },
  { id: 358, name: "dragon scale" },
  { id: 359, name: "essence ring" },
  { id: 360, name: "clumsy net" },
  { id: 361, name: "enchanted quiver" },
  { id: 362, name: "ninja gear" },
  { id: 363, name: "illusionsts cape" },
  { id: 364, name: "havoc hammer" },
  { id: 365, name: "panic button (magic lamp)" },
  { id: 366, name: "apex" },
  { id: 367, name: "balista" },
  { id: 368, name: "woodland striders" },
  { id: 275, name: "recipe trident" },
  { id: 370, name: "demonicon" },
  { id: 317, name: "recipe fallen sky" },
  { id: 371, name: "fallen sky" },
  { id: 372, name: "pirate hat" },
  { id: 373, name: "dimensional doorway" },
  { id: 374, name: "ex machina" },
  { id: 375, name: "faded broach" },
  { id: 376, name: "paladin sword" },
  { id: 377, name: "minotaur horn" },
  { id: 378, name: "orb of destruction" },
  { id: 379, name: "the leveller" },
  { id: 349, name: "arcane ring" },
  { id: 381, name: "titan sliver" },
  { id: 565, name: "chipped vest" },
  { id: 566, name: "wizard glass" },
  { id: 570, name: "gloves of travel" },
  { id: 573, name: "elven tunic" },
  { id: 574, name: "cloak of flames" },
  { id: 575, name: "venom gland" },
  { id: 571, name: "trickster cloak" },
  { id: 576, name: "gladiator helm" },
  { id: 577, name: "possessed mask" },
  { id: 578, name: "ancient perseverance" },
  { id: 637, name: "star mace" },
  { id: 638, name: "penta edged sword" },
  { id: 582, name: "oakheart" },
  { id: 674, name: "warhammer" },
  { id: 680, name: "bullwhip" },
  { id: 675, name: "psychic headband" },
  { id: 676, name: "ceremonial robe" },
  { id: 686, name: "quicksilver amulet" },
  { id: 677, name: "book of shadows" },
  { id: 678, name: "giants ring" },
  { id: 679, name: "vengeance shadow" },
  { id: 585, name: "stormcrafter" },
  { id: 588, name: "overflowing elixir" },
  { id: 589, name: "mysterious hat" },
  { id: 196, name: "diffusal blade 2" },
  { id: 182, name: "stout shield" },
  { id: 237, name: "faerie fire" },
  { id: 244, name: "wind race" },
  { id: 247, name: "moon shard" },
  { id: 261, name: "crown" },
  { id: 265, name: "infused raindrop" },
  { id: 600, name: "압도의점멸단검" },
  { id: 603, name: "신속한점멸단검" },
  { id: 604, name: "신비한점멸단검" },
  { id: 606, name: "신비한점멸단검레시피" },
  { id: 607, name: "신속한점멸단검레시피" },
  { id: 608, name: "압도의점멸단검레시피" },

  /**
   * NOTE
   * 큰 JSON 파일을 내 입맛에 맞게 잘 수정해주는 그런게 있으면 좋겠네.
   */
  // Aghanim's Shard
  // Bottle
  // Clarity
  // Dust of Appearance
  // Enchanted Mango
  // Faerie Fire
  // Healing Salve
  // Observer Ward
  // Sentry Ward
  // Smoke of Deceit
  // Tango
  // Tome of Knowledge
  // Town Portal Scroll
  // Band of Elvenskin
  // Belt of Strength
  // Blade of Alacrity
  // Circlet
  // Crown
  // Gauntlets of Strength
  // Iron Branch
  // Mantle of Intelligence
  // Ogre Axe
  // Robe of the Magi
  // Slippers of Agility
  // Staff of Wizardry
  // Blades of Attack
  // Blight Stone
  // Broadsword
  // Chainmail
  // Claymore
  // Gloves of Haste
  // Helm of Iron Will
  // Infused Raindrops
  // Javelin
  // Mithril Hammer
  // Orb of Venom
  // Quarterstaff
  // Quelling Blade
  // Ring of Protection
  // Blink Dagger
  // Blitz Knuckles
  // Boots of Speed
  // Cloak
  // Fluffy Hat
  // Gem of True Sight
  // Ghost Scepter
  // Magic Stick
  // Morbid Mask
  // Ring of Regen
  // Sage's Mask
  // Shadow Amulet
  // Voodoo Mask
  // Wind Lace
  // Demon Edge
  // Eaglesong
  // Energy Booster
  // Hyperstone
  // Mystic Staff
  // Platemail
  // Point Booster
  // Reaver
  // Ring of Health
  // Sacred Relic
  // Talisman of Evasion
  // Ultimate Orb
  // Vitality Booster
  // Void Stone
  // Aegis of the Immortal
  // Aghanim's Blessing
  // Cheese
  // Refresher Shard
  // Boots of Travel
  // Bracer
  // Falcon Blade
  // Hand of Midas
  // Helm of the Dominator
  // Helm of the Overlord
  // Magic Wand
  // Mask of Madness
  // Moon Shard
  // Null Talisman
  // Oblivion Staff
  // Orb of Corrosion
  // Perseverance
  // Phase Boots
  // Power Treads
  // Soul Ring
  // Wraith Band
  // Arcane Boots
  // Buckler
  // Drum of Endurance
  // Guardian Greaves
  // Headdress
  // Holy Locket
  // Medallion of Courage
  // Mekansm
  // Pipe of Insight
  // Ring of Basilius
  // Spirit Vessel
  // Tranquil Boots
  // Urn of Shadows
  // Vladmir's Offering
  // Aether Lens
  // Aghanim's Scepter
  // Dagon
  // Eul's Scepter of Divinity
  // Force Staff
  // Gleipnir
  // Glimmer Cape
  // Octarine Core
  // Refresher Orb
  // Rod of Atos
  // Scythe of Vyse
  // Solar Crest
  // Veil of Discord
  // Wind Waker
  // Witch Blade
  // Aeon Disk
  // Assault Cuirass
  // Black King Bar
  // Blade Mail
  // Bloodstone
  // Crimson Guard
  // Eternal Shroud
  // Heart of Tarrasque
  // Hood of Defiance
  // Hurricane Pike
  // Linken's Sphere
  // Lotus Orb
  // Manta Style
  // Shiva's Guard
  // Soul Booster
  // Vanguard
  // Abyssal Blade
  // Armlet of Mordiggian
  // Battle Fury
  // Bloodthorn
  // Butterfly
  // Crystalys
  // Daedalus
  // Desolator
  // Divine Rapier
  // Ethereal Blade
  // Meteor Hammer
  // Monkey King Bar
  // Nullifier
  // Radiance
  // Shadow Blade
  // Silver Edge
  // Skull Basher
  // Arcane Blink
  // Diffusal Blade
  // Dragon Lance
  // Echo Sabre
  // Eye of Skadi
  // Heaven's Halberd
  // Kaya
  // Kaya and Sange
  // Maelstrom
  // Mage Slayer
  // Mjollnir
  // Overwhelming Blink
  // Sange
  // Sange and Yasha
  // Satanic
  // Swift Blink
  // Yasha
  // Yasha and Kaya
  // Arcane Ring
  // Broom Handle
  // Faded Broach
  // Ironwood Tree
  // Keen Optic
  // Ocean Heart
  // Trusty Shovel
  // Dragon Scale
  // Essence Ring
  // Grove Bow
  // Imp Claw
  // Nether Shawl
  // Philosopher's Stone
  // Pupil's Gift
  // Ring of Aquila
  // Vambrace
  // Enchanted Quiver
  // Mind Breaker
  // Orb of Destruction
  // Paladin Sword
  // Quickening Charm
  // Spider Legs
  // Telescope
  // Titan Sliver
  // Flicker
  // Illusionist's Cape
  // Minotaur Horn
  // Ninja Gear
  // Spell Prism
  // The Leveller
  // Timeless Relic
  // Apex
  // Ballista
  // Book of the Dead
  // Ex Machina
  // Fallen Sky
  // Force Boots
  // Mirror Shield
  // Pirate Hat
  // Seer Stone
  // Stygian Desolator
  // Clumsy Net
  // Craggy Coat
  // Elixir
  // Fusion Rune
  // Greater Faerie Fire
  // Havoc Hammer
  // Helm of the Undying
  // Iron Talon
  // Magic Lamp
  // Mango Tree
  // Necronomicon
  // Phoenix Ash
  // Poor Man's Shield
  // Prince's Knife
  // Repair Kit
  // Ring of Tarrasque
  // Royal Jelly
  // Stout Shield
  // Third Eye
  // Tome of Aghanim
  // Trident
  // Vampire Fangs
  // Witless Shako
  // Woodland Striders
];
