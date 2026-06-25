"use client";
import React, { useState, useMemo } from "react";

const BLOCS = {
  A: {
    label: "Bloc A",
    apartments: [
      { id: "A01", floor: "RDC", type: "S+3 avec 1 Suite", surface: 227.6, commonArea: 25.3, terrace: 1.7, page: 2 },
      { id: "A02", floor: "RDC", type: "S+3 avec 1 Suite", surface: 217.5, commonArea: 24.2, terrace: 1.6, page: 3 },
      { id: "A11", floor: "1er étage", type: "S+2 avec 2 Suites", surface: 139.4, commonArea: 15.5, terrace: 1.3, page: 4 },
      { id: "A12", floor: "1er étage", type: "S+2 avec 2 Suites", surface: 139.3, commonArea: 15.5, terrace: 1.3, page: 5 },
      { id: "A13", floor: "1er étage", type: "S+3 avec 1 Suite", surface: 166.4, commonArea: 18.5, terrace: 2, page: 6 },
      { id: "A14", floor: "1er étage", type: "S+1", surface: 106.8, commonArea: 11.9, terrace: 10.1, page: 7 },
      { id: "A21", floor: "2ème étage", type: "S+2 avec 2 Suites", surface: 145.4, commonArea: 16.2, terrace: 6.6, page: 8 },
      { id: "A22", floor: "2ème étage", type: "S+2 avec 2 Suites", surface: 145.9, commonArea: 16.2, terrace: 7.1, page: 9 },
      { id: "A23", floor: "2ème étage", type: "S+3 avec 1 Suite", surface: 167.5, commonArea: 18.6, terrace: 2.9, page: 10 },
      { id: "A24", floor: "2ème étage", type: "S+1", surface: 88.4, commonArea: 9.8, terrace: null, page: 11 },
      { id: "A31", floor: "3ème étage", type: "S+2 avec 2 Suites", surface: 139.4, commonArea: 15.5, terrace: 1.3, page: 12 },
      { id: "A32", floor: "3ème étage", type: "S+2 avec 2 Suites", surface: 139.3, commonArea: 15.5, terrace: 1.3, page: 13 },
      { id: "A33", floor: "3ème étage", type: "S+3 avec 1 Suite", surface: 166.5, commonArea: 18.5, terrace: 2, page: 14 },
      { id: "A34", floor: "3ème étage", type: "S+1", surface: 99.7, commonArea: 11.1, terrace: 10.1, page: 15 },
      { id: "A41", floor: "4ème étage", type: "S+2 avec 2 Suites", surface: 145.4, commonArea: 16.2, terrace: 6.6, page: 16 },
      { id: "A42", floor: "4ème étage", type: "S+2 avec 2 Suites", surface: 145.9, commonArea: 16.2, terrace: 7.1, page: 17 },
      { id: "A43", floor: "4ème étage", type: "S+3 avec 1 Suite", surface: 167.5, commonArea: 18.6, terrace: 2.9, page: 18 },
      { id: "A44", floor: "4ème étage", type: "S+1", surface: 88.4, commonArea: 9.8, terrace: null, page: 19 },
      { id: "A51", floor: "5ème étage", type: "S+2 avec 2 Suites", surface: 139.4, commonArea: 15.5, terrace: 1.3, page: 20 },
      { id: "A52", floor: "5ème étage", type: "S+2 avec 2 Suites", surface: 139.3, commonArea: 15.5, terrace: 1.3, page: 21 },
      { id: "A53", floor: "5ème étage", type: "S+3 avec 1 Suite", surface: 166.4, commonArea: 18.5, terrace: 2, page: 22 },
      { id: "A54", floor: "5ème étage", type: "S+1", surface: 99.7, commonArea: 11.1, terrace: 10.1, page: 23 },
      { id: "A61", floor: "6ème étage", type: "S+2 avec 2 Suites", surface: 145.4, commonArea: 16.2, terrace: 6.6, page: 24 },
      { id: "A62", floor: "6ème étage", type: "S+2 avec 2 Suites", surface: 145.9, commonArea: 16.2, terrace: 7.1, page: 25 },
      { id: "A63", floor: "6ème étage", type: "S+3 avec 1 Suite", surface: 167.5, commonArea: 18.6, terrace: 2.9, page: 26 },
      { id: "A64", floor: "6ème étage", type: "S+1", surface: 88.4, commonArea: 9.8, terrace: null, page: 27 },
    ],
  },
  B: {
    label: "Bloc B",
    apartments: [
      { id: "B01", floor: "RDC", type: "S+3 avec 1 Suite", surface: 200.7, commonArea: 22.3, terrace: 1.4, page: 2 },
      { id: "B02", floor: "RDC", type: "S+4 avec 1 Suite", surface: 245.3, commonArea: 27.3, terrace: 3, page: 3 },
      { id: "B11", floor: "1er étage", type: "S+2 avec 1 Suite", surface: 151.1, commonArea: 16.8, terrace: 2.1, page: 4 },
      { id: "B12", floor: "1er étage", type: "S+2 avec 2 Suites", surface: 160, commonArea: 17.8, terrace: 1, page: 5 },
      { id: "B21", floor: "2ème étage", type: "S+2 avec 1 Suite", surface: 166.1, commonArea: 18.5, terrace: 15.5, page: 6 },
      { id: "B22", floor: "2ème étage", type: "S+2 avec 1 Suite", surface: 172.4, commonArea: 19.2, terrace: 12, page: 7 },
      { id: "B31", floor: "3ème étage", type: "S+2 avec 1 Suite", surface: 151.1, commonArea: 16.8, terrace: 2.1, page: 8 },
      { id: "B32", floor: "3ème étage", type: "S+2 avec 1 Suite", surface: 160.1, commonArea: 17.8, terrace: 4.6, page: 9 },
      { id: "B41", floor: "4ème étage", type: "S+2 avec 1 Suite", surface: 166.1, commonArea: 18.5, terrace: 15.5, page: 10 },
      { id: "B42", floor: "4ème étage", type: "S+2", surface: 164.6, commonArea: 18.3, terrace: 32.1, page: 11 },
      { id: "B51", floor: "5ème étage", type: "S+2 avec 1 Suite", surface: 151.1, commonArea: 16.8, terrace: 2.1, page: 12 },
      { id: "B52", floor: "5ème étage", type: "S+2", surface: 128.7, commonArea: 14.3, terrace: 18.6, page: 13 },
      { id: "B61", floor: "6ème étage", type: "S+2 avec 1 Suite", surface: 166.1, commonArea: 18.5, terrace: 15.5, page: 14 },
      { id: "B62", floor: "6ème étage", type: "S+2", surface: 119.5, commonArea: 13.3, terrace: 23.2, page: 15 },
    ],
  },
  C: {
    label: "Bloc C",
    apartments: [
      { id: "C01", floor: "RDC", type: "S+2 avec 2 Suites", surface: 173, commonArea: 19.2, terrace: null, page: 2 },
      { id: "C02", floor: "RDC", type: "S+3 avec 1 Suite", surface: 274.7, commonArea: 30.5, terrace: 66.9, page: 3 },
      { id: "C11", floor: "1er étage", type: "S+3 avec 1 Suite", surface: 182.6, commonArea: 20.3, terrace: 7.3, page: 4 },
      { id: "C12", floor: "1er étage", type: "S+3 avec 1 Suite", surface: 188, commonArea: 20.9, terrace: 2.1, page: 5 },
      { id: "C21", floor: "2ème étage", type: "S+3 avec 1 Suite", surface: 181.9, commonArea: 20.2, terrace: 5.8, page: 6 },
      { id: "C22", floor: "2ème étage", type: "S+3 avec 1 Suite", surface: 195.5, commonArea: 21.7, terrace: 8.7, page: 7 },
      { id: "C31", floor: "3ème étage", type: "S+3 avec 1 Suite", surface: 182.6, commonArea: 20.3, terrace: 8.9, page: 8 },
      { id: "C32", floor: "3ème étage", type: "S+3 avec 1 Suite", surface: 188.1, commonArea: 20.9, terrace: 4.6, page: 9 },
      { id: "C41", floor: "4ème étage", type: "S+3 avec 1 Suite", surface: 178.9, commonArea: 19.9, terrace: 6.3, page: 10 },
      { id: "C42", floor: "4ème étage", type: "S+2 avec 1 Suite", surface: 183.4, commonArea: 20.4, terrace: 43.5, page: 11 },
      { id: "C51", floor: "5ème étage", type: "S+2 avec 2 Suites", surface: 172.6, commonArea: 19.2, terrace: 11.7, page: 12 },
      { id: "C52", floor: "5ème étage", type: "S+2", surface: 134.4, commonArea: 14.9, terrace: 33.8, page: 13 },
      { id: "C61", floor: "6ème étage", type: "S+3 avec 1 Suite", surface: 277.5, commonArea: 30.8, terrace: 54.8, page: 14 },
    ],
  },
};

