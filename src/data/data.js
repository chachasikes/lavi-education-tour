//Data Structure
 var solutions = [ 
	{
		"styleSheet":"styleSheet Name",
		"categories":[
			{
				"title":"Bookstore",//Home Page
				"headerText":"1 This is placeholder header text",
				"thumbImage":"https://www.lavi.com/upload/CustomFiles/education/img/main.jpg",//Big Image
				"categoryDescription":{
					"paragraphs":[
						"text goes here. add HTML if desired <ul class=\"ul-class-1\"><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>",
						"text goes here. add HTML if desired <ul class=\"ul-class-1\"><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"image File Path"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
			},{
				"title":"Stadium",
				"headerText":"2 This is placeholder header text",
				"thumbImage":"name of thumb image",
				"categoryDescription":{
					"paragraphs":[
						"text goes here. add HTML if desired <ul><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>",
						"text goes here. add HTML if desired <ul><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"image File Path"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				},
			},{
				"title":"Restaurant",
				"headerText":"This is placeholder header text",
				"thumbImage":"name of thumb image",
				"categoryDescription":{
					"paragraphs":[
						"text goes here. add HTML if desired <ul><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>",
						"text goes here. add HTML if desired <ul><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"image File Path"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
			}
		],
		"content":[ //small images
			{
        "id": "0",
				"title":"Solution 1",
				"description":"description 1",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"name of thumb image",
				"content":{
					"paragraphs":[
						`This is the first paragraph for Solution 1. Add list elements later`,
						"This is the second paragraph. for Solution 1. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path": 'http://via.placeholder.com/149x149'//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
			},
			{
        "id": "1",
        "title":"Solution 2",
        "description":"description 2",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 2. Add list elements later",
						"This is the second paragraph for Solution 2. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Digital-Sign.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "2",
        "title":"Solution 3",
        "description":"description 3",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 3. Add list elements later",
						"This is the second paragraph for Solution 3. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Electronic-Queuing.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "3",
        "title":"Solution 4",
        "description":"description 4",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 4. Add list elements later",
						"This is the second paragraph for Solution 4. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/in-queue.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "4",
        "title":"Solution 5",
        "description":"description 5",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 5. Add list elements later",
						"This is the second paragraph for Solution 5. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/in-store.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "5",
        "title":"Solution 6",
        "description":"description 6",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 6. Add list elements later",
						"This is the second paragraph for Solution 6. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Checkout-Queue.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "6",
        "title":"Solution 7",
        "description":"description 7",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "7",
        "title":"Solution 8",
        "description":"description 8",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "8",
        "title":"Solution 9",
        "description":"description 9",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "9",
        "title":"Solution 10",
        "description":"description 10",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "10",
        "title":"Solution 11",
        "description":"description 11",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "11",
        "title":"Solution 12",
        "description":"description 12",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "12",
        "title":"Solution 13",
        "description":"description 13",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "13",
        "title":"Solution 14",
        "description":"description 14",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "14",
        "title":"Solution 15",
        "description":"description 15",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "15",
        "title":"Solution 16",
        "description":"description 16",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "16",
        "title":"Solution 17",
        "description":"description 17",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
      },
      {
        "id": "17",
        "title":"Solution 18",
        "description":"description 18",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"name of 1200 x 750 image",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"image File Path"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
			}
		]
	}
]

module.exports.solutions = solutions;
