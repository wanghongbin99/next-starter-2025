import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 mt-8">
        <div className="flex items-center mb-6">
          <Image
            src="/car-insurance.svg"
            alt="Motor Insurance"
            width={56}
            height={56}
            className="mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Motor Insurance Dashboard</h1>
            <p className="text-gray-500">Manage your motor insurance policies and claims</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Your Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4 bg-gray-100">
              <h3 className="font-bold text-lg">Honda Civic 2021</h3>
              <p className="text-gray-600">Policy #: 123456789</p>
              <p className="text-gray-600">Valid till: 12/12/2025</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-200 text-green-800 rounded">Active</span>
            </div>
            <div className="border rounded-lg p-4 bg-gray-100">
              <h3 className="font-bold text-lg">Yamaha R15 2020</h3>
              <p className="text-gray-600">Policy #: 987654321</p>
              <p className="text-gray-600">Valid till: 05/08/2025</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-yellow-200 text-yellow-800 rounded">Expiring Soon</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Recent Claims</h2>
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Claim #</th>
                <th className="py-2 px-4 border-b text-left">Vehicle</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">CLM-00123</td>
                <td className="py-2 px-4 border-b">Honda Civic 2021</td>
                <td className="py-2 px-4 border-b">
                  <span className="px-2 py-1 text-xs bg-blue-200 text-blue-800 rounded">Processing</span>
                </td>
                <td className="py-2 px-4 border-b">2025-05-10</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">CLM-00456</td>
                <td className="py-2 px-4 border-b">Yamaha R15 2020</td>
                <td className="py-2 px-4 border-b">
                  <span className="px-2 py-1 text-xs bg-green-200 text-green-800 rounded">Approved</span>
                </td>
                <td className="py-2 px-4 border-b">2025-03-22</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Buy New Policy</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Renew Policy</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">File a Claim</button>
          </div>
        </section>
      </div>
    </main>
  );
}