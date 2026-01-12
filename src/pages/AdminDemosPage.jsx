import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';

const demos = [
  {
    title: 'Adidas Demo',
    description: 'Header + mega-menú + layout demo.',
    path: '/adidas-demo',
  },
  {
    title: 'Nike Hero Demo',
    description: 'Hero slider tipus Nike.',
    path: '/nike-hero-demo',
  },
  {
    title: 'Nike: També et pot agradar',
    description: 'Rail/carrusel de recomanacions (demo).',
    path: '/nike-tambe',
  },
];

export default function AdminDemosPage() {
  return (
    <>
      <SEO title="Demos" description="Recull de pàgines demo" />

      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-[0.18em] text-black/50">ADMIN</div>
          <h1 className="mt-2 text-2xl font-semibold text-black">Demos</h1>
          <div className="mt-1 text-sm text-black/55">Accés ràpid a totes les pàgines demo.</div>
        </div>

        <Link
          to="/admin"
          className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-medium text-black/80 shadow-sm hover:bg-black/5"
        >
          <ArrowLeft className="h-4 w-4" />
          Tornar
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demos.map((demo) => (
          <div
            key={demo.path}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:border-gray-300 hover:shadow-xl"
          >
            <div className="text-base font-semibold text-gray-900">{demo.title}</div>
            <div className="mt-1 text-xs leading-relaxed text-gray-600">{demo.description}</div>

            <div className="mt-4 flex items-center gap-2">
              <Link
                to={demo.path}
                className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white hover:bg-black/90"
              >
                Obrir
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>

              <div className="text-[11px] text-gray-400">{demo.path}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
