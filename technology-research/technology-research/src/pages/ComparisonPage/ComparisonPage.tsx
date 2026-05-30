import { Link } from "react-router-dom";

export const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mt-4 mb-8">
          React Hook Form vs Formik
        </h1>

        <div className="overflow-x-auto">

          <table className="w-full border">

            <thead>
              <tr className="bg-slate-200">
                <th className="border p-3">
                  Feature
                </th>
                <th className="border p-3">
                  React Hook Form
                </th>
                <th className="border p-3">
                  Formik
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-3">Performance</td>
                <td className="border p-3">Excellent</td>
                <td className="border p-3">Good</td>
              </tr>

              <tr>
                <td className="border p-3">Re-renderizados</td>
                <td className="border p-3">Less</td>
                <td className="border p-3">More</td>
              </tr>

              <tr>
                <td className="border p-3">Size</td>
                <td className="border p-3">Smaller</td>
                <td className="border p-3">Larger</td>
              </tr>

              <tr>
                <td className="border p-3">Zod Integration</td>
                <td className="border p-3">Direct</td>
                <td className="border p-3">Manual</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="mt-8 bg-slate-50 p-6 rounded-lg">

          <h2 className="text-2xl font-semibold mb-3">
            Conclusion
          </h2>

          <p>
            React Hook Form offers better performance and fewer re-renders thanks to its reference-based architecture.
          </p>

          <p className="mt-3">
            Formik is a mature and easy-to-learn alternative,
            although it tends to generate more re-renders in complex forms.
          </p>

        </div>

      </div>

    </div>
  );
};