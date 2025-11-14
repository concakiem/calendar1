import Link from 'next/link';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import HomeProductList from '@/components/HomeProductList';
import ImageSlider from '@/components/ImageSlider';

export const dynamic = 'force-dynamic';

export default async function Home() {
  await connectToDatabase();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  
  // Chuyển _id từ đối tượng ObjectId sang chuỗi
  const serializedProducts = products.map(product => ({
    ...product,
    _id: (product as { _id: string })._id.toString(),
    createdAt: product.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-16 md:space-y-20 px-4 md:px-0">
      {/* Image Slider - Full width */}
      <div className="w-full md:w-screen md:relative md:left-1/2 md:right-1/2 md:-ml-[50vw] md:-mr-[50vw]">
        <ImageSlider />
      </div>
      
      {/* Mô tả dưới banner */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Chuyên cung cấp các loại lịch tết, lịch để bàn, lịch treo tường với thiết kế đẹp mắt, chất lượng cao và giá cả hợp lý. Phục vụ khách hàng trên toàn quốc.
        </p>
      </div>
      
      {/* Phần hiển thị sản phẩm */}
      <div className="mt-16 md:mt-20 w-full max-w-7xl mx-auto px-4 md:px-0">
        {/* <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Sách Giáo Khoa Mới Nhất</h2>
          <p className="text-gray-600 text-lg">
            Cập nhật liên tục các đầu sách mới theo chương trình giáo dục phổ thông
          </p>
        </div> */}
        <HomeProductList products={serializedProducts} />
      </div>

      {/* Call to Action Section */}
      {/* <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 px-6 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">Bạn Có Sách Cần Bán?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Tham gia cộng đồng mua bán sách giáo khoa của chúng tôi. 
          Đăng bán sách cũ và tìm mua những cuốn sách cần thiết.
        </p>
        <Link
          href="/products/add"
          className="bg-white text-green-600 py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg inline-block"
        >
          Đăng Bán Sách Ngay
        </Link>
      </div> */}
    </div>
  );
}
