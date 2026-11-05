import SiteHeader from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Section from "@/Components/Section/Section";
import Stack from "@/Components/Stack/Stack";
import Heading from "@/Components/Heading/Heading";
import Grid from "@/Components/Grid/Grid";
import StaffPick from "@/Components/StaffPick/StaffPick";
import BookCard from "@/Components/BookCard/BookCard";
import PersonCard from "@/Components/PersonCard/PersonCard";

import { type Book } from "@/types/bookType.types";
import { type Employee } from "@/types/employeeType.types";
import { type Event } from "@/types/event.type";

import { testBook } from "@/ts/booksTestArray";
import { booksTestArray } from "@/ts/booksTestArray";
import { employeeTestArray } from "../../ts/employeesTest";
import { eventsTestArray } from "@/ts/eventsTestArray";
import EventCard from "@/Components/EventCard/EventCard";

export default async function IndexPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <Section variant="yellow">
          <Grid columns="one-plus-two-columns" gap="large">
            <div>
              <img
                src="https://images.unsplash.com/photo-1774070231417-4bf4d2025878?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt=""
              />
            </div>{" "}
            <Stack as="div">
              <Heading as="h1">Velkommen til BookDragons</Heading>
              <p>
                Vår lille bokhandel holder til i Lillestrøm, og vi spesialiserer
                oss på bøker innen mange forskjellige science fiction-sjangre!
                Kom innom oss for gode tilbud, arrangementer og foredrag med
                forfattere, eller bare for å ta en kopp kaffe som vår hyggelige
                barista lager til deg.
              </p>

              <a className="button m-bs-xl" href="#">
                Se våre kommende arrangementer
              </a>
            </Stack>
          </Grid>
        </Section>

        <Stack as="section" variant="stack-large" marginType="m-b-xl">
          <Heading as="h2">Nyheter i butikken</Heading>
          <div className="reel">
            {booksTestArray.map((book: Book) => (
              <BookCard
                key={book.id}
                boxBackgroundVariant="box-light-gray"
                bookCoverHeight={200}
                bookCoverWidth={160}
                book={book}
                bookBuyLink={book.link}
              />
            ))}
          </div>
        </Stack>

        <Stack variant="stack-large" as="section" marginType="m-b-xl">
          <Heading as="h2" className="section-heading">
            Hva de ansatte leser akkurat nå
          </Heading>
          <article className="section section-yellow">
            <StaffPick
              productPosition="product-on-right"
              staffPickHeaderText="Wenche har nettopp lest Wallace the Brave for første gang!"
              staffPickBook={testBook}
            />

            <StaffPick
              productPosition="product-on-left"
              staffPickHeaderText="Månedens lydbok for Christian er skrevet av Adam Kay"
              staffPickBook={testBook}
            />
          </article>
        </Stack>

        <section className="m-b-xl stack stack-large">
          <h2 className="section-heading">#BookTok</h2>
          <div className="reel">
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1784200720/Produktbilder/SDBooks/9781335534637.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Heated Rivalry</a>
                </h3>

                <p className="book-card-author">Skrevet av Rachel Reid</p>

                <p className="book-card-tags cluster">
                  <span className="tag">#BookTok</span>
                  <span className="tag">Pocket</span>
                  <span className="tag">Engelsk</span>
                  <span className="tag">Roman</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (199,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1759697111/Produktbilder/SDB/Book/SD%20Books/9781398535763.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Fearful</a>
                </h3>

                <p className="book-card-author">Skrevet av Lauren Roberts</p>

                <p className="book-card-tags cluster">
                  <span className="tag">#BookTok</span>
                  <span className="tag">Pocket</span>
                  <span className="tag">Engelsk</span>
                  <span className="tag">Ungdom</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (199,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1782104419/Produktbilder/SDBooks/9781035435913.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Rook & Rebel</a>
                </h3>

                <p className="book-card-author">Skrevet av Kate Crew</p>

                <p className="book-card-tags cluster">
                  <span className="tag">#BookTok</span>
                  <span className="tag">Pocket</span>
                  <span className="tag">Engelsk</span>
                  <span className="tag">Krim</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (229,-)
              </a>
            </article>
          </div>
        </section>

        <section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Lagertømming!</h2>
          <div className="reel">
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1790262056/Produktbilder/Bokbasen/9788269341546.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Lysløypa — Oslo 2027</a>
                </h3>

                <p className="book-card-author">
                  Skrevet av Christina Skreiberg, Ida Frisch, og Nora K. Sæter
                </p>

                <p className="book-card-tags cluster">
                  <span className="tag">Reise</span>
                  <span className="tag">Kulturguide</span>
                  <span className="tag">Mat og drikke</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (299,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1776243655/Produktbilder/Bokbasen/9788205624948.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Oppstandelsen</a>
                </h3>

                <p className="book-card-author">Skrevet av Alfred Fidjestøl</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Fotball</span>
                  <span className="tag">Landslaget</span>
                  <span className="tag">Dokumentar</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (449,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1789376450/Produktbilder/Bokbasen/9788202909819.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Strikk stort</a>
                </h3>

                <p className="book-card-author">Skrevet av Nina Birkeland</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Strikking</span>
                  <span className="tag">Hobby</span>
                  <span className="tag">Håndarbeid</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (329,-)
              </a>
            </article>
          </div>
        </section>

        <Stack as="section" marginType="m-b-xl" variant="stack-large">
          <Heading as="h2">Våre ansatte</Heading>
          <article className="section section-green">
            <div className="container grid three-columns">
              {employeeTestArray.map((employee: Employee) => (
                <PersonCard as="div" employee={employee} key={employee.id} />
              ))}
            </div>
          </article>
        </Stack>

        <section className="m-b-xl stack stack-large">
          <div className="container grid two-plus-one-columns">
            <article className="stack">
              <h2 className="section-heading">
                Hva skjer på BookDragons i høst?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1543393470-b2c833b98dce?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt=""
                width="1920"
                height="1440"
              />
              <p>
                Høsten er her, og hva passer da bedre enn å krype sammen under
                pleddet med en god bok? Jo, å være med på et arrangement hos
                BookDragons sammen med mange andre som liker å gjøre det samme!
                Vi garanterer koselig stemning, fyr i peisen, varme drikker og
                mange spennende foredragsholdere!
              </p>
              <p>
                Ønsker din bedrift å holde et arrangement hos oss? Vi tilbyr
                utleie av lokaler tilpasset dine behov, og kan bistå med
                servering, rigging og rydding til en fornuftig pris. Ta kontakt
                med oss i dag for en hyggelig og uforpliktende prat!
              </p>
              <a href="#" className="button">
                Send oss en mail
              </a>
            </article>
            <aside className="stack">
              <h2 className="section-subheading">Kommende arrangementer</h2>
              <ul className="future-events-list">
                {eventsTestArray.map((event) => (
                  <EventCard event={event} as="li" key={event.id} />
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
