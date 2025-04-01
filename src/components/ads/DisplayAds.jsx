import React, { useEffect, useRef, useState } from 'react';
import { validateIsAdmin } from '../../service/AdminService';

const DisplayAds = () => {
  const [isAdmin, setIsAdmin] = useState(null); // null = 로딩 중
  const adRef = useRef(null);

  // 👮‍♂️ 관리자 여부 판별 (한 번만 실행)
  useEffect(() => {
    const checkAdmin = async () => {
      const admin = await validateIsAdmin();
      setIsAdmin(admin);
    };
    checkAdmin();
  }, []);

  // 📺 광고 DOM 렌더된 후 push
  useEffect(() => {
    if (isAdmin === false && window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error('AdsbyGoogle push error:', e);
      }
    }
  }, [isAdmin]); // ✅ isAdmin 변경 시에만 실행 (interval 불필요)

  // ⏳ 로딩 중 or 관리자 → 렌더링 안 함
  if (isAdmin !== false) return null;

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{
        display: 'block',
        textAlign: 'center',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
      data-ad-client="ca-pub-4319976756452376"
      data-ad-slot="4159441127"
      data-ad-format="auto"
      data-full-width-responsive="true"
      // 🔥 실제 배포 시 아래 라인 반드시 제거!
    //   data-adtest="on"
    />
  );
};

export default DisplayAds;
