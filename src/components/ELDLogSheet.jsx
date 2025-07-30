const ROW_LABELS = ["Off Duty", "Sleeper", "Driving", "On Duty"];
const HEIGHT = 300;
const WIDTH = 800;
const HOURS = 24;

export default function ELDLogSheet({ logs }) {
  if (!logs || logs.length === 0) return null;

  const rowHeight = HEIGHT / 4;
  const hourWidth = WIDTH / HOURS;

  return (
    <div className="p-4 bg-white rounded shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">ELD Log Sheets</h2>
      {logs.map((day, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold mb-1">Day {day.day_number} - {day.date}</h3>
          <svg width={WIDTH} height={HEIGHT} className="border border-gray-300">
            {/* Horizontal grid lines & labels */}
            {ROW_LABELS.map((label, i) => (
              <g key={i}>
                <line
                  x1={0}
                  y1={i * rowHeight + rowHeight / 2}
                  x2={WIDTH}
                  y2={i * rowHeight + rowHeight / 2}
                  stroke="#ccc"
                />
                <text
                  x={5}
                  y={i * rowHeight + rowHeight / 2 - 5}
                  fontSize={12}
                  fill="#333"
                >
                  {label}
                </text>
              </g>
            ))}
            {/* Vertical hour lines */}
            {Array.from({ length: HOURS + 1 }).map((_, h) => (
              <g key={h}>
                <line
                  x1={h * hourWidth}
                  y1={0}
                  x2={h * hourWidth}
                  y2={HEIGHT}
                  stroke="#eee"
                />
                <text
                  x={h * hourWidth + 2}
                  y={12}
                  fontSize={10}
                  fill="#999"
                >
                  {h}
                </text>
              </g>
            ))}
            {/* Draw logs as horizontal bars */}
            {day.log_entries.map((entry, i) => {
              const y = entry.y_position * rowHeight + rowHeight / 2;
              const x1 = entry.start * hourWidth;
              const x2 = entry.end * hourWidth;

              // Draw vertical connector at the start (except for the first entry)
              if (i > 0) {
                const prev = day.log_entries[i - 1];
                const prevY = prev.y_position * rowHeight + rowHeight / 2;
                const connectorX = x1;
                return (
                  <g key={i}>
                    {/* Vertical connector */}
                    <line
                      x1={connectorX}
                      y1={prevY}
                      x2={connectorX}
                      y2={y}
                      stroke="#1f2937"
                      strokeWidth={2}
                    />
                    {/* Horizontal bar */}
                    <line
                      x1={x1}
                      y1={y}
                      x2={x2}
                      y2={y}
                      stroke="#1f2937"
                      strokeWidth={3}
                    />
                  </g>
                );
              }
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  stroke="#1f2937"
                  strokeWidth={3}
                />
              );
            })}
          </svg>
        </div>
      ))}
    </div>
  );
}
