const songs = [
        {
          title: "Believer",
          artist: "Imagine Dragons",
          coverUrl: "https://example.com/path_to_believer_cover.jpg",
          thumbUrl: "https://example.com/path_to_believer_thumb.jpg",
          audio: "/sounds/believer.mp3",
          palette: "coral",
        },
        {
          title: "Devil Eyes",
          artist: "Hippie Sabotage",
          coverUrl: "https://example.com/path_to_devil_eyes_cover.jpg",
          thumbUrl: "https://example.com/path_to_devil_eyes_thumb.jpg",
          audio: "/sounds/devil_eyes.mp3",
          palette: "coral", 
        },
        {
          title: "Fairytale",
          artist: "Alexander Rybak",
          coverUrl: "https://example.com/path_to_fairytale_cover.jpg",
          thumbUrl: "https://example.com/path_to_fairytale_thumb.jpg",
          audio: "/sounds/fairytale.mp3",
          palette: "coral",
        },
        {
          title: "Old Town Road",
          artist: "Lil Nas X",
          coverUrl: "https://example.com/path_to_old_town_road_cover.jpg",
          thumbUrl: "https://example.com/path_to_old_town_road_thumb.jpg",
          audio: "/sounds/old_town.mp3",
          palette: "coral", 
        },
        {
          title: "Shape Of You",
          artist: "Ed Sheeran",
          coverUrl: "https://example.com/path_to_shape_of_you_cover.jpg",
          thumbUrl: "https://example.com/path_to_shape_of_you_thumb.jpg",
          audio: "/sounds/shape_of_you.mp3",
          palette: "coral", 
        },
        {
          title: "The Nights",
          artist: "Avicii",
          coverUrl: "https://example.com/path_to_the_nights_cover.jpg",
          thumbUrl: "https://example.com/path_to_the_nights_thumb.jpg",
          audio: "/sounds/the_nights.mp3",
          palette: "coral", 
        },
        {
          title: "Thrift Shop",
          artist: "Macklemore & Ryan Lewis",
          coverUrl: "https://example.com/path_to_thrift_shop_cover.jpg",
          thumbUrl: "https://example.com/path_to_thrift_shop_thumb.jpg",
          audio: "/sounds/thrift_shop.mp3",
          palette: "coral", 
        },
        {
          title: "Venom (Remix)",
          artist: "Eminem",
          coverUrl: "https://example.com/path_to_venom_cover.jpg",
          thumbUrl: "https://example.com/path_to_venom_thumb.jpg",
          audio: "/sounds/venom.mp3",
          palette: "coral",
        },
      
  {
      title: "Glaciar",
      artist: "Juan Rios",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21648",
      palette: "coral",
  },
  {
      title: "What If I Told You",
      artist: "Juan Rios",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2021/07/935da7886600df5eeb2d3b13b12cf27ee8c6c700-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21649",
      palette: "yellow",
  },
  {
      title: "Toofpick",
      artist: "Blue Wednesday, Shopan",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11227",
      palette: "purple",
  },
  {
      title: "Airplane Mode",
      artist: "Axian, falcxne, Makzo",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20121",
      palette: "green",
  },
  {
      title: "Antematter",
      artist: "Toonorth",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17938",
      palette: "purple",
  },
  {
      title: "Almost Home",
      artist: "Chillhop Music",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21781",
      palette: "green",
  },
  {
      title: "Kinship",
      artist: "Sleepy Fish, mommy",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=19060",
      palette: "blue",
  },
  {
      title: "Vintage",
      artist: "Evil Needle",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17088",
      palette: "yellow",
  },
  {
      title: "Naked Sunday",
      artist: "CYGN",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14998",
      palette: "magenta",
  },
  {
      title: "Caffeine",
      artist: "Felty",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9334",
      palette: "blue",
  },
  {
      title: "Dojo",
      artist: "SwuM",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2020/04/35317644d6db24c3ca144619d03f2805fa702472-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2020/04/35317644d6db24c3ca144619d03f2805fa702472-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8002",
      palette: "teal",
  },
  {
      title: "Mozambique",
      artist: "Comodo",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8985",
      palette: "purple",
  },
  {
      title: "Rockaway 5pm",
      artist: "auv",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/8ead77b24ce86e871c31691dec6a5983b9533db1-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/8ead77b24ce86e871c31691dec6a5983b9533db1-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9157",
      palette: "yellow",
  },
  {
      title: "Magenta Forever",
      artist: "Aviino",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10458",
      palette: "pink",
  },
  {
      title: "Build",
      artist: "Yasper, Louk",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/f5170130ca62e18fb3928feb3d851f3f07f77e18-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/f5170130ca62e18fb3928feb3d851f3f07f77e18-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7873",
      palette: "orange",
  },
  {
      title: "Whale Call",
      artist: "Saib",
      coverUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/385d44fc6335bf676b30be524bcdfd7d640716a4-1024x1024.jpg",
      thumbUrl:
          "https://chillhop.com/wp-content/uploads/2020/07/385d44fc6335bf676b30be524bcdfd7d640716a4-150x150.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8099",
      palette: "cyan",
  },
];

export default songs;
