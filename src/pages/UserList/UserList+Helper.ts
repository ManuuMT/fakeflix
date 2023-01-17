import Profile1 from "../../assets/profile-icons/profile-12.png";
import Profile2 from "../../assets/profile-icons/profile-11.png";
import Profile3 from "../../assets/profile-icons/profile-07.png";

type IconDTO = {
  src: string;
  alt: string;
};

export interface Profile {
  id: number;
  name: string;
  icon: IconDTO;
}

export const InitialProfileList: Profile[] = [
  {
    id: 1,
    name: "ManuDev",
    icon: {
      src: Profile1,
      alt: "Profile1",
    },
  },
  {
    id: 2,
    name: "Some friend",
    icon: {
      src: Profile2,
      alt: "Profile2",
    },
  },
  {
    id: 3,
    name: "Kids",
    icon: {
      src: Profile3,
      alt: "Profile3",
    },
  },
];
