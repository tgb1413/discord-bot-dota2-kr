export type Hero = {
  id: number;
  name: string[];
  image: string;
};

const heroes: Hero[] = [
  {
    id: 1,
    name: ["항마사", "안메", "안매", "안티메이지", "안티매이지"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/antimage_full.png?",
  },
  {
    id: 2,
    name: ["도끼전사", "도끼", "엑스", "액스"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/axe_full.png?",
  },
  {
    id: 3,
    name: ["악몽의그림자", "베인", "배인"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/bane_full.png?",
  },
  {
    id: 4,
    name: ["혈귀", "블식", "블러드씨커", "블러드시커"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/bloodseeker_full.png?",
  },
  {
    id: 5,
    name: ["수정의여인", "크메", "크매", "크리스탈메이든", "크리스탈매이든"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/crystal_maiden_full.png?",
  },
  {
    id: 6,
    name: ["드로우레인저", "드로우래인저", "드로우", "드레"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/drow_ranger_full.png?",
  },
  {
    id: 7,
    name: ["지진술사", "어쉐", "어쓰쉐이커", "어스쉐이커"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/earthshaker_full.png?",
  },
  {
    id: 8,
    name: ["가면무사", "저거넛"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/juggernaut_full.png?",
  },
  {
    id: 9,
    name: ["미라나"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/mirana_full.png?",
  },
  {
    id: 10,
    name: ["모플링", "모플"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/morphling_full.png?",
  },
  {
    id: 11,
    name: ["그림자마귀", "쉐핀", "쉐도우피엔드", "쉐도우피앤드", "네버모어"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/nevermore_full.png?",
  },
  {
    id: 12,
    name: ["환영창기사", "팬랜", "팬렌", "펜랜", "펜렌", "팬텀랜서"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/phantom_lancer_full.png?",
  },
  {
    id: 13,
    name: ["퍽"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/puck_full.png?",
  },
  {
    id: 14,
    name: ["퍼지"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/pudge_full.png?",
  },
  {
    id: 15,
    name: ["레이저", "래이저"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/razor_full.png?",
  },
  {
    id: 16,
    name: ["모래제왕", "샌킹", "센킹", "샌드킹", "센드킹"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/sand_king_full.png?",
  },
  {
    id: 17,
    name: ["폭풍령", "스톰", "스톰스피릿"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/storm_spirit_full.png?",
  },
  {
    id: 18,
    name: ["스벤", "스밴"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/sven_full.png?",
  },
  {
    id: 19,
    name: ["타이니"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/tiny_full.png?",
  },
  {
    id: 20,
    name: ["복수혼령"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/vengefulspirit_full.png?",
  },
  {
    id: 21,
    name: [
      "바람순찰자",
      "윈런",
      "윈렌",
      "윈랜",
      "윈드레인저",
      "윈드래인저",
      "윈드러너",
    ],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/windrunner_full.png?",
  },
  {
    id: 22,
    name: ["제우스", "재우스"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/zuus_full.png?",
  },
  {
    id: 23,
    name: ["컨카"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/kunkka_full.png?",
  },
  {
    id: 24,
    name: [],
    image: "",
  },
  {
    id: 25,
    name: ["리나"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/lina_full.png?",
  },
  {
    id: 26,
    name: ["라이온"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/lion_full.png?",
  },
  {
    id: 27,
    name: ["그림자주술사", "쉐샤", "쉐도우샤먼"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/shadow_shaman_full.png?",
  },
  {
    id: 28,
    name: ["슬라다"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/slardar_full.png?",
  },
  {
    id: 29,
    name: ["파도사냥꾼", "타헌", "타이드헌터"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/tidehunter_full.png?",
  },
  {
    id: 30,
    name: ["저주술사", "위닥", "위치닥터", "윗치닥터"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/witch_doctor_full.png?",
  },
  {
    id: 31,
    name: ["리치"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/lich_full.png?",
  },
  {
    id: 32,
    name: ["리키"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/riki_full.png?",
  },
  {
    id: 33,
    name: ["에니그마", "애니그마"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/enigma_full.png?",
  },
  {
    id: 34,
    name: ["팅커"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/tinker_full.png?",
  },
  {
    id: 35,
    name: ["저격수", "스나", "스나이퍼", "스시락"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/sniper_full.png?",
  },
  {
    id: 36,
    name: ["강령사제", "네크로", "네크로포스", "네크로라이트"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/necrolyte_full.png?",
  },
  {
    id: 37,
    name: ["흑마법사", "워락", "워록"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/warlock_full.png?",
  },
  {
    id: 38,
    name: ["야수지배자", "비마", "비스트마스터"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/beastmaster_full.png?",
  },
  {
    id: 39,
    name: ["고통의여왕", "퀸오페", "퀸오패", "퀸오브페인", "퀸오브패인"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/queenofpain_full.png?",
  },
  {
    id: 40,
    name: ["맹독사", "베놈", "배놈", "베노맨서", "배노맨서"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/venomancer_full.png?",
  },
  {
    id: 41,
    name: ["얼굴없는전사", "페보", "페이스리스보이드", "페이스레스보이드"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/faceless_void_full.png?",
  },
  {
    id: 42,
    name: ["망령제왕", "레이스킹", "스켈레톤킹"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/skeleton_king_full.png?",
  },
  {
    id: 43,
    name: [
      "죽음의예언자",
      "데프",
      "데쓰프로펫",
      "데스프로펫",
      "데쓰프로핏",
      "데스프로핏",
    ],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/death_prophet_full.png?",
  },
  {
    id: 44,
    name: ["유령자객", "피에이", "팬텀어쎄신"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/phantom_assassin_full.png?",
  },
  {
    id: 45,
    name: ["퍼그나"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/pugna_full.png?",
  },
  {
    id: 46,
    name: ["암살기사", "템어", "템플러어쌔신"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/templar_assassin_full.png?",
  },
  {
    id: 47,
    name: ["바이퍼"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/viper_full.png?",
  },
  {
    id: 48,
    name: ["루나"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/luna_full.png?",
  },
  {
    id: 49,
    name: ["용기사", "드나", "드래곤나이트"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/dragon_knight_full.png?",
  },
  {
    id: 50,
    name: ["대즐", "데즐"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/dazzle_full.png?",
  },
  {
    id: 51,
    name: ["태엽장이", "클락", "클락워크", "래틀트랩"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/rattletrap_full.png?",
  },
  {
    id: 52,
    name: ["레슈락"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/leshrac_full.png?",
  },
  {
    id: 53,
    name: [
      "자연의예언자",
      "네프",
      "네이쳐스프로핏",
      "네이처스프로핏",
      "네이쳐스프로펫",
      "네이처스프로펫",
      "퓨리온",
    ],
    image: "https://api.opendota.com/apps/dota2/images/heroes/furion_full.png?",
  },
  {
    id: 54,
    name: ["흡혈마", "나익스", "라이프스틸러"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/life_stealer_full.png?",
  },
  {
    id: 55,
    name: ["어둠현자", "다크시어"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/dark_seer_full.png?",
  },
  {
    id: 56,
    name: ["클링츠"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/clinkz_full.png?",
  },
  {
    id: 57,
    name: ["전능기사", "옴니", "옴니나이트"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/omniknight_full.png?",
  },
  {
    id: 58,
    name: ["요술사", "인첸", "인첸트리스"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/enchantress_full.png?",
  },
  {
    id: 59,
    name: ["허스카"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/huskar_full.png?",
  },
  {
    id: 60,
    name: ["밤의추격자", "나스", "나이트스토커"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/night_stalker_full.png?",
  },
  {
    id: 61,
    name: ["거미여왕", "브마", "브루드마더"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/broodmother_full.png?",
  },
  {
    id: 62,
    name: ["현상금사냥꾼", "바헌", "바운티헌터"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/bounty_hunter_full.png?",
  },
  {
    id: 63,
    name: ["길쌈꾼", "길쌈", "위버"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/weaver_full.png?",
  },
  {
    id: 64,
    name: ["자키로"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/jakiro_full.png?",
  },
  {
    id: 65,
    name: ["박쥐기수", "뱃라", "배트라이더", "뱃트라이더"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/batrider_full.png?",
  },
  {
    id: 66,
    name: ["첸"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/chen_full.png?",
  },
  {
    id: 67,
    name: ["악령", "스펙", "스펙트레"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/spectre_full.png?",
  },
  {
    id: 68,
    name: ["고대영혼", "고영"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/ancient_apparition_full.png?",
  },
  {
    id: 69,
    name: ["파멸의사도", "둠", "둠브링어"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/doom_bringer_full.png?",
  },
  {
    id: 70,
    name: ["우르사", "얼사"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/ursa_full.png?",
  },
  {
    id: 71,
    name: ["영혼파괴자", "영파", "스브", "스피릿브레이커"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/spirit_breaker_full.png?",
  },
  {
    id: 72,
    name: ["자이로콥터", "자이로"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/gyrocopter_full.png?",
  },
  {
    id: 73,
    name: ["연금술사", "알케", "알케미스트"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/alchemist_full.png?",
  },
  {
    id: 74,
    name: ["원소술사", "인보커", "인조커"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/invoker_full.png?",
  },
  {
    id: 75,
    name: ["침묵술사", "사일", "사일렌서"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/silencer_full.png?",
  },
  {
    id: 76,
    name: [
      "외계침략자",
      "오디",
      "외침",
      "아웃월드디스트로이어",
      "옵시디언디스트로이어",
    ],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/obsidian_destroyer_full.png?",
  },
  {
    id: 77,
    name: ["늑대인간", "라이칸", "늑인"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/lycan_full.png?",
  },
  {
    id: 78,
    name: ["취권도사", "취권", "브류마스터"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/brewmaster_full.png?",
  },
  {
    id: 79,
    name: ["그림자악마", "쉐데", "쉐도우데스", "쉐도우데몬"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/shadow_demon_full.png?",
  },
  {
    id: 80,
    name: ["고독한드루이드", "론드루", "론드", "론드루이드"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/lone_druid_full.png?",
  },
  {
    id: 81,
    name: ["혼돈기사", "혼돈", "카나", "카오스나이트"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/chaos_knight_full.png?",
  },
  {
    id: 82,
    name: ["미포"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/meepo_full.png?",
  },
  {
    id: 83,
    name: ["나무정령수호자", "트렌트", "트렌트프로텍터"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/treant_full.png?",
  },
  {
    id: 84,
    name: ["오거마법사", "오거", "오거마기", "오우거마법사"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/ogre_magi_full.png?",
  },
  {
    id: 85,
    name: ["언다잉"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/undying_full.png?",
  },
  {
    id: 86,
    name: ["루빅"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/rubick_full.png?",
  },
  {
    id: 87,
    name: ["디스럽터", "디스럽"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/disruptor_full.png?",
  },
  {
    id: 88,
    name: ["닉스암살자", "닉스", "닉스어쎄신"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/nyx_assassin_full.png?",
  },
  {
    id: 89,
    name: ["나가세이렌", "나가"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/naga_siren_full.png?",
  },
  {
    id: 90,
    name: [
      "빛의수호자",
      "키오라",
      "키퍼오브라이트",
      "키퍼오브더라이트",
      "코틀",
    ],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/keeper_of_the_light_full.png?",
  },
  {
    id: 91,
    name: ["이오", "위습"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/wisp_full.png?",
  },
  {
    id: 92,
    name: ["비사지"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/visage_full.png?",
  },
  {
    id: 93,
    name: ["슬라크"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/slark_full.png?",
  },
  {
    id: 94,
    name: ["메두사", "메두"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/medusa_full.png?",
  },
  {
    id: 95,
    name: ["트롤전쟁군주", "트롤", "트롤워로드"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/troll_warlord_full.png?",
  },
  {
    id: 96,
    name: ["켄타우로스전쟁용사", "켄타", "센타"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/centaur_full.png?",
  },
  {
    id: 97,
    name: ["마그누스", "마그", "마그나타우어"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/magnataur_full.png?",
  },
  {
    id: 98,
    name: ["벌목꾼", "팀버소우", "팀버", "슈레더"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/shredder_full.png?",
  },
  {
    id: 99,
    name: ["가시멧돼지", "가멧", "브벡", "브백", "브리슬백", "브리슬벡"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/bristleback_full.png?",
  },
  {
    id: 100,
    name: ["얼음폭군", "터스크"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/tusk_full.png?",
  },
  {
    id: 101,
    name: [
      "하늘분노마법사",
      "하분마",
      "스카이",
      "스카이레쓰메이지",
      "스카이레스메이지",
    ],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/skywrath_mage_full.png?",
  },
  {
    id: 102,
    name: ["아바돈", "아바"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/abaddon_full.png?",
  },
  {
    id: 103,
    name: ["고대티탄", "티탄", "엘더티탄", "엘더타이탄"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/elder_titan_full.png?",
  },
  {
    id: 104,
    name: ["군단사령관", "리전", "리젼", "리전커맨더", "리젼커맨더"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/legion_commander_full.png?",
  },
  {
    id: 105,
    name: ["기술단", "테키", "테키스"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/techies_full.png?",
  },
  {
    id: 106,
    name: ["불꽃령", "엠버", "엠버스피릿"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/ember_spirit_full.png?",
  },
  {
    id: 107,
    name: ["대지령", "어쓰스피릿", "어스스피릿"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/earth_spirit_full.png?",
  },
  {
    id: 108,
    name: ["지하군주", "언더로드"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/abyssal_underlord_full.png?",
  },
  {
    id: 109,
    name: ["테러블레이드", "테블"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/terrorblade_full.png?",
  },
  {
    id: 110,
    name: ["불사조", "피닉스"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/pheonix_full.png?",
  },
  {
    id: 111,
    name: ["예지자", "오라클"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/oracle_full.png?",
  },
  {
    id: 112,
    name: ["겨울비룡", "윈터와이번"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/winter_wyvern_full.png?",
  },
  {
    id: 113,
    name: ["번개감시자", "아크", "아크워든"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/arc_warden_full.png?",
  },
  {
    id: 114,
    name: ["원숭이왕", "몽킹", "몽키킹"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/monkey_king_full.png?",
  },
  {
    id: 115,
    name: ["흑버들", "다크윌로우"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/dark_willow_full.png?",
  },
  {
    id: 116,
    name: ["천갑검사", "팡골", "팡골리어"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/pangolier_full.png?",
  },
  {
    id: 117,
    name: ["그림스트로크", "그림"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/grimstroke_full.png?",
  },
  {
    id: 118,
    name: ["후드윙크"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/hoodwink_full.png?",
  },
  {
    id: 119,
    name: ["공허령", "보이드", "보이드스피릿"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/void_spirit_full.png?",
  },
  {
    id: 120,
    name: ["스냅파이어", "스냅"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/snapfire_full.png?",
  },
  {
    id: 121,
    name: ["마르스"],
    image: "https://api.opendota.com/apps/dota2/images/heroes/mars_full.png?",
  },
  {
    id: 122,
    name: ["여명의파괴자", "던브레이커", "던브"],
    image:
      "https://api.opendota.com/apps/dota2/images/heroes/dawnbreaker_full.png?",
  },
];

export default heroes;
