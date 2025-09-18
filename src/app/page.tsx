import Link from "next/link";
const mockUrls = ["https://5fkfacvzu6.ufs.sh/f/LHHHFoc7EhlgOJKPPNgv5HaZnxjq7kK9XQeYTw3bh41P0E2r", "https://5fkfacvzu6.ufs.sh/f/LHHHFoc7Ehlg51huF1KngR8rCxscv4dGaBlQF0k3HKIj2ypP", "https://5fkfacvzu6.ufs.sh/f/LHHHFoc7EhlgrnIiK7cxCk5oYUGiDXJjd0s1Kv4qghTpZwt2"]	
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>
		</main>
	);
}
