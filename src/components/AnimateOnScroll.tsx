import React, { useEffect, useRef, ReactNode } from 'react';
// import { gsap } from 'gsap'; // Uncomment if using GSAP
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Uncomment if using ScrollTrigger

interface AnimateOnScrollProps {
  children: ReactNode;
  animationClass?: string; // Ví dụ: 'fade-in', 'slide-up'
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, animationClass = 'opacity-0 translate-y-4', delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Đây là nơi bạn sẽ tích hợp logic GSAP hoặc Intersection Observer
    // Ví dụ đơn giản với Tailwind classes:
    const element = ref.current;
    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Khi phần tử xuất hiện trong viewport
              setTimeout(() => {
                (entry.target as HTMLElement).classList.remove('opacity-0', 'translate-y-4'); // Xóa class ẩn
                (entry.target as HTMLElement).classList.add('transition-all', 'duration-1000', 'ease-out'); // Thêm transition
              }, delay);
              observer.unobserve(entry.target); // Ngừng quan sát sau khi đã animate
            }
          });
        },
        { threshold: 0.1 } // Kích hoạt khi 10% phần tử hiển thị
      );
      observer.observe(element);
    }

    // Nếu dùng GSAP:
    // gsap.registerPlugin(ScrollTrigger); // Đăng ký plugin nếu cần
    // gsap.fromTo(ref.current,
    //   { opacity: 0, y: 50 }, // Trạng thái ban đầu
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1,
    //     delay: delay,
    //     scrollTrigger: {
    //       trigger: ref.current,
    //       start: "top 80%", // Bắt đầu animation khi phần tử vào 80% từ trên xuống
    //       toggleActions: "play none none none"
    //     }
    //   }
    // );
  }, [animationClass, delay]);

  return (
    <div ref={ref} className={animationClass}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;