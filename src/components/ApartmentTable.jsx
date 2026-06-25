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
    <span style={{
      background: badge.bg, color: badge.text, fontSize: 11, fontWeight: 500,
      padding: "3px 8px", borderRadius: 6, whiteSpace: "nowrap", display: "inline-block",
    }}>
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
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1000, padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--color-background-primary)",
          borderRadius: 16,
          border: "0.5px solid var(--color-border-tertiary)",
          width: "100%",
          maxWidth: 1100,
          height: "92vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Modal header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 20px",
          borderBottom: "0.5px solid var(--color-border-tertiary)",
          gap: 12, flexWrap: "wrap", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{
              background: colors.light, color: colors.accent,
              fontWeight: 500, fontSize: 15, padding: "4px 14px", borderRadius: 8,
            }}>
              {apt.id}
            </span>
            <span style={{ color: "var(--color-text-secondary)", fontSize: 13 }}>
              {apt.floor}
            </span>
            <TypeBadge type={apt.type} />
            <span style={{ color: "var(--color-text-secondary)", fontSize: 13 }}>
              {apt.surface} m² habitable
            </span>
            {apt.terrace != null && (
              <span style={{ color: "var(--color-text-secondary)", fontSize: 13 }}>
                · terrasse {apt.terrace} m²
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            style={{
              background: "none",
              border: "0.5px solid var(--color-border-secondary)",
              borderRadius: 8, padding: "5px 14px", cursor: "pointer",
              color: "var(--color-text-secondary)", fontSize: 13,
            }}
          >
            Fermer ✕
          </button>
        </div>

        {/* PDF iframe — fills remaining height */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <iframe
            src={pdfUrl}
            title={`Plan appartement ${apt.id}`}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          />
          <div style={{
            position: "absolute", bottom: 14, right: 14,
            background: "var(--color-background-primary)",
            border: "0.5px solid var(--color-border-tertiary)",
            borderRadius: 8, padding: "5px 12px",
            fontSize: 11, color: "var(--color-text-secondary)",
            pointerEvents: "none",
          }}>
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
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        transition: "background 0.15s ease",
        backgroundColor: "#FAFAFA",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#F0F0F7")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#FAFAFA")}
    >
      <td style={{ padding: "10px 14px" }}>
        <span style={{
          fontWeight: 600, fontSize: 13, color: colors.accent,
          background: colors.light, padding: "3px 10px", borderRadius: 6, letterSpacing: "0.02em",
        }}>
          {apt.id}
        </span>
      </td>
      <td style={{ padding: "10px 14px", fontSize: 13, color: "var(--color-text-secondary)" }}>
        {apt.floor}
      </td>
      <td style={{ padding: "10px 14px" }}>
        <TypeBadge type={apt.type} />
      </td>
      <td style={{ padding: "10px 14px", fontSize: 13, fontWeight: 600, color: "var(--color-text-primary)" }}>
        {apt.surface} m²
      </td>
      <td style={{ padding: "10px 14px", fontSize: 13, color: "var(--color-text-secondary)" }}>
        {apt.commonArea} m²
      </td>
      <td style={{ padding: "10px 14px", fontSize: 13, color: "var(--color-text-secondary)" }}>
        {apt.terrace != null ? `${apt.terrace} m²` : "—"}
      </td>
      <td style={{ padding: "10px 14px" }}>
        <button
          onClick={() => onView(apt)}
          style={{
            background: "none", border: `1px solid ${colors.border}`,
            borderRadius: 8, padding: "5px 14px", cursor: "pointer",
            fontSize: 12, color: colors.accent, fontWeight: 600,
            whiteSpace: "nowrap",
            transition: "background 0.15s, color 0.15s",
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
      <div style={{ textAlign: "center", padding: "48px 0", color: "var(--color-text-secondary)", fontSize: 14 }}>
        Aucun appartement ne correspond aux filtres sélectionnés.
      </div>
    );
  }

  return (
    <div style={{
      background: "var(--color-background-primary)",
      border: "1px solid #E5E5EA",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
    }}>
      <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
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
          <tr style={{
            background: "#F7F7FA",
            borderBottom: "1px solid #E5E5EA",
          }}>
            {["Réf.", "Étage", "Type", "Surface", "Parties communes", "Terrasse", "Plan"].map((h) => (
              <th key={h} style={{
                padding: "9px 14px", textAlign: "left", fontSize: 11, fontWeight: 600,
                color: "#6B6B78", letterSpacing: "0.05em", textTransform: "uppercase",
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {byFloor.map(({ floor, rows }) => (
            <React.Fragment key={floor}>
              {!filterFloor && (
                <tr style={{ background: "#F7F7FA" }}>
                  <td colSpan={7} style={{
                    padding: "6px 14px", fontSize: 11, fontWeight: 600,
                    color: colors.accent,
                    borderTop: "1px solid #E5E5EA",
                    borderBottom: "1px solid #E5E5EA",
                    letterSpacing: "0.04em",
                  }}>
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
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 980, margin: "0 auto", padding: "24px 16px" }}>
      <h2 className="sr-only">Table des appartements — Immeuble The Rock Radhia IV</h2>

      <div style={{ marginBottom: 28 }}>
        <p style={{
          fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)",
          letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 4px",
        }}>
          Immeuble The Rock — Radhia IV
        </p>
        <h1 style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 2px" }}>
          Plans de vente
        </h1>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>
          Sélectionnez un bloc pour consulter les appartements disponibles.
        </p>
      </div>

      {/* Bloc selector cards */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        {Object.entries(BLOCS).map(([key, bloc]) => {
          const c = BLOC_COLORS[key];
          const active = activeBloc === key;
          return (
            <button
              key={key}
              onClick={() => switchBloc(key)}
              style={{
                flex: "1 1 140px",
                padding: "18px 20px",
                borderRadius: 12,
                border: active ? `2px solid ${c.accent}` : "1px solid #E5E5EA",
                background: active ? c.light : "#FFFFFF",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
                boxShadow: active 
                  ? `0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)` 
                  : "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                transform: active ? "translateY(-2px)" : "translateY(0)",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = c.border;
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#E5E5EA";
                }
              }}
            >
              <div style={{ 
                fontSize: 22, 
                fontWeight: 600, 
                color: c.accent, 
                marginBottom: 4,
                letterSpacing: "-0.02em"
              }}>
                {bloc.label}
              </div>
              <div style={{ 
                fontSize: 12, 
                color: active ? c.accent : "var(--color-text-secondary)",
                fontWeight: active ? 500 : 400,
              }}>
                {bloc.apartments.length} appartements
              </div>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {!activeBloc && (
        <div style={{
          textAlign: "center", padding: "56px 0",
          color: "var(--color-text-secondary)", fontSize: 14,
          border: "0.5px dashed var(--color-border-tertiary)",
          borderRadius: 12,
        }}>
          Choisissez un bloc ci-dessus pour afficher les appartements.
        </div>
      )}

      {/* Filter bar + table */}
      {activeBloc && currentBloc && (
        <>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center",
            marginBottom: 20, padding: "12px 16px",
            background: "var(--color-background-secondary)",
            borderRadius: 10, border: "0.5px solid var(--color-border-tertiary)",
          }}>
            <div style={{ width: 4, height: 18, borderRadius: 2, background: colors.accent, flexShrink: 0 }} />
            <span style={{ fontSize: 14, fontWeight: 500, color: colors.accent, marginRight: 4 }}>
              {currentBloc.label}
            </span>
            <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
              {visibleCount} appartement{visibleCount !== 1 ? "s" : ""}
            </span>
            <div style={{ flex: 1 }} />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{ fontSize: 13, padding: "5px 10px", borderRadius: 8, minWidth: 160 }}
            >
              <option value="">Tous les types</option>
              {availableTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <select
              value={filterFloor}
              onChange={(e) => setFilterFloor(e.target.value)}
              style={{ fontSize: 13, padding: "5px 10px", borderRadius: 8, minWidth: 140 }}
            >
              <option value="">Tous les étages</option>
              {availableFloors.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            {(filterType || filterFloor) && (
              <button
                onClick={() => { setFilterType(""); setFilterFloor(""); }}
                style={{
                  padding: "5px 12px", fontSize: 12, borderRadius: 8,
                  border: "0.5px solid var(--color-border-secondary)",
                  background: "none", color: "var(--color-text-secondary)", cursor: "pointer",
                }}
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