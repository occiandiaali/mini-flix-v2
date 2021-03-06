export class Movie {
    constructor(
        public id: number,
        public image: string,
        public title: string,
        public genre: string,
        public director: string,
        public cast: any,
        public synopsis: string,
        public released: string,
        public rating: any
    ) {}
}

export const MOVIES: Movie[] = [
    { id: 1,
      image: 'https://cdn.pixabay.com/photo/2013/06/08/17/24/piranhas-123287__340.jpg',
      title: 'Piranhas Attack', 
      genre: 'Science-fiction', 
      director: 'Patricia Goldman', 
      cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
      synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
      released: '2013',
      rating: 4.5 
    },
    { id: 2,
        image: 'https://cdn.pixabay.com/photo/2019/09/21/01/34/influencer-4492841__340.jpg',
        title: 'Being Tonto', 
        genre: 'Drama', 
        director: 'Toto Wike', 
        cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
        synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
        released: '2012',
        rating: 0.5 
      },
      { id: 3,
        image: 'https://cdn.pixabay.com/photo/2017/08/08/11/51/jerusalem-church-2611203__340.jpg',
        title: 'Survival Kit', 
        genre: 'Documentary', 
        director: 'Jane Doe', 
        cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
        synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
        released: '2019',
        rating: 4.5 
      },
      { id: 4,
        image: 'https://cdn.pixabay.com/photo/2016/08/30/17/08/hare-1631435__340.jpg',
        title: 'White panther', 
        genre: 'Action/Adventure', 
        director: 'Mbaka Okon', 
        cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
        synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
        released: '2019',
        rating: 3.5
      },
      { id: 5,
        image: 'https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070__340.jpg',
        title: 'Hotel Askamaya', 
        genre: 'Romantic comedy', 
        director: 'UB40', 
        cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
        synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
        released: '2017',
        rating: 5.0 
      },
      { id: 6,
        image: 'https://cdn.pixabay.com/photo/2019/06/22/20/55/godfather-4292451__340.jpg',
        title: 'Who killed my mother?', 
        genre: 'Drama', 
        director: 'Festus Keyamba', 
        cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
        synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
        released: '2014',
        rating: 1.5 
      },

      { id: 7,
        image: 'https://cdn.pixabay.com/photo/2017/12/18/13/03/grain-3026099__340.jpg',
        title: 'Piano man', 
        genre: 'Science-fiction', 
        director: 'Ben-hur Bruce', 
        cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
        synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
        released: '1998',
        rating: 4.5 
      },
      { id: 8,
          image: 'https://cdn.pixabay.com/photo/2016/09/06/02/46/eery-1648250__340.jpg',
          title: 'The hills speak lies', 
          genre: 'Horror', 
          director: 'Dinosaur Melanin', 
          cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
          synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
          released: '2007',
          rating: 0.5 
        },
        { id: 9,
          image: 'https://cdn.pixabay.com/photo/2017/01/08/15/10/mary-pickford-1963155__340.jpg',
          title: 'Mary Pickford', 
          genre: 'Documentary', 
          director: 'Jane Doe', 
          cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
          synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
          released: '2019',
          rating: 4.5 
        },
        { id: 10,
          image: 'https://cdn.pixabay.com/photo/2017/03/19/11/31/horror-2156302__340.jpg',
          title: 'The Forest', 
          genre: 'Action/Horror', 
          director: 'Shawn Fear', 
          cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
          synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
          released: '2019',
          rating: 3.5
        },
        { id: 11,
          image: 'https://cdn.pixabay.com/photo/2018/10/26/11/14/tv-3774381__340.jpg',
          title: 'Couch potato', 
          genre: 'Documentary', 
          director: 'Ben Dover', 
          cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
          synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
          released: '2017',
          rating: 5.0 
        },
        { id: 12,
          image: 'https://cdn.pixabay.com/photo/2017/10/05/13/17/beautiful-2819394__340.jpg',
          title: 'Bright Beauty', 
          genre: 'Romance', 
          director: 'Momo Bubu', 
          cast: ['Jim Iyke', 'Brad Pitt', 'Laurence Fishburne', 'Chiwetel Ejiofor', 'Jennifer Garner'], 
          synopsis: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!',
          released: '2014',
          rating: 1.5 
        },
];