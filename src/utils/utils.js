export function formatDate(dateString) {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

const cardListArray = [
  {
    source: {
      id: null,
      name: "Gizmodo.jp",
    },
    author: "岡本玄介",
    title: "『ドラゴンボール』の世界に行ける。巨大テーマパークが中東に",
    description:
      "Image:東映アニメーション株式会社オラわくわくしてきたぞ!!1984年に連載が開始され、アニメやゲームや映画などで世界中の人たちから愛され続けている『ドラゴンボール』。鳥山明さんが描くあの世界に、誰もが行ってみたいと思ったことあるんじゃないでしょうか？DBがテーマパークになる!?サウジアラビアにて、世界初となる『ドラゴンボール』のテーマパーク建設が決定しました。50万平方メートル以上の敷地には",
    url: "https://www.gizmodo.jp/2024/03/dragon-ball-park.html",
    urlToImage:
      "https://media.loom-app.com/gizmodo/dist/images/2024/03/22/240325_qiddiya.jpg?w=1280&h=630&f=jpg",
    publishedAt: "2024-03-22T23:00:00Z",
    content:
      "!! \r\n1984\r\nDB!? \r\n507\r\nVideo: Qiddiya - /YouTube\r\n70m\r\nImage: \r\n1\r\nQiddiya Investment Company5307\r\nSource: YouTube, Qiddiya, DRAGONBALL OFFICIAL SITE, via",
  },
  {
    source: {
      id: null,
      name: "Espinof.com",
    },
    author: "Mariló Delgado",
    title:
      '"Perdón por cagarla con la adaptación". El Goku de acción real rinde tributo a Akira Toriyama y se disculpa (por enésima vez) por \'Dragonball Evolution',
    description:
      "La semana pasada tuvimos que despedirnos de tuvimos que despedirnos de Akira Toriyama, que nos dejó de sopetón a los 68 años. Los homenajes y despedidas por todo el globo no dejaron de llegar durante todo el fin de semana, dejando claro que pocas obras de man…",
    url: "https://www.espinof.com/anime/perdon-cagarla-adaptacion-goku-accion-real-rinde-tributo-a-akira-toriyama-se-disculpa-enesima-vez-dragonball-evolution",
    urlToImage: "https://i.blogs.es/bd51bc/dragonball-evolution/840_560.jpeg",
    publishedAt: "2024-03-11T13:01:15Z",
    content:
      "La semana pasada tuvimos que despedirnos de tuvimos que despedirnos de Akira Toriyama, que nos dejó de sopetón a los 68 años. Los homenajes y despedidas por todo el globo no dejaron de llegar durante… [+1809 chars]",
  },
  {
    source: {
      id: null,
      name: "La Vanguardia",
    },
    author: "Marcos Catalán",
    title:
      "'Dragon Ball Z' de acción real según la IA: lejos de Dragonball: Evolution y con Ryan Reynolds como Goku",
    description:
      "Estamos en una época donde, gracias a los avances en cuanto a efectos especiales se refiere, hemos podido ver muchas veces cumplido nuestro sueño de juventud de ver una determinada serie de dibujos animados ahora con actores reales, aunque estas adaptaciones …",
    url: "https://www.lavanguardia.com/andro4all/series/dragon-ball-z-de-accion-real-segun-la-ia-lejos-de-dragonball-evolution-y-con-ryan-reynolds-como-goku",
    urlToImage:
      "https://www.lavanguardia.com/andro4all/hero/2024/03/dragon-ball-ryan-reynolds-goku.jpg?width=1200",
    publishedAt: "2024-03-06T17:00:25Z",
    content:
      "Ryan Reynolds como Goku en un live action de 'Dragon Ball'. Nosotros no lo vemos, pero para gustos, colores de pelo\r\nEstamos en una época donde, gracias a los avances en cuanto a efectos especiales s… [+2121 chars]",
  },
  {
    source: {
      id: "ign",
      name: "IGN",
    },
    author: "Kat Bailey",
    title:
      "Live-Action Goku Actor Pays Tribute to Akira Toriyama by Apologizing for Dragonball: Evolution",
    description:
      "Dragonball: Evolution actor Justin Chatwin, who played Goku in the live-action adaptation of the classic shonen anime, paid tribute to Akira Toriyama with an apology for the infamous film.",
    url: "https://www.ign.com/articles/live-action-goku-actor-dragon-ball-evolution-akira-toriyama",
    urlToImage:
      "https://assets-prd.ignimgs.com/2024/03/12/dragonball-evolution-1280jpg-652d1d-160w-1710272824725.jpg?width=1280",
    publishedAt: "2024-03-12T20:33:18Z",
    content:
      "As far as live-action adaptations of anime are concerned, Dragonball: Evolution is right up there with M. Night Shyamalan's The Last Airbender in terms of historical infamy. Justin Chatwin, who playe… [+2606 chars]",
  },
  {
    source: {
      id: null,
      name: "Corriere.it",
    },
    author: "Maricla Pastore",
    title:
      "Uova di Pasqua 2024: doppio cioccolato o con sorpresa da collezione? I nostri preferiti",
    description:
      "Con la Pasqua alle porte è corsa agli acquisti delle uova di cioccolato. Da quelle gourmet ai grandi classici con super soprese: ecco alcune novità di quest'annoCon la Pasqua alle porte è corsa agli acquisti delle uova di cioccolato. Da quelle gourmet ai gran…",
    url: "https://www.corriere.it/offerte-recensioni/cucina/alimentari/24_marzo_15/uova-di-pasqua-2024-d0a077d7-e4fa-4356-a753-79623183bxlk.shtml",
    urlToImage:
      "https://dimages2.corriereobjects.it/files/og_thumbnail/files/fp/uploads/2024/03/14/65f31810e3538.r_d.307-205-0.jpeg",
    publishedAt: "2024-03-15T14:32:10Z",
    content:
      "E non può mancare Kinder Gransorpresa: luovo di cioccolato amato da tutti, grandi e piccini, diventato negli anni un regalo irrinunciabile per festeggiare la Pasqua in famiglia. Per i bambini è il si… [+891 chars]",
  },
  {
    source: {
      id: "next-big-future",
      name: "Next Big Future",
    },
    author: "Brian Wang",
    title: "Dragonball Creator Toriyama Has Died",
    description:
      "Akira Toriyama, creator of the massively popular Dragonball anime, has died at the age of 68 from a blood clot in the brain. Dragonball had a global cultural impact like Star Trek. There were multiple series and movies that spanned decades.",
    url: "https://www.nextbigfuture.com/2024/03/dragonball-creator-toriyama-has-died.html",
    urlToImage:
      "https://nextbigfuture.s3.amazonaws.com/uploads/2024/03/Screen-Shot-2024-03-08-at-9.57.56-AM-1024x573.jpg",
    publishedAt: "2024-03-08T18:03:20Z",
    content:
      "Brian Wang is a Futurist Thought Leader and a popular Science blogger with 1 million readers per month. His blog Nextbigfuture.com is ranked #1 Science News Blog. It covers many disruptive technology… [+593 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "polygon.com",
    title:
      "Artists, animators, musicians, and creators pay tribute to Dragon Ball’s Akira Toriyama",
    description:
      "It will take decades for the world to fully unpack all the ways Akira Toriyama shaped our culture. The legendary artist and author, whose death was publicly announced Thursday, was a pioneer in manga, comics, anime, and video games, and his work formed a foun…",
    url: "https://biztoc.com/x/d92c9e8ab63ff0f3",
    urlToImage: "https://c.biztoc.com/p/d92c9e8ab63ff0f3/s.webp",
    publishedAt: "2024-03-08T18:38:06Z",
    content:
      "It will take decades for the world to fully unpack all the ways Akira Toriyama shaped our culture. The legendary artist and author, whose death was publicly announced Thursday, was a pioneer in manga… [+302 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "fortune.com",
    title:
      "Akira Toriyama's death is being felt around the world as global leaders and millions of fans remember one of Japan's most influential icons",
    description:
      "The surprise death of Akira Toriyama, the beloved artist behind the Dragon Ball manga and the classic Dragon Quest and Chrono Trigger video games, may be 2024’s first death to be felt around the world. Toriyama passed away on March 1, aged 68, from an acute s…",
    url: "https://biztoc.com/x/4d4abc75c5eb5068",
    urlToImage: "https://c.biztoc.com/p/4d4abc75c5eb5068/s.webp",
    publishedAt: "2024-03-08T17:36:08Z",
    content:
      "The surprise death of Akira Toriyama, the beloved artist behind the Dragon Ball manga and the classic Dragon Quest and Chrono Trigger video games, may be 2024s first death to be felt around the world… [+304 chars]",
  },
  {
    source: {
      id: null,
      name: "Biztoc.com",
    },
    author: "businessinsider.com",
    title:
      "A 'Dragon Ball' theme park is Saudi Arabia's latest attempt to become the world's playground. Some fans aren't happy",
    description:
      'A design for the the "Dragon Ball" theme park as seen in a still from a promotional video on March 22, 2023. Qiddiya via YouTube A huge new "Dragon Ball" theme park is coming to Saudi Arabia, the franchise owner said. The series — one of the most successful J…',
    url: "https://biztoc.com/x/8b816ff6061a2a0b",
    urlToImage: "https://c.biztoc.com/p/8b816ff6061a2a0b/s.webp",
    publishedAt: "2024-03-25T13:40:07Z",
    content:
      'A design for the the "Dragon Ball" theme park as seen in a still from a promotional video on March 22, 2023.Qiddiya via YouTubeA huge new "Dragon Ball" theme park is coming to Saudi Arabia, the franc… [+288 chars]',
  },
  {
    source: {
      id: null,
      name: "Smartworld.it",
    },
    author: "Lorenzo Delli",
    title:
      "Il nuovo live action di Dragon Ball Z è troppo bello per essere vero (e infatti non lo è)",
    description:
      "Di preciso, stando a uno dei post di maggior successo su Facebook, si tratterebbe dell'adattamento live action della saga Saiyan...\r\nL'articolo Il nuovo live action di Dragon Ball Z è troppo bello per essere vero (e infatti non lo è) sembra essere il primo su…",
    url: "https://www.smartworld.it/news/dragon-ball-live-action-foto-realistiche.html",
    urlToImage:
      "https://www.smartworld.it/images/2024/03/21/dragon-ball-live-action-ia_1200x675.jpg",
    publishedAt: "2024-03-21T14:14:00Z",
    content:
      "Di preciso, stando a uno dei post di maggior successo su Facebook, si tratterebbe dell'adattamento live action della saga Saiyan di Dragon Ball Z prodotto niente meno che da Netflix. Già solo live ac… [+1909 chars]",
  },
  {
    source: {
      id: "ign",
      name: "IGN",
    },
    author: "Aarón Márquez",
    title:
      "El actor de Goku rinde homenaje a Akira Toriyama disculpándose por Dragonball: Evolution",
    description:
      '"Descansa en paz, hermano. Y siento que estropeáramos tanto esa adaptación", dice Justin Chatwin.\nEl actor que interpretó a Goku en Dragonball: Evolution se une en la larga lista de homenajes a Akira Toriyama por su fallecimiento.',
    url: "https://es.ign.com/dragonball-evolution-theater/200801/news/el-actor-de-goku-rinde-homenaje-a-akira-toriyama-disculpandose-por-dragonball-evolution",
    urlToImage:
      "https://sm.ign.com/t/ign_es/news/l/live-actio/live-action-goku-actor-pays-tribute-to-akira-toriyama-by-apo_ssv2.1200.jpg",
    publishedAt: "2024-03-16T15:00:32Z",
    content:
      "En lo que respecta a las adaptaciones al cine del anime, Dragonball: Evolution está a la altura de The Last Airbender de M. Night Shyamalan en cuanto a infamia histórica. Justin Chatwin, que interpre… [+2369 chars]",
  },
  {
    source: {
      id: null,
      name: "Presse-citron",
    },
    author: "Stéphane Ficca",
    title:
      "Akira Toriyama, papa de Dragon Ball, est mort : 4 choses à savoir sur l’un des plus grands mangakas de l’Histoire",
    description:
      "Triste journée que ce vendredi 8 mars 2024, avec l'annonce du décès d'Akira Toriyama, le \"papa\" de Dragon Ball, également à l'origine de Dr Slump et de nombreux jeux vidéo (entre autres).",
    url: "https://www.presse-citron.net/akira-toriyama-papa-de-dragon-ball-est-mort-4-choses-a-savoir-sur-lun-des-plus-grands-mangakas-de-lhistoire/",
    urlToImage:
      "https://www.presse-citron.net/app/uploads/2024/03/akira-toriyama-dragon-ball.jpg",
    publishedAt: "2024-03-08T09:04:05Z",
    content:
      "“Nous sommes très tristes de vous annoncer que le mangaka Akira Toriyama nous a quittés le 1er mars. Il était âgé de 68 ans“. Un message diffusé sur le site officiel de Dragon Ball ce vendredi 8 mars… [+5144 chars]",
  },
  {
    source: {
      id: null,
      name: "Elespanol.com",
    },
    author: "César Rebolledo",
    title:
      "Así fue el mensaje que Akira Toriyama dejó para sus hijos en Chrono Trigger",
    description:
      "<!--cache-->El recientemente fallecido mangaka colaboró en el apartado artístico de una buena cantidad de juegos de rol a lo largo de su carrera profesional.<!--aa--->Cuando un autor del nivel de Akira Toriyama nos deja, es normal que se recuerden montones de…",
    url: "https://vandal.elespanol.com/noticia/1350770080/asi-fue-el-mensaje-que-akira-toriyama-dejo-para-sus-hijos-en-chrono-trigger/",
    urlToImage:
      "https://media.vandal.net/ivandal/12/63/1200x630/3/3-2024/21/202432123524526_1.jpg",
    publishedAt: "2024-03-23T15:56:00Z",
    content:
      "Cuando un autor del nivel de Akira Toriyama nos deja, es normal que se recuerden montones de anécdotas sobre su carrera, y que lógicamente los proyectos en los que participaba se detengan temporalmen… [+1287 chars]",
  },
  {
    source: {
      id: null,
      name: "Natalie.mu",
    },
    author: "コミックナタリー",
    title:
      "「ドラゴンボールDAIMA」フジテレビで秋放送、野沢雅子も新作に「ワクワク」",
    description:
      "鳥山明原作によるTVアニメ「ドラゴンボールDAIMA（ダイマ）」が今秋フジテレビで放送されることが発表された。",
    url: "https://natalie.mu/comic/news/564622",
    urlToImage:
      "https://ogre.natalie.mu/media/news/comic/2024/0311/dragonballdaima_0311.jpg?impolicy=twitter_card_feature_crop",
    publishedAt: "2024-03-11T12:53:00Z",
    content:
      "@susuki_Mk2\r\nDAIMA https://t.co/SXZfxGSCsP #dragonball#DragonBallDaima ##DAIMA#",
  },
  {
    source: {
      id: null,
      name: "Numerama",
    },
    author: "Maxime Claudel",
    title:
      "Des fans du jeu Dragon Ball Xenoverse 2 ont rendu un bel hommage à Akira Toriyama",
    description:
      "Disparu au tout début du mois de mars, Akira Toriyama laisse derrière lui plusieurs générations de fans. Les hommages fusent depuis, sur les réseaux sociaux et dans certains jeux vidéo. Celui réalisé dans le jeu Dragon Ball Xenoverse 2 est particulièrement re…",
    url: "https://www.numerama.com/pop-culture/1650824-des-fans-du-jeu-dragon-ball-xenoverse-2-ont-rendu-un-bel-hommage-a-akira-toriyama.html",
    urlToImage:
      "https://www.numerama.com/wp-content/uploads/2024/03/capture-decran-2024-03-12-a-09-03-53.jpg",
    publishedAt: "2024-03-12T08:32:47Z",
    content:
      "Disparu au tout début du mois de mars, Akira Toriyama laisse derrière lui plusieurs générations de fans. Les hommages fusent depuis, sur les réseaux sociaux et dans certains jeux vidéo. Celui réalisé… [+3199 chars]",
  },
];
export default cardListArray;
