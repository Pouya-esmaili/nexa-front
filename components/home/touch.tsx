import Row from "../global/Row";

export default function GetInTouch() {
  return (
    <Row>
      <section className="w-full flex justify-center py-24 bg-white">
        <div
          className="w-[60rem] bg-white rounded-3xl px-10 py-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>

          <p className="text-black text-lg mx-auto mb-8">
            Your journey matters. Reach out, share your story, or ask a
            question—we’re ready to listen and guide you every step of the way.
          </p>

          <button
            className="items-center justify-center gap-2 w-60 bg-[#8F27FF] hover:bg-[#7b1fe0] text-white font-medium px-8 py-3 rounded-3xl">
            Contact Us →
          </button>
        </div>
      </section>
    </Row>
  );
}