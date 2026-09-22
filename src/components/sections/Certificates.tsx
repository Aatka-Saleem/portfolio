// src/components/sections/Certificates.tsx
"use client";

import { useState, useEffect } from "react";
import { certificatesData } from "@/data/certificates";
import { Certificate, SubCertificate } from "@/types";
import { CertificateCard } from "@/components/ui/CertificateCard";
import { Badge } from "@/components/ui/Badge";
import { Award, CheckCircle2, X, ExternalLink, ChevronRight } from "lucide-react";

type FilterTab = "ALL" | "CERTIFICATION" | "ACHIEVEMENT";

export function Certificates() {
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);
  const [selectedSubIndex, setSelectedSubIndex] = useState<number>(0);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewCert(null);
    };
    if (previewCert) {
      setSelectedSubIndex(0);
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [previewCert]);

  const filteredCerts = certificatesData.filter((item) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "CERTIFICATION") return item.category === "Certification";
    if (activeTab === "ACHIEVEMENT") return item.category === "Achievement";
    return true;
  });

  const certCount = certificatesData.filter((c) => c.category === "Certification").length;
  const achieveCount = certificatesData.filter((c) => c.category === "Achievement").length;

  const currentSubCert: SubCertificate | null =
    previewCert?.subCertificates && previewCert.subCertificates.length > 0
      ? previewCert.subCertificates[selectedSubIndex]
      : null;

  const activeImage = currentSubCert ? currentSubCert.imageUrl : previewCert?.imageUrl;
  const activeVerify = currentSubCert ? currentSubCert.verifyUrl : previewCert?.verifyUrl;

  return (
    <section
      id="certificates"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#181d2a]"
    >
      {/* Section Header */}
      <div className="space-y-2 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
          <Award className="w-4 h-4" />
          <span>VERIFIED ACCREDITATIONS &amp; HONORS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9]">
          Certificates &amp; Achievements
        </h2>
        <p className="text-sm text-[#94a3b8] max-w-xl">
          Curated accreditations across deep learning, agent architectures, and verified competitive programming milestones.
        </p>
      </div>

      {/* Filter Hub Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-8">
        <button
          type="button"
          onClick={() => setActiveTab("ALL")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            activeTab === "ALL"
              ? "bg-[#38bdf8] text-[#090a0f] font-semibold"
              : "bg-[#0e1118] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1e2433]"
          }`}
        >
          All ({certificatesData.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("CERTIFICATION")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            activeTab === "CERTIFICATION"
              ? "bg-[#38bdf8] text-[#090a0f] font-semibold"
              : "bg-[#0e1118] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1e2433]"
          }`}
        >
          Certifications ({certCount})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ACHIEVEMENT")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            activeTab === "ACHIEVEMENT"
              ? "bg-[#38bdf8] text-[#090a0f] font-semibold"
              : "bg-[#0e1118] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1e2433]"
          }`}
        >
          Competitive ({achieveCount})
        </button>
      </div>

      {/* Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCerts.map((cert) => (
          <CertificateCard
            key={`${cert.issuer}-${cert.title}`}
            cert={cert}
            onPreview={(c) => setPreviewCert(c)}
          />
        ))}
      </div>

      {/* Verification Lightbox Modal */}
      {previewCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] rounded-xl bg-[#0e1118] border border-[#2b3548] p-4 sm:p-6 shadow-2xl flex flex-col gap-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#181d2a]">
              <div>
                <span className="text-[11px] font-mono text-[#38bdf8] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED AUDIT RECORD — {previewCert.issuer.toUpperCase()}
                </span>
                <h3 id="cert-modal-title" className="text-base font-bold text-[#f1f5f9] mt-0.5">
                  {currentSubCert ? currentSubCert.title : previewCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                aria-label="Close preview"
                className="p-1.5 rounded-lg text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#1e2433] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-Course Selector Tabs if Sub-Certificates Exist */}
            {previewCert.subCertificates && (
              <div className="flex flex-wrap gap-2 pt-1 pb-2 border-b border-[#181d2a]">
                {previewCert.subCertificates.map((sub, idx) => (
                  <button
                    key={sub.title}
                    type="button"
                    onClick={() => setSelectedSubIndex(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all ${
                      selectedSubIndex === idx
                        ? "bg-[#38bdf8] text-[#090a0f] font-semibold"
                        : "bg-[#151922] text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1e2433]"
                    }`}
                  >
                    <span>{sub.courseNumber}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}

            {/* In-Frame Image Container */}
            <div className="relative w-full h-[55vh] min-h-[300px] rounded-lg bg-[#07080c] border border-[#1e2433] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              {activeImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={activeImage}
                  alt={currentSubCert ? currentSubCert.title : previewCert.title}
                  className="w-auto h-auto max-w-full max-h-full object-contain rounded shadow-lg select-none"
                  loading="eager"
                />
              ) : (
                <p className="text-xs font-mono text-[#64748b]">No image preview available</p>
              )}
            </div>

            {/* Summary details for sub-cert */}
            {currentSubCert && (
              <div className="space-y-2 pt-1 text-xs">
                <p className="text-[#cbd5e1] leading-relaxed">{currentSubCert.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {currentSubCert.skills.map((s) => (
                    <Badge key={s} variant="default" className="text-[10px] py-0.5">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-[#181d2a]">
              <span className="text-[11px] font-mono text-[#64748b]">
                Press ESC or click outside to dismiss
              </span>
              {activeVerify && (
                <a
                  href={activeVerify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38bdf8] hover:text-[#7dd3fc] transition-colors"
                >
                  <span>Verify External Registry</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}