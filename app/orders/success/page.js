'use client';

export const dynamic = "force-dynamic";

import { Suspense } from 'react';
import OrderSuccessPage from './OrderSuccessPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <OrderSuccessPage />
    </Suspense>
  );
}



