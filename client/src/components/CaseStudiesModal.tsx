import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

/**
 * COMPONENT: CaseStudiesModal
 * ===========================
 * Muc dich: Hien thi chi tiet du an trong modal popup
 * 
 * Cach su dung:
 * <CaseStudiesModal project={projectData} isOpen={isOpen} onClose={onClose} />
 * 
 * Du an co cau truc:
 * {
 *   id: 1,
 *   title: "Project Name",
 *   category: "3D Modeling",
 *   image: "emoji",
 *   description: "Short description",
 *   fullDescription: "Chi tiet du an",
 *   challenge: "Thach thuc",
 *   solution: "Giai phap",
 *   results: "Ket qua",
 *   tools: ["Tool 1", "Tool 2"],
 *   year: "2024"
 * }
 */

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  tools: string[];
  year: string;
}

interface CaseStudiesModalProps {
  project: CaseStudy;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudiesModal({
  project,
  isOpen,
  onClose,
}: CaseStudiesModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1A1A1A] border border-[#6366F1]/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 p-2 rounded-full bg-[#6366F1]/20 hover:bg-[#6366F1]/40 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{project.image}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider mb-2">
                      {project.category}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      {project.title}
                    </h2>
                  </div>
                </div>
                <p className="text-gray-400 text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1] to-transparent mb-8"></div>

              {/* Challenge Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">My Solution</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Results Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Results & Impact</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.results}
                </p>
              </div>

              {/* Tools Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] text-sm font-medium"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Year Section */}
              <div className="mb-8">
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Year</p>
                <p className="text-xl text-white font-semibold">{project.year}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1] to-transparent mb-8"></div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-lg hover:from-[#7C3AED] hover:to-[#A78BFA] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 border-2 border-[#6366F1] text-[#6366F1] font-semibold rounded-lg hover:bg-[#6366F1] hover:text-white transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
