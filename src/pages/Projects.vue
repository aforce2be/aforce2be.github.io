<template>
  <section
    id="projects"
    class="min-h-screen scroll-mt-14 flex flex-col pt-12 pb-12 transition-opacity duration-700 relative items-center"
    :class="{ 'opacity-100': active, 'opacity-50': !active }"
  >
    <h2 class="px-20 text-center text-white">
      <span class="block mb-2 text-xl font-medium">02. PROJECTS</span>
    </h2>
    <ul class="list text-white">
      <li
        class="project-item px-20 transition-all duration-300 ease-in-out flex justify-between items-center group relative"
      >
        <div>
          <h3 class="transition-transform duration-300 text-4xl font-semibold">
            메가존 클라우드 PMS 구축 및 운영 프로젝트
          </h3>
          <p class="transition-transform duration-300 mt-2 text-l">
            메가존 클라우드 PMS 퍼블리싱(운영 및 신규 개발)
          </p>
          <p
            class="transition-transform duration-300 text-sm text-gray-400 mt-[4px] flex flex-wrap gap-[4px]"
          >
            <span>#SCSS</span>
            <span>#Mui</span>
            <span>#TypeScript</span>
            <span>#React</span>
            <span>#HTML5</span>
            <span>#Bitbucket</span>
            <span>#React</span>
          </p>
        </div>
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 6 } }"
          class="flex items-center gap-2 group text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          VIEW DETAILS
          <!-- 화살표 아이콘 (Heroicons 기준) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
        <img
          src="../assets/mockup-01.png"
          alt="메가존 목업 이미지"
          class="absolute top-[6px] left-0 w-[250px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </li>
      <li
        class="project-item px-20 transition-all duration-300 ease-in-out flex justify-between items-center group relative"
      >
        <div>
          <h3 class="transition-transform duration-300 text-4xl font-semibold">
            우아한형제들 채용 시스템
          </h3>
          <p class="transition-transform duration-300 mt-2 text-l">
            채용 시스템의 운영 및 신규 개발 건 퍼블리싱을 주로 담당했고,
            프론트엔드 지원 업무를 병행
          </p>
          <p
            class="transition-transform duration-300 text-sm text-gray-400 mt-[4px] flex flex-wrap gap-[4px]"
          >
            <span>#SCSS</span>
            <span>#SASS</span>
            <span>#Vuetify</span>
            <span>#Javascript</span>
            <span>#Vue.js</span>
            <span>#HTML5</span>
            <span>#GitLab</span>
          </p>
        </div>
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 5 } }"
          class="flex items-center gap-2 group text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          VIEW DETAILS
          <!-- 화살표 아이콘 (Heroicons 기준) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
        <img
          src="../assets/mockup-02.png"
          alt="메가존 목업 이미지"
          class="absolute top-[-20px] right-[220px] w-[200px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </li>
      <li
        class="project-item px-20 transition-all duration-300 ease-in-out flex justify-between items-center group relative"
      >
        <div>
          <h3 class="transition-transform duration-300 text-4xl font-semibold">
            배민 아카데미
          </h3>
          <p class="transition-transform duration-300 mt-2 text-l">
            우아한형제들 배달의 민족 교육 플랫폼 및 이벤트 페이지 퍼블리싱
          </p>
          <p
            class="transition-transform duration-300 text-sm text-gray-400 mt-[4px] flex flex-wrap gap-[4px]"
          >
            <span>#SCSS</span>
            <span>#SASS</span>
            <span>#Vuetify</span>
            <span>#Javascript</span>
            <span>#Vue.js</span>
            <span>#HTML5</span>
            <span>#GitLab</span>
          </p>
        </div>
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 4 } }"
          class="flex items-center gap-2 group text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          VIEW DETAILS
          <!-- 화살표 아이콘 (Heroicons 기준) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
        <img
          src="../assets/mockup-03.png"
          alt="메가존 목업 이미지"
          class="absolute top-[6px] left-0 w-[250px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </li>
      <li
        class="project-item px-20 transition-all duration-300 ease-in-out flex justify-between items-center group relative"
      >
        <div>
          <h3 class="transition-transform duration-300 text-4xl font-semibold">
            아모레 뷰티포인트 웹/앱 운영 및 리뉴얼 프로젝트
          </h3>
          <p class="transition-transform duration-300 mt-2 text-l">
            뷰티포인트 반응형 웹/하이브리드 앱 퍼블리싱 및 이벤트 페이지
            퍼블리싱
          </p>
          <p
            class="transition-transform duration-300 text-sm text-gray-400 mt-[4px] flex flex-wrap gap-[4px]"
          >
            <span>#HTML5</span>
            <span>#CSS3</span>
            <span>#Javascript</span>
            <span>#jQuery</span>
            <span>#GitLab</span>
            <span>#웹접근성</span>
          </p>
        </div>
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 3 } }"
          class="flex items-center gap-2 group text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          VIEW DETAILS
          <!-- 화살표 아이콘 (Heroicons 기준) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
        <img
          src="../assets/mockup-04.png"
          alt="메가존 목업 이미지"
          class="absolute top-[-20px] right-[220px] w-[150px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </li>
      <li
        class="project-item px-20 transition-all duration-300 ease-in-out flex justify-between items-center group relative"
      >
        <div>
          <h3 class="transition-transform duration-300 text-4xl font-semibold">
            르노캐피탈 홈페이지 운영 및 구축 프로젝트
          </h3>
          <p class="transition-transform duration-300 mt-2 text-l">
            - 르노캐피탈 홈페이지 견적페이지 풀스택 개발(견적 인터페이스 및
            프론트엔드 개발) <br />- 르노캐피탈 홈페이지 리뉴얼 프로젝트 관리
          </p>
          <p
            class="transition-transform duration-300 text-sm text-gray-400 mt-[4px] flex flex-wrap gap-[4px]"
          >
            <span>#Java</span>
            <span>#Oracle DB</span>
            <span>#Javascript</span>
            <span>#jQuery</span>
            <span>#HTML5</span>
            <span>#CSS3</span>
          </p>
        </div>
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 2 } }"
          class="flex items-center gap-2 group text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          VIEW DETAILS
          <!-- 화살표 아이콘 (Heroicons 기준) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
      </li>
      <li
        class="project-item px-20 transition-all duration-300 ease-in-out flex justify-between items-center group relative"
      >
        <div>
          <h3 class="transition-transform duration-300 text-4xl font-semibold">
            순천향 병원 통합 의료 정보시스템 개발 프로젝트
          </h3>
          <p class="transition-transform duration-300 mt-2 text-l">
            EMR 기반 통합 의료 정보시스템 구축 업무를 수행
          </p>
          <p
            class="transition-transform duration-300 text-sm text-gray-400 mt-[4px] flex flex-wrap gap-[4px]"
          >
            <span>#Java</span>
            <span>#Oracle DB</span>
            <span>#Javascript</span>
            <span>#jQuery</span>
          </p>
        </div>
        <router-link
          :to="{ name: 'ProjectDetail', params: { id: 1 } }"
          class="flex items-center gap-2 group text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          VIEW DETAILS
          <!-- 화살표 아이콘 (Heroicons 기준) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { active } = defineProps({ active: Boolean });
</script>

<style scoped>
.list {
  width: 90%;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.list li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease-in-out;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Hover 효과: li 높이 증가 + 내부 요소 왼쪽 이동 */
.project-item:hover {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.project-item:hover h3,
.project-item:hover p {
  transform: translateX(-10px);
}
</style>
