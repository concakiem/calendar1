'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

export default function OrderSuccessPage() {
  const params = useSearchParams();
  const orderId = params.get('orderId');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!orderId) {
        setError('Thiếu mã đơn hàng (orderId).');
        setLoading(false);
        return;
      }

      try {
        // Lấy trạng thái đơn hàng
        const orderRes = await axios.get(`/api/orders/${orderId}`);
        if (!orderRes.data?.success) {
          throw new Error(orderRes.data?.message || 'Không thể tải đơn hàng');
        }
        setOrder(orderRes.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Có lỗi xảy ra');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [orderId]);

  if (loading) {
    return (
      <div className="max-w-xl mx-auto py-12 text-center">
        <p className="text-gray-600">Đang tải kết quả thanh toán...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto py-12 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <Link href="/" className="text-blue-600 hover:underline">Về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-green-600">Thanh toán thành công</h1>
        <p className="text-gray-600 mt-2">Cảm ơn bạn đã đặt hàng!</p>
      </div>

      {order && (
        <div className="space-y-4">
          <div className="p-4 rounded bg-gray-50">
            <p className="text-sm text-gray-600">Mã đơn hàng</p>
            <p className="font-mono">{order._id}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded border">
              <h3 className="font-semibold mb-2">Sản phẩm</h3>
              <p>{order.product?.name}</p>
              <p className="text-sm text-gray-600">{order.product?.category}</p>
              <p className="text-blue-600 font-bold mt-1">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.product?.price || 0)}
              </p>
            </div>
            <div className="p-4 rounded border">
              <h3 className="font-semibold mb-2">Thanh toán</h3>
              <p>Nhà cung cấp: {order.payment?.provider || '—'}</p>
              <p>Trạng thái: {order.payment?.paymentStatus || '—'}</p>
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <Link href="/" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center">Về trang chủ</Link>
            <Link href="/orders" className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 text-center">Xem đơn hàng</Link>
          </div>
        </div>
      )}
    </div>
  );
}



