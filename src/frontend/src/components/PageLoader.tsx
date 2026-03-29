import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 500);
    const t2 = setTimeout(() => setRemoved(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`page-loader${hidden ? " hidden" : ""}`}>
      <div className="flex flex-col items-center gap-4">
        <span className="text-3xl font-bold tracking-tight">
          <span style={{ color: "#FF3B3B" }}>R.</span>
          <span className="text-white"> Ranjit</span>
        </span>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  );
}
