// MAKAN SKUY

function mergeOrder(data) {
  const result = []

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
    const innerArray = []
    for (let j = 0; j < element.orders.length; j++) {
      const perOrder = element.orders[j];
      
      innerArray(perOrder[0], perOrder[1])
    }
    result.push(innerArray)
  }

  return result
}

function calculateTotalSales(data) {
  let priceList = [
    { name: "Burger", price: 25000 },
    { name: "Kentang", price: 1000 },
    { name: "Ayam", price: 17000 },
    { name: "CocaCola", price: 7000 },
    { name: "IceCream", price: 3000 },
  ];
  
  const result = []

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
    let sales = 0
    for (let j = 0; j < element.length; j+=2) {
      
      for (let k = 0; k < priceList.length; k++) {
        const perPrice = priceList[k];

        if(perPrice.name === element[j]){
          sales += perPrice.price * element[j + 1]
        }
        
      }
    }
    result.push(sales)
  }

  return result
}

function calculateTotalVote(data) {
  const result = []

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    
    let point = element.reviewers * 25
    let vote = point / 100

    result.push(vote)
  }

  return result
}

function makanSkuy(data) {
  if(!data) {
    return "Invalid Data!"
  }
  if(!data.length) {
    return "Tidak ada order, order dulu ngab!"
  }

  const result = {}

  const mergeValue = mergeOrder(data)
  const salesValue = calculateTotalSales(mergeValue)
  const voteValue = calculateTotalVote(data)

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    const resName = element.restaurant
    const resValue = salesValue[i]
    const resVote = voteValue[i]

    let star = ""
    if(resValue > 20_000_000 && resVote > 100){
      star = "ThreeStars"
    }else if (resValue >= 10_000_000 && resVote >= 50){
      star = "TwoStars"
    }else{
      star = "OneStar"
    }

    if(!result[star]){
      result[star] = []
    }

    result[star].push(resName)
  }
  return result
}

// TEST CASES

console.log(makanSkuy()); // Invalid Data!
console.log(makanSkuy([])); // Tidak ada order, order dulu ngab!

let order1 = [
  {
    restaurant : "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 130],
      ["CocaCola", 400],
      ["IceCream", 186],
    ],
    reviewers: 140
  },
  {
    restaurant : "Lawmore",
    orders: [
      ["Ayam", 126],
      ["CocaCola", 206],
      ["Burger", 368],
      ["IceCream", 80],
    ],
    reviewers: 260
  },
  {
    restaurant : "Burger Queen",
    orders: [
      ["Ayam", 85],
      ["CocaCola", 150],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80
  },
  {
    restaurant : "Pendys",
    orders: [
      ["Ayam", 380],
      ["CocaCola", 246],
      ["Burger", 166],
      ["Kentang", 190],
    ],
    reviewers: 292
  },
  {
    restaurant : "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 510],
      ["Burger", 699],
      ["Kentang", 274],
    ],
    reviewers: 412
  }
]

console.log(makanSkuy(order1))
/*
{
  OneStar: [ 'MekDun', 'Burger Queen' ],
  TwoStars: [ 'Lawmore', 'Pendys' ],
  ThreeStars: [ 'Karl Sr' ]
}
*/

let order2 = [
  {
    restaurant : "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 130],
      ["CocaCola", 400],
      ["IceCream", 186],
    ],
    reviewers: 140
  },
  {
    restaurant : "Lawmore",
    orders: [
      ["Ayam", 326],
      ["CocaCola", 306],
      ["Burger", 468],
      ["IceCream", 280],
    ],
    reviewers: 460
  },
  {
    restaurant : "Burger Queen",
    orders: [
      ["Ayam", 85],
      ["CocaCola", 150],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80
  },
  {
    restaurant : "Pendys",
    orders: [
      ["Ayam", 580],
      ["CocaCola", 246],
      ["Burger", 366],
      ["Kentang", 290],
    ],
    reviewers: 432
  },
  {
    restaurant : "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 510],
      ["Burger", 699],
      ["Kentang", 274],
    ],
    reviewers: 412
  }
]

console.log(makanSkuy(order2))
/*
{
  OneStar: [ 'MekDun', 'Burger Queen' ],        
  ThreeStars: [ 'Lawmore', 'Pendys', 'Karl Sr' ]
}
*/
let order3 = [
  {
    restaurant : "MekDun",
    orders: [
      ["Burger", 200],
      ["Kentang", 13],
      ["CocaCola", 40],
      ["IceCream", 186],
    ],
    reviewers: 140
  },
  {
    restaurant : "Lawmore",
    orders: [
      ["Ayam", 326],
      ["CocaCola", 306],
      ["Burger", 68],
      ["IceCream", 280],
    ],
    reviewers: 84
  },
  {
    restaurant : "Burger Queen",
    orders: [
      ["Ayam", 80],
      ["CocaCola", 10],
      ["Burger", 450],
      ["Kentang", 20],
    ],
    reviewers: 80
  },
  {
    restaurant : "Pendys",
    orders: [
      ["Ayam", 58],
      ["CocaCola", 26],
      ["Burger", 36],
      ["Kentang", 20],
    ],
    reviewers: 20
  },
  {
    restaurant : "Karl Sr",
    orders: [
      ["Ayam", 65],
      ["CocaCola", 51],
      ["Burger", 69],
      ["Kentang", 74],
    ],
    reviewers: 120
  }
]

console.log(makanSkuy(order3))
/*
{
  OneStar: [ 'MekDun', 'Lawmore', 'Burger Queen', 'Pendys', 'Karl Sr' ]
}
*/

module.exports = {
  mergeOrder,
  calculateTotalSales,
  calculateTotalVote,
  makanSkuy,
};