import { IFigure } from "../models/IFigures";
import builder from "../assets/img/builder.png";
import chef from "../assets/img/chef.png";
import ladyDoctor from "../assets/img/doctor-lady.png";
import doctor from "../assets/img/doctor.png";
import mail from "../assets/img/mail-man.png";
import police from "../assets/img/policewoman-35998_1280.png";
import simple from "../assets/img/simple.png";
import waiter from "../assets/img/waiter-36570_1280.png";

export const figureData: IFigure[] = [
  {
    img: builder,
    name: "Builder Bob",
    description:
      "Lego builder extraordinaire! Can turn any pile of bricks into a masterpiece.",
    rating: 4,
    id: 1,
  },
  {
    img: chef,
    name: "Chef Carlito",
    description:
      "Master of the Lego kitchen. Known for baking the world's tiniest cakes!",
    rating: 3,
    id: 2,
  },
  {
    img: ladyDoctor,
    name: "Dr. Lily",
    description:
      "Always ready to patch up a Lego arm or fix a brick mishap with a smile.",
    rating: 5,
    id: 3,
  },
  {
    img: doctor,
    name: "Dr. Max",
    description:
      "No ailment too small, no Lego patient too wobbly. Doctor Max to the rescue!",
    rating: 4,
    id: 4,
  },
  {
    img: mail,
    name: "Mailman Mike",
    description:
      "Delivering letters and packages rain or shine, one Lego street at a time.",
    rating: 4,
    id: 5,
  },
  {
    img: police,
    name: "Officer Olivia",
    description:
      "Keeping the Lego city safe, catching criminals and rescuing kittens from trees.",
    rating: 5,
    id: 6,
  },
  {
    img: simple,
    name: "Everyday Eddie",
    description:
      "The classic Lego figure, ready for any story, adventure, or coffee break.",
    rating: 3,
    id: 7,
  },
  {
    img: waiter,
    name: "Waiter Willy",
    description:
      "Serving Lego meals with a smile and occasionally juggling plates for fun.",
    rating: 4,
    id: 8,
  },
];
