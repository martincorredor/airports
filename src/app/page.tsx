import AirportTable from './components/AirportTable';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2x1 font-bold mb-4">Lista de aeropuertos</h1>
      <AirportTable />
    </main>
  );
}
