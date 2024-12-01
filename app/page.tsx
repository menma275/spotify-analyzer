import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Container from "./components/Container";

export default async function Home() {
  return (
    <div className="w-full flex flex-col p-4 min-h-dvh">
      <MainSection />
      <Container>
        <Footer />
      </Container>
    </div>
  );
}
