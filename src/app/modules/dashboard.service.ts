import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  tweetTimeSeries() {
    return [
      [
        0,
        5
      ],
      [
        1,
        2
      ],
      [
        2,
        1
      ],
      [
        3,
        0
      ],
      [
        4,
        2
      ],
      [
        5,
        3
      ],
      [
        6,
        7
      ],
      [
        7,
        12
      ],
      [
        8,
        15
      ],
      [
        9,
        18
      ],
      [
        10,
        22
      ],
      [
        11,
        15
      ],
      [
        12,
        12
      ],
      [
        13,
        24
      ],
      [
        14,
        13
      ],
      [
        15,
        10
      ],
      [
        16,
        25
      ],
      [
        17,
        28
      ],
      [
        18,
        30
      ],
      [
        19,
        14
      ],
      [
        20,
        19
      ],
      [
        21,
        13
      ],
      [
        22,
        10
      ],
      [
        23,
        6
      ],
    ]
  }

  wordCloudData() {
    return [{
      name: 'Lorem',
      weight: 3
    }, {
      name: 'Ipsum',
      weight: 2
    }, {
      name: 'Dolor',
      weight: 1
    }]
  }

  topUsers() {
    let users: string[] = [
      "mahsa", "mahsa", "mahsa"
    ];
    return users;
  }

  topKeywords() {
    let keywords: string[] = [
      "security", "cybercriminal", "malware"
    ];
    return keywords;
  }

  topTweets() {
    let tweets: string[] = [
      "hi malware!", "this is a sample tweet with top security info.", "don't come after me i'm a hacker."
    ];
    return tweets;
  }

  cards() {
    return [71, 78, 39, 66];
  }
}