const PDF_FILES = {
  A: "Plans de vente - Bloc A - 25 02 2026.pdf",
  B: "Plans de vente - Bloc B - 25 02 2026.pdf",
  C: "Plans de vente - Bloc C - 25 02 2026.pdf",
};

const TYPE_BADGE = {
  "S+1":               { bg: "#EAF3DE", text: "#3B6D11", label: "S+1" },
  "S+2":               { bg: "#E1F5EE", text: "#0F6E56", label: "S+2" },
  "S+2 avec 1 Suite":  { bg: "#E1F5EE", text: "#0F6E56", label: "S+2 + Suite" },
  "S+2 avec 2 Suites": { bg: "#E6F1FB", text: "#185FA5", label: "S+2 + 2 Suites" },
  "S+3 avec 1 Suite":  { bg: "#EEEDFE", text: "#534AB7", label: "S+3 + Suite" },
  "S+4 avec 1 Suite":  { bg: "#FBEAF0", text: "#993556", label: "S+4 + Suite" },
};

const BLOC_COLORS = {
  A: { accent: "#534AB7", light: "#EEEDFE", border: "#AFA9EC" },
  B: { accent: "#0F6E56", light: "#E1F5EE", border: "#5DCAA5" },
  C: { accent: "#993C1D", light: "#FAECE7", border: "#F0997B" },
};

