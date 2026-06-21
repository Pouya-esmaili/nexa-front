import NexaLoader from "@/components/global/NexaLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d0d0f]/80 backdrop-blur-sm">
      <NexaLoader size={80} />
    </div>
  );
}
