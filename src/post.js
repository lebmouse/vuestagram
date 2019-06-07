import headImg from './assets/profile1.jpg'

export default {
  "head": {
    "img": headImg,
    "name": "cattac2"
  },
  "contents": [{
    "img": require("./assets/content1.jpeg")
  }],
  "infor": {
    "img": require("./assets/cat_profile2.jpeg"),
    "name": "개냐이",
    "number": 38
  },
  "comments": [{
      "name": "not_dog",
      "content": "이런게 귀여워?",
      "isLike": false
    },
    {
      "name": "catholic",
      "content": "졸렵다",
      "isLike": false
    }
  ],
  "date": "1일전"
}