const PhotoBand = ({ photos }: { photos: { src: string; alt: string }[] }) => {
  const doubled = [...photos, ...photos];

  return (
    <div className="overflow-hidden py-4 bg-background">
      <div
        className="flex gap-4"
        style={{
          animation: "photoBandScroll 30s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((photo, i) => (
          <div
            key={i}
            className="h-52 w-80 shrink-0 rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes photoBandScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default PhotoBand;
