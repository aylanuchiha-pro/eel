interface Photo {
  src: string;
  alt: string;
  rotate?: number;        // degrés : 90, -90, 180…
  position?: string;      // ex: "center top", "center bottom", "left center"
  scale?: number;         // zoom : 1 = normal, 1.5 = +50%, 2 = x2
}

const PhotoBand = ({ photos }: { photos: Photo[] }) => {
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
              style={{
                objectPosition: photo.position ?? "center",
                transform: [
                  photo.rotate ? `rotate(${photo.rotate}deg)` : "",
                  photo.scale ? `scale(${photo.scale})` : "",
                ].filter(Boolean).join(" ") || undefined,
              }}
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
