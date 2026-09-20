
export const modulesData = [
  {
    moduleId: 1,
    moduleTitle: "შესავალი HTML-ში",
    moduleLessons: [
      { lessonId: "l1_1", lessonTitle: "ვებ-ტექნოლოგიების მიმოხილვა", duration: "30 წთ" },
      { lessonId: "l1_2", lessonTitle: "სამუშაო გარემოს მომზადება", duration: "45 წთ" },
      { lessonId: "l1_3", lessonTitle: "ტეგები და ატრიბუტები", duration: "60 წთ" }
    ]
  },
  {
    moduleId: 2,
    moduleTitle: "CSS სტილიზაციის საფუძვლები",
    moduleLessons: [
      { lessonId: "l2_1", lessonTitle: "CSS-ის დაკავშირების გზები", duration: "30 წთ" },
      { lessonId: "l2_2", lessonTitle: "სელექტორები და ფერები", duration: "45 წთ" },
      { lessonId: "l2_3", lessonTitle: "შრიფტები და ტექსტის სტილი", duration: "40 წთ" }
    ]
  },
  {
    moduleId: 3,
    moduleTitle: "CSS Box Model და განლაგება",
    moduleLessons: [
      { lessonId: "l3_1", lessonTitle: "Margin, Padding და Border", duration: "50 წთ" },
      { lessonId: "l3_2", lessonTitle: "Display და Position თვისებები", duration: "60 წთ" }
    ]
  },
  {
    moduleId: 4,
    moduleTitle: "თანამედროვე განლაგება: Flexbox",
    moduleLessons: [
      { lessonId: "l4_1", lessonTitle: "Flex Container და Flex Items", duration: "45 წთ" },
      { lessonId: "l4_2", lessonTitle: "Justify-content და Align-items", duration: "50 წთ" },
      { lessonId: "l4_3", lessonTitle: "პრაქტიკული ნავიგაციის აწყობა", duration: "70 წთ" }
    ]
  },
  {
    moduleId: 5,
    moduleTitle: "CSS Grid სისტემა",
    moduleLessons: [
      { lessonId: "l5_1", lessonTitle: "Grid Template Columns და Rows", duration: "50 წთ" },
      { lessonId: "l5_2", lessonTitle: "Grid Gap და Areas", duration: "45 წთ" }
    ]
  },
  {
    moduleId: 6,
    moduleTitle: "Responsive დიზაინი",
    moduleLessons: [
      { lessonId: "l6_1", lessonTitle: "Media Queries პრინციპები", duration: "50 წთ" },
      { lessonId: "l6_2", lessonTitle: "მობილური ვერსიის ადაპტაცია", duration: "60 წთ" }
    ]
  },
  {
    moduleId: 7,
    moduleTitle: "Git და GitHub ბაზისები",
    moduleLessons: [
      { lessonId: "l7_1", lessonTitle: "ვერსიების კონტროლის კონცეფცია", duration: "40 წთ" },
      { lessonId: "l7_2", lessonTitle: "GitHub Desktop და რეპოზიტორიები", duration: "45 წთ" }
    ]
  },
  {
    moduleId: 8,
    moduleTitle: "JavaScript-ის შესავალი",
    moduleLessons: [
      { lessonId: "l8_1", lessonTitle: "ცვლადები და მონაცემთა ტიპები", duration: "50 წთ" },
      { lessonId: "l8_2", lessonTitle: "ფუნქციები და პირობითი ოპერატორები", duration: "60 წთ" }
    ]
  },
  {
    moduleId: 9,
    moduleTitle: "DOM მანიპულაცია",
    moduleLessons: [
      { lessonId: "l9_1", lessonTitle: "ელემენტების ძებნა და შერჩევა", duration: "45 წთ" },
      { lessonId: "l9_2", lessonTitle: "ივენთები (EventListeners)", duration: "55 წთ" }
    ]
  },
  {
    moduleId: 10,
    moduleTitle: "საბოლოო პორტფოლიო პროექტი",
    moduleLessons: [
      { lessonId: "l10_1", lessonTitle: "პროექტის დაგეგმვა და სტრუქტურა", duration: "60 წთ" },
      { lessonId: "l10_2", lessonTitle: "კოდის აწყობა და გამოქვეყნება", duration: "90 წთ" }
    ]
  }
];





