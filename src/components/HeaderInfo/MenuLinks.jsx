//  icons
import {
  faArrowsSpin,
  faChessKing,
  faCircleNodes,
  faCloudBolt,
  faCubesStacked,
  faLink,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

// data
export const info = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Services",
    dropDown: true,
    childClass: "serviceUL",
    subMenu: [
      {
        iconClass: faCircleNodes,
        title: "Business process optimization",
        status: faLink,
      },
      {
        iconClass: faChessKing,
        title: "Strategic planning & execution",
        status: faLink,
      },
      {
        iconClass: faUserAstronaut,
        title: "Leadership executive coaching",
        status: faLink,
      },
      {
        iconClass: faArrowsSpin,
        title: "Business process optimization",
        status: faLink,
      },
      {
        iconClass: faCloudBolt,
        title: "Strategic planning & execution",
        status: faLink,
      },
      {
        iconClass: faCubesStacked,
        title: "Leadership executive coaching",
        status: faLink,
      },
    ],
  },
  {
    id: 3,
    title: "Pages",
    dropDown: true,
    childClass: "page",
    gridTemp: true,
    subMenu: [
      {
        title: "Main Pages",
        list: [
          {
            title: "About Us",
          },
          {
            title: "Our History",
            status: { text: "Hot", class: "hot" },
          },
          {
            title: "Team",
          },
          {
            title: "Team Details",
          },
          {
            title: "Career",
            status: { text: "New", class: "cool" },
          },
          {
            title: "Career Details",
          },
          {
            title: "Pricing Plan",
          },
          {
            title: "Feedbacks",
          },
          {
            title: "Faq",
          },
          {
            title: "Contact",
          },
        ],
      },
      {
        title: "Other Pages",
        list: [
          {
            title: "Service",
          },
          {
            title: "Service Details",
          },
          {
            title: "Portfolio",
          },
          {
            title: "Portfolio Details",
          },
          {
            title: "Error 404",
          },
          {
            title: "Blog grid",
            status: { text: "New", class: "cool" },
          },
          {
            title: "Blog standard",
          },
          {
            title: "Blog details",
          },
          {
            title: "Terms & conditions",
          },
          {
            title: "Recognition",
            status: { text: "New", class: "cool" },
          },
        ],
      },
      {
        title: "Shop Pages",
        list: [
          {
            title: "Shop",
          },
          {
            title: "Shop Details",
            status: { text: "Hot", class: "hot" },
          },
          {
            title: "Cart",
          },
          {
            title: "Checkout",
          },
          {
            title: "Wishlist",
            status: { text: "New", class: "cool" },
          },
          {
            title: "Login",
          },
          {
            title: "Tracking",
          },
          {
            title: "Order confirm",
          },
          {
            title: "Registration",
          },
          {
            title: "Coming soon",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    dropDown: true,
  },
  {
    id: 5,
    title: "Blog",
    dropDown: true,
  },
  {
    id: 6,
    title: "Contact",
  },
];
