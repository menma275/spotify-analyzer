"use client";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Welcome from "./Welcome";
import ShowRecentlyPlayed from "./ShowRecentlyPlayed";
import ShowTopTracks from "./ShowTopTracks";
import ShowTopArtists from "./ShowTopArtists";
import Wrapper from "./Wrapper";
import Container from "./Container";
import useHasCookie from "../hooks/useHasCookie";

export default function MainSection() {
  const { hasCookie } = useHasCookie();

  return (
    <div className="h-full">
      <AnimatePresence>
        {hasCookie ? (
          <motion.div
            className="flex flex-col"
            key={hasCookie}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5, delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            <Container>
              <Header />
            </Container>
            <Container className="relative">
              <div className="scrollbar-hidden overflow-x-auto flex flex-row gap-4">
                <div className="min-w-[90%] md:min-w-[60%] lg:min-w-[45%]">
                  <Wrapper>
                    <ShowTopTracks />
                  </Wrapper>
                </div>
                <div className="min-w-[90%] md:min-w-[60%] lg:min-w-[45%]">
                  <Wrapper>
                    <ShowTopArtists />
                  </Wrapper>
                </div>
                <div className="min-w-[90%] md:min-w-[60%] lg:min-w-[45%]">
                  <Wrapper>
                    <ShowRecentlyPlayed />
                  </Wrapper>
                </div>
              </div>
              {/* <button className="absolute z-10 bottom-0 left-0 w-full pt-9 pb-3 text-sm font-bold text-[var(--accent)] bg-gradient-to-b from-transparent to-70% to-[var(--bg)] "> */}
              {/*   Show more */}
              {/* </button> */}
            </Container>
          </motion.div>
        ) : (
          <Welcome />
        )}
      </AnimatePresence>
    </div>
  );
}
