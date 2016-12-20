const questions = [
  {
    type: 'artist',
    audio: 'audio/track1.mp3',
    content: {
      title: 'Кто исполняет эту песню?',
      answers: [
        {
          correct: false,
          name: 'Пелагея',
          img: 'img/bands/Pelageya.jpg'
        },
        {
          correct: false,
          name: 'Краснознаменная дивизия имени моей бабушки',
          img: 'img/bands/RBDBOMG.jpg'
        },
        {
          correct: true,
          name: 'Lorde',
          img: 'img/bands/Lorde.jpg'
        }
      ]
    }
  },
  {
    type: 'genre',
    content: {
      title: 'Выберите инди-рок треки',
      answers: [
        {
          correct: false,
          audio: 'audio/track2.mp3'
        },
        {
          correct: true,
          audio: 'audio/track3.mp3'
        },
        {
          correct: false,
          audio: 'audio/track4.mp3'
        },
        {
          correct: true,
          audio: 'audio/track5.mp3'
        }
      ]
    }
  },
  {
    type: 'artist',
    audio: 'audio/track6.mp3',
    content: {
      title: 'Кто исполняет эту песню?',
      answers: [
        {
          correct: false,
          name: 'Lumen',
          img: 'img/bands/Lumen.jpg'
        },
        {
          correct: true,
          name: '7РАСА',
          img: 'img/bands/7race.jpg'
        },
        {
          correct: false,
          name: 'Slot',
          img: 'img/bands/Slot.jpg'
        }
      ]
    }
  },
  {
    type: 'genre',
    content: {
      title: 'Выберите регги треки',
      answers: [
        {
          correct: false,
          audio: 'audio/track7.mp3'
        },
        {
          correct: true,
          audio: 'audio/track8.mp3'
        },
        {
          correct: true,
          audio: 'audio/track9.mp3'
        },
        {
          correct: true,
          audio: 'audio/track10.mp3'
        }
      ]
    }
  },
  {
    type: 'artist',
    audio: 'audio/track11.mp3',
    content: {
      title: 'Кто исполняет эту песню?',
      answers: [
        {
          correct: true,
          name: 'Metallica',
          img: 'img/bands/Metallica.jpg'
        },
        {
          correct: false,
          name: 'Iron Maiden',
          img: 'img/bands/Iron Maiden.jpg'
        },
        {
          correct: false,
          name: 'Megadeth',
          img: 'img/bands/Megadeth.jpg'
        }
      ]
    }
  },
  {
    type: 'genre',
    content: {
      title: 'Выберите black metal треки',
      answers: [
        {
          correct: true,
          audio: 'audio/track12.mp3'
        },
        {
          correct: false,
          audio: 'audio/track13.mp3'
        },
        {
          correct: false,
          audio: 'audio/track14.mp3'
        },
        {
          correct: false,
          audio: 'audio/track15.mp3'
        }
      ]
    }
  },
  {
    type: 'artist',
    audio: 'audio/track16.mp3',
    content: {
      title: 'Кто исполняет эту песню?',
      answers: [
        {
          correct: false,
          name: 'Монгол Шуудан',
          img: 'img/bands/Mongol.jpg'
        },
        {
          correct: true,
          name: 'F.P.G.',
          img: 'img/bands/FPG.jpg'
        },
        {
          correct: false,
          name: 'Пурген',
          img: 'img/bands/Purgen.jpg'
        }
      ]
    }
  },
  {
    type: 'genre',
    content: {
      title: 'Выберите фанк-рок треки',
      answers: [
        {
          correct: false,
          audio: 'audio/track17.mp3'
        },
        {
          correct: false,
          audio: 'audio/track18.mp3'
        },
        {
          correct: true,
          audio: 'audio/track19.mp3'
        },
        {
          correct: false,
          audio: 'audio/track20.mp3'
        }
      ]
    }
  },
  {
    type: 'artist',
    audio: 'audio/track21.mp3',
    content: {
      title: 'Кто исполняет эту песню?',
      answers: [
        {
          correct: false,
          name: 'Marduk',
          img: 'img/bands/Marduk.jpg'
        },
        {
          correct: true,
          name: 'Mayhem',
          img: 'img/bands/Mayhem.jpg'
        },
        {
          correct: false,
          name: 'Gorgoroth',
          img: 'img/bands/Gorgoroth.jpg'
        }
      ]
    }
  },
  {
    type: 'genre',
    content: {
      title: 'Выберите панк-рок треки',
      answers: [
        {
          correct: false,
          audio: 'audio/track22.mp3'
        },
        {
          correct: false,
          audio: 'audio/track23.mp3'
        },
        {
          correct: true,
          audio: 'audio/track24.mp3'
        },
        {
          correct: true,
          audio: 'audio/track25.mp3'
        }
      ]
    }
  }
];

export default questions;
