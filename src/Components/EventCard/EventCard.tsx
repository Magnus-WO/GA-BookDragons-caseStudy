import { type Event } from "@/types/event.type";
import Stack from "../Stack/Stack";
import Heading from "../Heading/Heading";

export type EventCardProps = {
  event: Event;
  as: "section" | "li";
};

export default function EventCard({ event, as }: EventCardProps) {
  const Element = as;
  return (
    <Element className="future-event">
      <div
        className="calendar-icon"
        aria-label={`${event.date.getDate()}. ${event.date.getMonth()}`}
      >
        <span className="calendar-icon-month">{event.date.getMonth()}</span>
        <span className="calendar-icon-day">{event.date.getDate()}</span>
      </div>
      <Stack as="div" variant="stack-small">
        <Heading as="h3" className="eyebrow-heading">
          {event.name}
        </Heading>
        <p>{event.description}</p>
      </Stack>
    </Element>
  );
}
