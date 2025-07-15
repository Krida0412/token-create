import {
  BoltIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
  ChartBarIcon,
  LockClosedIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import Header from "@/components/header";

export default function HeroSection() {
  return (
    <>
      <Header />
      {/* Full Page Background with Gradient */}
      <div className="bg-gray-50 min-h-screen px-6">
        <section className="pt-28 max-w-4xl mx-auto relative">
          {/* Badge */}
          <div className="absolute top-[85px] left-4 z-40 inline-flex items-center bg-red-400 py-2 px-4 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            <span>Harga terbaik</span>
            <FireIcon className="ml-3 w-6 h-6" />
          </div>

          {/* Main Content */}
          <div className="relative p-6 rounded-3xl shadow-3xl flex flex-col sm:flex-row items-center justify-between bg-red-400">
            {/* Left Side (Text) */}
            <div className="text-white max-w-xl mb-6 sm:mb-0">
              <h2 className="text-xl font-bold">Buat Koin Anda di Solana</h2>
              <p className="text-base">Hanya dengan 0,1 SOL: cepat & mudah!</p>
            </div>

            {/* Right Side (Icons) */}
            <div className="flex space-x-4">
              <img
                src="/assets/memecoin/dogecoinn.png"
                alt="Gorilla"
                className="w-16 h-16 rounded-full mb-0 sm:mb-0"
              />
              <img
                src="/assets/memecoin/pepe.png"
                alt="Cow"
                className="w-16 h-16 rounded-full mb-0 sm:mb-0"
              />
              <img
                src="/assets/memecoin/moodeng.png"
                alt="Doge"
                className="w-16 h-16 rounded-full mb-0 sm:mb-0"
              />
              <img
                src="/assets/memecoin/shibainu.png"
                alt="Duck"
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-2 sm:py-6 lg:py-8 text-center">
          <div className="max-w-4xl mx-auto px-4 py-8 bg-red-400 rounded-3xl">
            {/* Hero Title */}
            <h1 className="text-2xl sm:text-6xl lg:text-6xl font-bold text-white mb-6 max-w-2xl mx-auto">
              Kapan Lagi Punya Token Sendiri Yakan?
            </h1>

            {/* Description */}
            <p className="mt-4 sm:text-lg lg:text-xl max-w-2xl mx-auto text-white">
              Punya ide token SPL sendiri? Kami bantu buatkan di blockchain
              Solana tanpa ribet, no coding, langsung jalan!
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-6">
              <button className="bg-[#5133A9] text-white px-12 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-inbg-[#5133A9] shadow-xl">
                Mulai Buat Token
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 lg: bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
              {/* Feature 1 */}
              <div className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <BoltIcon className="text-[#5133A9] h-12 w-12 bg-indigo-100 py-2 px-2 rounded-xl mb-6 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Super Cepat
                </h3>
                <p className="text-gray-700 text-center">
                  Cuma beberapa klik, token kamu siap aktif di blockchain Solana
                  dalam hitungan menit. Gak ribet sama sekali!
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <ShieldCheckIcon className="text-[#5133A9] h-12 w-12 bg-indigo-100 py-2 px-2 rounded-xl mb-6 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Aman dan Terpercaya
                </h3>
                <p className="text-gray-700 text-center">
                  Keamanan jadi prioritas utama! Semua proses dibuat dengan
                  hati-hati, jadi token kamu tetap aman dan terkendali.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <AdjustmentsHorizontalIcon className="text-[#5133A9] h-12 w-12 bg-indigo-100 py-2 px-2 rounded-xl mb-6 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Sesuai Kebutuhan Kamu
                </h3>
                <p className="text-gray-700 text-center">
                  Ingin kustomisasi tokenmu? Pasokan, desimal, metadata — semua
                  bisa diatur sesuai dengan keinginanmu.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <GlobeAltIcon className="text-[#5133A9] h-12 w-12 bg-indigo-100 py-2 px-2 rounded-xl mb-6 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Akses Global
                </h3>
                <p className="text-gray-700 text-center">
                  Dengan Solana, tokenmu bisa diakses dari mana saja. Jangkauan
                  luas, adopsi mudah!
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <ChartBarIcon className="text-[#5133A9] h-12 w-12 bg-indigo-100 py-2 px-2 rounded-xl mb-6 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Siap Pasar
                </h3>
                <p className="text-gray-700 text-center">
                  Tokenmu siap diperdagangkan di bursa terdesentralisasi. Mulai
                  dari penyediaan likuiditas hingga perdagangan langsung.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <LockClosedIcon className="text-[#5133A9] h-12 w-12 bg-indigo-100 py-2 px-2 rounded-xl mb-6 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Kendali di Tanganmu
                </h3>
                <p className="text-gray-700 text-center">
                  Kamu bisa kontrol semuanya: izin token, pembekuan, pencetakan
                  — sesuaikan semua sesuai yang kamu mau.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
      {/* Full Page Background */}
    </>
  );
}
