// File: src/components/Team.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import member1 from '../assets/member/1.jpg';
import member2 from '../assets/member/2.jpg';
import member3 from '../assets/member/3.jpg';
import member4 from '../assets/member/4.jpeg';
import member5 from '../assets/member/5.jpg';
import member6 from '../assets/member/6.png';
import member7 from '../assets/member/7.jpg';

const team = [
  { name: "Arya Ghosh", role: "Team Leader", image: member1 },
  { name: "Adripta Ghosh", role: "Coordinator", image: member2 },
  { name: "Satyajit Roy", role: "Tech Coordinator", image: member3 },
  { name: "Ayan Roy", role: "Graphics Designer", image: member4 },
  { name: "Debojit Sarkar", role: "Graphics Designer", image: member5 },
  { name: "Yasashree Paul", role: "Content Writer", image: member6 },
  { name: "Adityava Gangopadhyay", role: "Content Writer", image: member7 }
];

const Team = () => (
  <section id="team" className="py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-4">Our <span className="text-warning">Team</span></h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 }
        }}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="text-center shadow-sm bg-white p-3 rounded h-100">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-circle mb-3"
                style={{
                  height: '160px',
                  width: '160px',
                  objectFit: 'cover',
                  border: '4px solid #ffc107'
                }}
              />
              <h5 className="fw-bold">{member.name}</h5>
              <p className="text-muted">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </section>
);

export default Team;
