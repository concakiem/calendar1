'use client';

import Link from 'next/link';

export default function OrderCancelPage() {
  return (
    <div className="max-w-xl mx-auto py-12 text-center">
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-yellow-700">Bạn đã hủy thanh toán</h1>
      <p className="text-gray-600 mt-2">Đơn hàng chưa được thanh toán. Bạn có thể thử lại bất cứ lúc nào.</p>
      <div className="mt-6 flex gap-3 justify-center">
        <Link href="/" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Về trang chủ</Link>
        <Link href="/products" className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300">Tiếp tục mua sắm</Link>
      </div>
    </div>
  );
}



