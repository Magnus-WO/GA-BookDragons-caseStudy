import { type Events } from "@/types/event.type";

export const eventsTestArray: Events = [
  {
    id: 10001,
    name: "Foredrag av Frode Øverli",
    description:
      "Kongen av norske tegneserier kommer for å snakke om Pnodus, karrieren som tegner og naturligvis fotball!",
    date: new Date(),
    timeBeginning: "1800",
    timeEnd: "2000",
    price: 200,
  },
  {
    id: 10002,
    name: "Lesesirkel med Øystein Sunde",
    description:
      "Kan man fremdeles lese bøker når man har rundet 80 år? Selvfølgelig kan man det!",
    date: new Date(),
    timeBeginning: "1600",
    timeEnd: "1730",
    price: 100,
  },
  {
    id: 10003,
    name: "Førjulskos med Wenche Myhre",
    description:
      "Selveste Wenche Myhre kommer for å lese sin favoirtt-julefortelling, og selvfølgelig for å drikke gløgg og spise pepperkaker med oss!",
    date: new Date(),
    timeBeginning: "1800",
    timeEnd: "2000",
    price: 200,
  },
];