const FLOOR_ORDER = [
  "RDC", "1er étage", "2ème étage", "3ème étage",
  "4ème étage", "5ème étage", "6ème étage",
];

function TypeBadge({ type }) {
  const badge = TYPE_BADGE[type] || { bg: "#F1EFE8", text: "#5F5E5A", label: type };
  return (
    <span 
      className="inline-block text-[11px] font-medium px-2 py-[3px] rounded-md whitespace-nowrap"
      style={{ background: badge.bg, color: badge.text }}
    >
      {badge.label}
    </span>
  );
}

function PlanModal({ apt, bloc, onClose }) {
  const filename = PDF_FILES[bloc];
  const encodedName = encodeURIComponent(filename);
  const pdfUrl = `/${encodedName}#page=${apt.page}`;
  const colors = BLOC_COLORS[bloc];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl border border-gray-200 w-full max-w-6xl h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between p-[14px_20px] border-b border-gray-200 gap-3 flex-wrap flex-shrink-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span 
              className="font-medium text-[15px] px-[14px] py-1 rounded-lg"
              style={{ background: colors.light, color: colors.accent }}
            >
              {apt.id}
            </span>
            <span className="text-gray-600 text-[13px]">
              {apt.floor}
            </span>
            <TypeBadge type={apt.type} />
            <span className="text-gray-600 text-[13px]">
              {apt.surface} m² habitable
            </span>
            {apt.terrace != null && (
              <span className="text-gray-600 text-[13px]">
                · terrasse {apt.terrace} m²
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="bg-none border border-gray-300 rounded-lg px-[14px] py-[5px] cursor-pointer text-gray-600 text-[13px] hover:bg-gray-50 transition-colors"
          >
            Fermer ✕
          </button>
        </div>

        {/* PDF iframe — fills remaining height */}
        <div className="flex-1 relative overflow-hidden">
          <iframe
            src={pdfUrl}
            title={`Plan appartement ${apt.id}`}
            className="w-full h-full border-none block"
          />
          <div className="absolute bottom-[14px] right-[14px] bg-white border border-gray-200 rounded-lg px-3 py-[5px] text-[11px] text-gray-600 pointer-events-none">
            {filename.replace(".pdf", "")} · page {apt.page}
          </div>
        </div>
      </div>
    </div>
  );
}

function ApartmentRow({ apt, colors, onView }) {
  return (
    <tr
      className="border-b border-black/5 transition-colors duration-150 bg-[#FAFAFA] hover:bg-[#F0F0F7]"
    >
      <td className="p-[10px_14px]">
        <span 
          className="font-semibold text-[13px] px-[10px] py-[3px] rounded-md inline-block tracking-[0.02em]"
          style={{ color: colors.accent, background: colors.light }}
        >
          {apt.id}
        </span>
      </td>
      <td className="p-[10px_14px] text-[13px] text-gray-600">
        {apt.floor}
      </td>
      <td className="p-[10px_14px]">
        <TypeBadge type={apt.type} />
      </td>
      <td className="p-[10px_14px] text-[13px] font-semibold text-gray-900">
        {apt.surface} m²
      </td>
      <td className="p-[10px_14px] text-[13px] text-gray-600">
        {apt.commonArea} m²
      </td>
      <td className="p-[10px_14px] text-[13px] text-gray-600">
        {apt.terrace != null ? `${apt.terrace} m²` : "—"}
      </td>
      <td className="p-[10px_14px]">
        <button
          onClick={() => onView(apt)}
          className="bg-none rounded-lg px-[14px] py-[5px] cursor-pointer text-[12px] font-semibold whitespace-nowrap transition-colors duration-150"
          style={{ 
            border: `1px solid ${colors.border}`,
            color: colors.accent
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = colors.accent;
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "none";
            e.currentTarget.style.color = colors.accent;
          }}
        >
          Voir plan →
        </button>
      </td>
    </tr>
  );
}

function BlocTable({ blocKey, apartments, filterType, filterFloor, onView }) {
  const colors = BLOC_COLORS[blocKey];

  const filtered = apartments.filter((a) =>
    (!filterType || a.type === filterType) && (!filterFloor || a.floor === filterFloor)
  );

  const byFloor = FLOOR_ORDER.reduce((acc, floor) => {
    const rows = filtered.filter((a) => a.floor === floor);
    if (rows.length) acc.push({ floor, rows });
    return acc;
  }, []);

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600 text-[14px]">
        Aucun appartement ne correspond aux filtres sélectionnés.
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E5EA] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] overflow-x-auto [-webkit-overflow-scrolling:touch]">
      <table className="w-full border-collapse table-fixed min-w-[650px]">
        <colgroup>
          <col style={{ width: "9%" }} />
          <col style={{ width: "16%" }} />
          <col style={{ width: "21%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "14%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "16%" }} />
        </colgroup>
        <thead>
          <tr className="bg-[#F7F7FA] border-b border-[#E5E5EA]">
            {["Réf.", "Étage", "Type", "Surface", "Parties communes", "Terrasse", "Plan"].map((h) => (
              <th key={h} className="p-[9px_14px] text-left text-[11px] font-semibold text-[#6B6B78] tracking-[0.05em] uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {byFloor.map(({ floor, rows }) => (
            <React.Fragment key={floor}>
              {!filterFloor && (
                <tr className="bg-[#F7F7FA]">
                  <td 
                    colSpan={7} 
                    className="p-[6px_14px] text-[11px] font-semibold border-t border-[#E5E5EA] border-b border-[#E5E5EA] tracking-[0.04em]"
                    style={{ color: colors.accent }}
                  >
                    {floor}
                  </td>
                </tr>
              )}
              {rows.map((apt) => (
                <ApartmentRow key={apt.id} apt={apt} colors={colors} onView={onView} />
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ApartmentTable() {
  const [activeBloc, setActiveBloc] = useState(null);
  const [filterType, setFilterType] = useState("");
  const [filterFloor, setFilterFloor] = useState("");
  const [viewing, setViewing] = useState(null);

  const currentBloc = activeBloc ? BLOCS[activeBloc] : null;
  const colors = activeBloc ? BLOC_COLORS[activeBloc] : null;

  const availableTypes = useMemo(() => {
    if (!currentBloc) return [];
    return [...new Set(currentBloc.apartments.map((a) => a.type))].sort();
  }, [currentBloc]);

  const availableFloors = useMemo(() => {
    if (!currentBloc) return [];
    const present = new Set(currentBloc.apartments.map((a) => a.floor));
    return FLOOR_ORDER.filter((f) => present.has(f));
  }, [currentBloc]);

  const visibleCount = useMemo(() => {
    if (!currentBloc) return 0;
    return currentBloc.apartments.filter(
      (a) => (!filterType || a.type === filterType) && (!filterFloor || a.floor === filterFloor)
    ).length;
  }, [currentBloc, filterType, filterFloor]);

  const switchBloc = (key) => {
    setActiveBloc(key);
    setFilterType("");
    setFilterFloor("");
  };

  return (
    <div className="font-sans max-w-[980px] mx-auto p-[24px_16px] overflow-x-hidden">
      <h2 className="sr-only">Table des appartements — Immeuble The Rock Radhia IV</h2>

      <div className="mb-7">
        <p className="text-[11px] font-medium text-gray-600 tracking-[0.08em] uppercase m-0 mb-1">
          Immeuble The Rock — Radhia IV
        </p>
        <h1 className="text-[22px] font-medium text-gray-900 m-0 mb-0.5">
          Plans de vente
        </h1>
        <p className="text-[14px] text-gray-600 m-0">
          Sélectionnez un bloc pour consulter les appartements disponibles.
        </p>
      </div>

      {/* Bloc selector cards */}
      <div className="flex gap-3 mb-7 flex-wrap">
        {Object.entries(BLOCS).map(([key, bloc]) => {
          const c = BLOC_COLORS[key];
          const active = activeBloc === key;
          return (
            <button
              key={key}
              onClick={() => switchBloc(key)}
              className={`flex-1 min-w-[140px] p-[18px_20px] rounded-xl text-left cursor-pointer transition-all duration-200 ${
                active 
                  ? `shadow-[0_4px_12px_rgba(0,0,0,0.10),0_2px_4px_rgba(0,0,0,0.06)] -translate-y-[2px]` 
                  : "shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.10),0_2px_4px_rgba(0,0,0,0.06)] hover:-translate-y-[2px]"
              }`}
              style={{
                border: active ? `2px solid ${c.accent}` : "1px solid #E5E5EA",
                background: active ? c.light : "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.borderColor = c.border;
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.borderColor = "#E5E5EA";
                }
              }}
            >
              <div 
                className="text-[22px] font-semibold mb-1 tracking-[-0.02em]"
                style={{ color: c.accent }}
              >
                {bloc.label}
              </div>
              <div 
                className="text-[12px]"
                style={{ 
                  color: active ? c.accent : "var(--color-text-secondary)",
                  fontWeight: active ? 500 : 400,
                }}
              >
                {bloc.apartments.length} appartements
              </div>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {!activeBloc && (
        <div className="text-center py-14 text-gray-600 text-[14px] border border-dashed border-gray-300 rounded-xl">
          Choisissez un bloc ci-dessus pour afficher les appartements.
        </div>
      )}

      {/* Filter bar + table */}
      {activeBloc && currentBloc && (
        <>
          <div className="flex flex-wrap gap-2.5 items-center mb-5 p-3 bg-gray-50 rounded-xl border border-gray-200">
            <div 
              className="w-1 h-[18px] rounded-sm flex-shrink-0"
              style={{ background: colors.accent }}
            />
            <span 
              className="text-[14px] font-medium mr-1"
              style={{ color: colors.accent }}
            >
              {currentBloc.label}
            </span>
            <span className="text-[12px] text-gray-600">
              {visibleCount} appartement{visibleCount !== 1 ? "s" : ""}
            </span>
            <div className="flex-1 min-w-[20px]" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="text-[13px] px-[10px] py-[5px] rounded-lg min-w-[140px] max-w-full flex-1 basis-[140px] border border-gray-300 bg-white"
            >
              <option value="">Tous les types</option>
              {availableTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <select
              value={filterFloor}
              onChange={(e) => setFilterFloor(e.target.value)}
              className="text-[13px] px-[10px] py-[5px] rounded-lg min-w-[120px] max-w-full flex-1 basis-[120px] border border-gray-300 bg-white"
            >
              <option value="">Tous les étages</option>
              {availableFloors.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            {(filterType || filterFloor) && (
              <button
                onClick={() => { setFilterType(""); setFilterFloor(""); }}
                className="px-3 py-[5px] text-[12px] rounded-lg border border-gray-300 bg-none text-gray-600 cursor-pointer whitespace-nowrap flex-shrink-0 hover:bg-gray-100 transition-colors"
              >
                Réinitialiser
              </button>
            )}
          </div>

          <BlocTable
            blocKey={activeBloc}
            apartments={currentBloc.apartments}
            filterType={filterType}
            filterFloor={filterFloor}
            onView={(apt) => setViewing(apt)}
          />
        </>
      )}

      {viewing && activeBloc && (
        <PlanModal apt={viewing} bloc={activeBloc} onClose={() => setViewing(null)} />
      )}
    </div>
  );
}