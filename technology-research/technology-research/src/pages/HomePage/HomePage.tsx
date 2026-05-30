import { Link } from "react-router-dom";

interface NavCard {
  to: string;
  label: string;
  description: string;
  badge: string;
  badgeColor: string;
}

const cards: NavCard[] = [
  {
    to: "/login-rhf",
    label: "Login — React Hook Form",
    description: "Login form with RHF + Zod. useRef for auto-focus.",
    badge: "Page 1",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    to: "/register-rhf",
    label: "Register — React Hook Form",
    description: "Register form with Zod validation: uppercase, numbers, special characters.",
    badge: "Page 2",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    to: "/profile",
    label: "Profile",

    description: "Editable profile with default values, reset and auto-save.",
    badge: "Page 3",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    to: "/login-formik",
    label: "Login — Formik",
    description: "Login form with Formik + zod-formik-adapter.",
    badge: "Page 1 ",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  
  {
    to: "/register-formik",
    label: "Register — Formik",
    description: "Register form with Formik + zod-formik-adapter.",
    badge: "Page 2 ",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    to: "/comparison",
    label: "Comparison",
    description: "Comparison table: RHF vs Formik in performance, bundle size and DX.",
    badge: "Extra",
    badgeColor: "bg-slate-100 text-slate-600",
  },
];

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-2">
          Forms Research App
        </h1>
        <br></br>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(({ to, label, description, badge, badgeColor }) => (
            <Link
              key={to}
              to={to}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition group"
            >
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold mb-2 ${badgeColor}`}
              >
                {badge}
              </span>
              <h2 className="font-semibold text-slate-800 group-hover:text-blue-600 transition text-sm">
                {label}
              </h2>
              <p className="text-xs text-slate-500 mt-1">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
