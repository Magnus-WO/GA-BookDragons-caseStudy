export type Event = {
  id: number;
  name: string;
  description: string;
  date: Date;
  timeBeginning: string;
  timeEnd: string;
  price: number;
  image?: string;
  imageAlt?: string;
};

export type Events = Event[];
