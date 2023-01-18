type IconDTO = {
  src: string;
  alt: string;
};

export interface Profile {
  id: number;
  name: string;
  icon: IconDTO;
}
