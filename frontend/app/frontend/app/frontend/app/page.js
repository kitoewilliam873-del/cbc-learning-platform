import MetricCard from '../components/MetricCard';
import { learnerOverview, metrics, pathways } from '../lib/mockData';

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl p-6 md:p-10">
      <header className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-600">CBC Senior School Portal</p>
        <h1 className="mt-2 text-3xl font-bold">{learnerOverview.fullName}</h1>
        <p className="mt-2 text-slate-600">
          Grade {learnerOverview.gradeLevel} • {learnerOverview.pathway} Pathway
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold">Current Competency Snapshot</h2>
          <p className="mt-2 text-slate-600">
            Overall Level: <span className="font-semibold">{learnerOverview.overallCompetency}</span>
          </p>
          <p className="mt-1 text-slate-600">Attendance: {learnerOverview.attendanceRate}</p>
        </article>

        <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold">Curriculum Pathways</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
            {pathways.map((pathway) => (
              <li key={pathway} className="rounded-md bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
                {pathway}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
          }
          
