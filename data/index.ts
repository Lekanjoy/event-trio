import launch from "@/public/landing-page/launch.svg";
import partnership from "@/public/landing-page/partnership.svg";
import milestone from "@/public/landing-page/milestone.svg";
import expansion from "@/public/landing-page/collaboration.svg";
import Alice from "@/public/landing-page/member1.jpg";
import Mark from "@/public/landing-page/member2.jpg";
import Sarah from "@/public/landing-page/member3.jpg";
import James from "@/public/landing-page/member4.jpg";
import Emily from "@/public/landing-page/member6.jpg";
import Michael from "@/public/landing-page/member5.jpg";

export const tuxData = [
  {
    id: 0,
    name: "Classic Black",
    price: "55",
    rating: 5
  },
  {
    id: 1,
    name: "Midnight Blue",
    price: "55",
    rating: 5
  },
  {
    id: 2,
    name: "Charcoal Gray",
    price: "55",
    rating: 4.5
  },
  {
    id: 3,
    name: "White Dinner",
    price: "75",
    rating: 4.9
  },
  {
    id: 4,
    name: "Ivory Tuxedo",
    price: "55",
    rating: 4
  },
  {
    id: 5,
    name: "Slim Fit",
    price: "55",
    rating: 3.8
  },
  {
    id: 6,
    name: "Tailored Fit",
    price: "55",
    rating: 4.5
  },
  {
    id: 7,
    name: "Vintage Style",
    price: "55",
    rating: 5
  },
];

export const teamData = [
  {
    id: 0,
    name: "Alice Johson",
    role: "Product Manager",
    text: "Passionate about creating seamless experiences for our users.",
    img: Alice,
  },
  {
    id: 1,
    name: "Mark Smith",
    role: "Lead Developer ",
    text: "Crafting innovative solutions to enhance our app`s functionality.",
    img: Mark,
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "Marketing Director",
    text: "Connecting with our audience to share our vision.",
    img: Sarah,
  },
  {
    id: 3,
    name: "James Brown",
    role: "UX Designer",
    text: "Designing intuitive interfaces that enhance user engagement.",
    img: James,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Data Analyst",
    text: "Analyzing trends to improve our service offerings.",
    img: Emily,
  },
  {
    id: 5,
    name: "Michael Wilson",
    role: "Customer Support",
    text: "Ensuring our users receive the best possible assistance.",
    img: Michael,
  },
];

export const navItems: {
  name: string;
  href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Rent a Tux",
    href: "/rent-tux",
  },
  {
    name: "Designer Bags",
    href: "/designer-bags",
  },
  {
    name: "Book a Ride",
    href: "/book-a-ride",
  },
];

export const FAQData = [
  {
    id: 0,
    question: "How does renting work?",
    answer:
      "Renting is simple! Just choose your desired tuxedo or designer bag from our collection, select the rental period, and complete the checkout process. Your items will be delivered to your door or ready for pickup.",
  },
  {
    id: 1,
    question: "What is the return policy?",
    answer:
      "We offer a hassle-free return policy. You can return your rented items within 3 days after your event. Late returns may incur additional fees.",
  },
  {
    id: 2,
    question: "Can i book a ride?",
    answer:
      "Yes, you can easily book a ride through our app. Just enter your pickup location and destination, and choose your preferred vehicle type. We’ll ensure you arrive at your event on time.",
  },
  {
    id: 3,
    question: "Are there any fees?",
    answer:
      "Rental fees vary based on the item and duration. Additionally, ride bookings may include service fees depending on the distance. Always check the app for a detailed breakdown of costs.",
  },
  {
    id: 4,
    question: "How do i contact support?",
    answer:
      "You can reach our support team through the app or via email. We’re available 24/7 to assist you with any inquiries. Your satisfaction is our priority!",
  },
];

export const steps = [
  {
    id: 0,
    title: "First Launch",
    text: "Launched our app, making luxury rentals accessible for everyone.",
    icon: launch,
  },
  {
    id: 1,
    title: "Partnership Growth",
    text: "Established partnerships with top designers and brands to expand our offerings.",
    icon: partnership,
  },
  {
    id: 2,
    title: "User Milestone",
    text: "Reached 10,000 active users, transforming how people prepare for events.",
    icon: milestone,
  },
  {
    id: 3,
    title: "Service Expansion",
    text: "Introduced ride-booking feature, ensuring seamless event experiences for our customers.",
    icon: expansion,
  },
];