// data.js
export const courses = [
  {
    courseTitle: "Get Started",
    topics: ["შესავალი კურსში", "საბაზისო ცნებები", "ინსტრუქციები", "პლატფორმის მიმოხილვა", "პირველი ნაბიჯები"]
  },
  {
    courseTitle: "Illstarator Structuors",
    topics: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor", "Lorem ipsum dolor sit amet"]
  },
  {
    courseTitle: "Using Illstarator",
    topics: ["ინტერფეისის მიმოხილვა", "ინსტრუმენტების გამოყენება", "პრაქტიკული დავალება", "დასკვნა"]
  },
  {
    courseTitle: "What is Pandas?",
    topics: ["რა არის Pandas?", "DataFrame-ები", "სერიები", "მონაცემების გაფილტვრა", "ანალიზის საფუძვლები"]
  },
  {
    courseTitle: "Work with Numpy",
    topics: ["მასივები Numpy-ში", "მათემატიკური ოპერაციები", "მონაცემებთან მუშაობა"]
  }
];


export const  searchCourses = [
  {
    subject: "design",
    duration: 3,
    title: "AWS Certified Solutions Architect",
    desciotion: "Learn cloud architecture and design scalable systems from scratch.",
    price: 100,
    discount: 20,
    language: "en",
    teacher: {
      name: "lina",
      pic: "https://github.com/ketopaichadze-source/e-learning-system-data/blob/main/images/teachers/lina.png?raw=true"
    }
  },
  {
    subject: "development",
    duration: 6,
    title: "JavaScript-ის სრული კურსი დამწყებთათვის",
    desciotion: "შეისწავლე JavaScript-ი და DOM მანიპულაცია პრაქტიკული პროექტებით.",
    price: 120,
    discount: 0,
    language: "ka",
    teacher: {
      name: "lina",
      pic: "https://github.com/ketopaichadze-source/e-learning-system-data/blob/main/images/teachers/lina.png?raw=true"
    }
  },
  {
    subject: "marketing",
    duration: 4,
    title: "Digital Marketing Masterclass 2026",
    desciotion: "Master SEO, social media marketing, and growth hacking strategies.",
    price: 80,
    discount: 15,
    language: "en",
    teacher: {
      name: "lina",
      pic: "https://github.com/ketopaichadze-source/e-learning-system-data/blob/main/images/teachers/lina.png?raw=true"
    }
  },
  {
    subject: "development",
    duration: 5,
    title: "Advanced CSS, Flexbox and SCSS",
    desciotion: "Create modern, responsive web pages using advanced CSS techniques.",
    price: 95,
    discount: 10,
    language: "en",
    teacher: {
      name: "lina",
      pic: "https://github.com/ketopaichadze-source/e-learning-system-data/blob/main/images/teachers/lina.png?raw=true"
    }
  },
  {
    subject: "business",
    duration: 8,
    title: "ბიზნესის მართვის საფუძვლები",
    desciotion: "როგორ ვმართოთ და განვავითაროთ סטარტაპი წარმატებით.",
    price: 150,
    discount: 25,
    language: "ka",
    teacher: {
      name: "lina",
      pic: "https://github.com/ketopaichadze-source/e-learning-system-data/blob/main/images/teachers/lina.png?raw=true"
    }
  },
  {
    subject: "design",
    duration: 4,
    title: "UI/UX დიზაინი Figma-ს გამოყენებით",
    desciotion: "ისწავლე მომხმარებლის ინტერფეისისა და გამოცდილების დიზაინის პრინციპები.",
    price: 110,
    discount: 30,
    language: "ka",
    teacher: {
      name: "lina",
      pic: "https://github.com/ketopaichadze-source/e-learning-system-data/blob/main/images/teachers/lina.png?raw=true"
    }
  },
  {
    subject: "marketing",
    duration: 3,
    title: "სოციალური მედიის მარკეტინგი",
    desciotion: "როგორ შევქმნათ ეფექტური სარეკლამო კამპანიები Facebook-სა და Instagram-ზე.",
    price: 70,
    discount: 0,
    language: "ka",
    teacher: {
      name: "lina",
      pic: "https://github.com/ketopaichadze-source/e-learning-system-data/blob/main/images/teachers/lina.png?raw=true"
    }
  },
  {
    subject: "development",
    duration: 7,
    title: "React.js Frontend Development",
    desciotion: "Build dynamic single-page applications using React components and hooks.",
    price: 130,
    discount: 20,
    language: "en",
    teacher: {
      name: "lina",
      pic: "https://github.com/ketopaichadze-source/e-learning-system-data/blob/main/images/teachers/lina.png?raw=true"
    }
  }
];