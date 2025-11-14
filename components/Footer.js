'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  
  // Chỉ hiển thị footer trên trang chủ
  if (pathname !== '/') {
    return null;
  }
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Thông tin cửa hàng */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-white" />
              <h3 className="text-lg font-bold text-white">KT Design - Lịch Chất Lượng</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Chuyên cung cấp các loại lịch tết, lịch để bàn, lịch treo tường với thiết kế đẹp mắt, 
              chất lượng cao và giá cả hợp lý. Phục vụ khách hàng trên toàn quốc.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liên kết nhanh */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-white transition-colors text-sm">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/90 hover:text-white transition-colors text-sm">
                  Sản phẩm lịch
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                  Hướng dẫn đặt hàng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm">
                  Vận chuyển & Thanh toán
                </Link>
              </li>
            </ul>
          </div>

          {/* Danh mục lịch */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Danh mục lịch</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-white/90 hover:text-white transition-colors text-sm">
                  Lịch Tết
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/90 hover:text-white transition-colors text-sm">
                  Lịch Để Bàn
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/90 hover:text-white transition-colors text-sm">
                  Lịch Treo Tường
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/90 hover:text-white transition-colors text-sm">
                  Lịch Bloc
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/90 hover:text-white transition-colors text-sm">
                  Lịch Theo Yêu Cầu
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/90">
                    129 Hồ Bá Kiện, Thành phố Hồ Chí Minh, 
                    129 Hồ Bá Kiện, Thành phố Hồ Chí Minh,
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white/90">
                    Hotline: <a href="tel:0336061457" className="hover:text-white font-medium">033 606 1457</a>
                  </p>
                  <p className="text-sm text-white/90">
                    Mobile: <a href="tel:0336061457" className="hover:text-white font-medium">033 606 1457</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <p className="text-sm text-white/90">
                  <a href="mailto:info@nhasachkt.vn" className="hover:text-white font-medium">
                    info@nhasachkt.vn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Đường phân cách */}
        <div className="border-t border-red-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © 2025 KT Design - Lịch Chất Lượng. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Điều khoản sử dụng
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        {/* Giờ mở cửa */}
        <div className="mt-6 text-center">
          <div className="inline-block bg-red-700 rounded-lg px-4 py-2">
            <p className="text-sm text-white/90">
              <span className="font-semibold text-white">Giờ mở cửa:</span> 
              {' '}Thứ 2 - Chủ nhật: 7:00 - 21:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}